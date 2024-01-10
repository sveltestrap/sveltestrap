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
   * The URL to visit when clicked.
   * @type {string}
   * @default ''
   */
  export let href = '';

  $: classes = classnames(className, 'card-link');
</script>

<a {...$$restProps} class={classes} {href}>
  <slot />
</a>
