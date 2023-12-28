<script>
  import { classnames } from '../utils';
  import { createEventDispatcher, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  const dispatch = createEventDispatcher();

  // Additional CSS class names to add to the container.
  let className = '';

  /**
   * Additional CSS class names to add to the container.
   * @type {string}
   */
  export { className as class };

  /**
   * Determines if the accordion should have no visible border or background.
   * @type {boolean}
   */
  export let flush = false;

  /**
   * Controls whether the accordion should stay open when an item is clicked.
   * @type {boolean}
   */
  export let stayOpen = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  const open = writable(null);

  setContext('accordion', {
    open,
    stayOpen,
    /**
     * Toggles the open state of the accordion based on the provided ID.
     * @param {HTMLDivElement} element - The accordion item element
     */
    toggle: (element) => {
      if ($open === element) {
        open.set(null);
      } else {
        open.set(element);
      }

      dispatch('toggle', {
        [element]: $open === element
      });
    }
  });

  $: classes = classnames(className, 'accordion', { 'accordion-flush': flush });
</script>

<div class={classes} data-bs-theme={theme} {...$$restProps}>
  <slot />
</div>
