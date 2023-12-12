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
   * Type of spinner border.
   * @type {string}
   */
  export let type = 'border';

  /**
   * Size of the spinner.
   * @type {string}
   */
  export let size = '';

  /**
   * Color of the spinner.
   * @type {string}
   */
  export let color = '';

  $: classes = classnames(
    className,
    size ? `spinner-${type}-${size}` : false,
    `spinner-${type}`,
    color ? `text-${color}` : false
  );
</script>

<div {...$$restProps} role="status" class={classes}>
  <span class="visually-hidden">
    <slot>Loading...</slot>
  </span>
</div>
