<script>
  import { classnames } from '../utils';
  import { createEventDispatcher, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  const dispatch = createEventDispatcher();

  // Additional CSS class names to add to the container.
  let className = '';

  /**
   * Exports a prop `class` which can be used to apply custom CSS classes.
   * @type {string}
   */
  export { className as class };

  /**
   * Determines if the accordion should have no visible border or background.
   * @type {boolean}
   */
  export let flush = false;

  /**
   * Controls whether the accordion should stay open when another is opened.
   * @type {boolean}
   */
  export let stayOpen = false;

  // A store to manage the open state of the accordion.
  const open = writable();

  // Setting a context for child components, providing them with shared state and functions.
  setContext('accordion', {
    open,
    stayOpen,
    /**
     * Toggles the open state of the accordion based on the provided ID.
     * @param {string | number} id - The unique identifier for the accordion item.
     */
    toggle: (id) => {
      if ($open === id) {
        open.set();
      } else {
        open.set(id);
      }

      // Dispatching a custom event with the current state.
      dispatch('toggle', {
        [id]: $open === id
      });
    }
  });

  /**
   * Computed property that combines custom and default class names.
   * @type {string}
   */
  $: classes = classnames(className, 'accordion', { 'accordion-flush': flush });
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>
