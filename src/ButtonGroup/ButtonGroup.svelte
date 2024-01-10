<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Size of the Button Group.
   * @type {string}
   * @default ''
   */
  export let size = '';

  /**
   * Determines if the Button Group should appear vertically.
   * @type {boolean}
   * @default false
   */
  export let vertical = false;

  $: classes = classnames(className, size ? `btn-group-${size}` : false, vertical ? 'btn-group-vertical' : 'btn-group');
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
