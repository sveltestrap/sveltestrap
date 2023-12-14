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
   * Size of the component.
   * @type {string}
   */
  export let size = '';

  $: classes = classnames(className, 'input-group', size ? `input-group-${size}` : null);
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
