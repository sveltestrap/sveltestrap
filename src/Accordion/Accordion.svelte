<script>
  import { createEventDispatcher, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  import { classnames } from '../utils';

  const dispatch = createEventDispatcher();

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Determines if the accordion should have no visible border or background.
   * @type {boolean}
   * @default false
   */
  export let flush = false;

  /**
   * Controls whether the accordion should stay open when an item is clicked.
   * @type {boolean}
   * @default false
   */
  export let stayOpen = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | undefined}
   * @default undefined
   */
  export let theme = undefined;

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
