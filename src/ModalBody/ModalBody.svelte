<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names to apply
   * @type {string}
   */
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'modal-body');
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
