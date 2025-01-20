<script>
  // Importing a utility function for handling class names.
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the <nav> element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The content to be displayed within the breadcrumb.
   * @type {string}
   */
  export let content = '';

  /**
   * Custom divider character or string for the breadcrumb items.
   * @type {string}
   * @default ''
   */
  export let divider = '';

  /**
   * Additional CSS class names for the <ol> element inside the breadcrumb.
   * @type {string}
   * @default ''
   */
  export let listClassName = '';

  /**
   * Inline styles for the breadcrumb.
   * @type {string}
   */
  export let style = '';

  $: listClasses = classnames('breadcrumb', listClassName);
  $: styles = divider ? `--bs-breadcrumb-divider: '${divider}'; ${style || ''}` : style;
</script>

<nav style={styles} {...$$restProps} class={className}>
  <ol class={listClasses}>
    {#if content}
      {content}
    {:else}
      <slot />
    {/if}
  </ol>
</nav>
