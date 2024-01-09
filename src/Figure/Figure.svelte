<script>
  import { setContext } from 'svelte';
  import { classnames } from '../utils';

  setContext('figure', true);

  /**
   * Additional CSS class names for styling.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The alt attribute for the image.
   * @type {string | undefined}
   * @default undefined
   */
  export let alt = undefined;

  /**
   * The caption for the image.
   * @type {string | HTMLSlotElement | undefined}
   * @default undefined
   */
  export let caption = undefined;

  $: classes = classnames('figure', className);
</script>

<img {alt} {...$$restProps} class={classes} />

<figure class={classes} {...$$restProps}>
  <slot />
  {#if caption || $$slots.caption}
    <figcaption class="figure-caption">
      {caption}<slot name="caption" />
    </figcaption>
  {/if}
</figure>
