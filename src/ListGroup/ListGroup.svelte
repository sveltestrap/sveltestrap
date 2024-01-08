<script>
  import { classnames } from '../utils';

  // Additional CSS class names to add to the container.
  let className = '';

  /**
   * Exports a prop `class` which can be used to apply custom CSS classes.
   * @type {string}
   */
  export { className as class };

  /**
   * Exports a prop `flush` which can be used to render list group items edge-to-edge in a parent container.
   * @type {boolean}
   */
  export let flush = false;

  /**
   * Exports a prop `horizontal` which can be used to render list group items side-by-side in a parent container (e.g., cards).
   * @type {boolean}
   */
  export let horizontal = false;

  /**
   * Exports a prop `numbered` which can be used to render list group items with a number.
   * @type {boolean}
   */
  export let numbered = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  $: classes = classnames(className, 'list-group', {
    'list-group-flush': flush,
    'list-group-horizontal': horizontal,
    'list-group-numbered': numbered
  });
</script>

{#if numbered}
  <ol {...$$restProps} class={classes} data-bs-theme={theme}>
    <slot />
  </ol>
{:else}
  <ul {...$$restProps} class={classes} data-bs-theme={theme}>
    <slot />
  </ul>
{/if}
