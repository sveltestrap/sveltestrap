<script>
  import { classnames } from '../utils';

  // Additional CSS class name for the component
  let className = '';

  /**
   * Additional CSS class name for the component
   * @type {string}
   */
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
   * The ARIA label for the pagination.
   * @type {string}
   * @default 'pagination'
   */
  export let ariaLabel = 'pagination';

  $: classes = classnames(className);

  $: listClasses = classnames(listClassName, 'pagination', {
    [`pagination-${size}`]: !!size
  });
</script>

<nav {...$$restProps} class={classes} aria-label={ariaLabel}>
  <ul class={listClasses}>
    <slot />
  </ul>
</nav>
