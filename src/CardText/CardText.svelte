<script>
  import { classnames } from '../utils.js';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'card-text');
</script>

<p {...$$restProps} class={classes}>
  <slot />
</p>
