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
   * Header text for caption.
   * @type {string}
   * @default ''
   */
  export let captionHeader = '';

  /**
   * Text for caption.
   * @type {string}
   * @default ''
   */
  export let captionText = '';

  let classes = '';

  $: classes = classnames(className, 'carousel-caption', 'd-none', 'd-md-block');
</script>

<div {...$$restProps} class={classes}>
  {#if captionHeader}<h5>{captionHeader}</h5>{/if}
  {#if captionText}<p>{captionText}</p>{/if}
  <slot />
</div>
