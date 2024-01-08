<script>
  import { classnames } from '../utils';

  /**
   * The ARIA label for the pagination.
   * @type {string}
   * @default 'pagination'
   */
  export let ariaLabel = 'pagination';

  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * The class name for the pagination list.
   * @type {string}
   * @default ''
   */
  export let listClassName = '';

  /**
   * The size of the pagination.
   * @type {string}
   * @default ''
   */
  export let size = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  $: classes = classnames(className);

  $: listClasses = classnames(listClassName, 'pagination', {
    [`pagination-${size}`]: !!size
  });
</script>

<nav {...$$restProps} class={classes} aria-label={ariaLabel} data-bs-theme={theme}>
  <ul class={listClasses}>
    <slot />
  </ul>
</nav>
