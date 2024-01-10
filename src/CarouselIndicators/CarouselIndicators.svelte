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
   * Carousel items.
   * @type {any[]}
   * @default []
   */
  export let items = [];

  /**
   * Active carousel item index.
   * @type {number}
   * @default 0
   */
  export let activeIndex = 0;

  let classes = '';

  $: classes = classnames(className, 'carousel-indicators');
</script>

<div {...$$restProps} class={classes}>
  {#each items as item, index}
    <button
      data-bs-target
      class:active={activeIndex === index}
      aria-current={activeIndex === index}
      aria-label={item.title}
      on:click={() => (activeIndex = index)}
    >
      {item.title ? item.title : ''}
    </button>
  {/each}
</div>
