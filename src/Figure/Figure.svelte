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
   * The caption for the image.
   * @type {string | HTMLSlotElement | undefined}
   * @default undefined
   */
  export let caption = undefined;

  $: classes = classnames('figure', className);
</script>

<figure class={classes} {...$$restProps}>
  <slot />
  {#if caption || $$slots.caption}
    <figcaption class="figure-caption">
      {caption}<slot name="caption" />
    </figcaption>
  {/if}
</figure>
