<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the <ul> element.
   * @type {string}
   */
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'modal-footer');
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
