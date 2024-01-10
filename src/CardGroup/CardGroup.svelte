<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'card-group');
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
