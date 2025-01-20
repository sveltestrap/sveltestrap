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
   * Index of the active item.
   * @type {number}
   * @default 0
   */
  export let activeIndex = 0;

  /**
   * Index of the current item.
   * @type {number}
   * @default 0
   */
  export let itemIndex = 0;

  let classes = '';

  $: classes = classnames(className, 'carousel-item');
</script>

<div {...$$restProps} class={classes} class:active={itemIndex === activeIndex}>
  <slot />
</div>
