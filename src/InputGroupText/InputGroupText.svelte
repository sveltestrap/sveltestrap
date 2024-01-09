<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class name for the component
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'input-group-text');
</script>

<span {...$$restProps} class={classes}>
  <slot />
</span>
