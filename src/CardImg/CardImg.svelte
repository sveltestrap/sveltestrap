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
   * Place image at the top of the card.
   * @type {boolean}
   * @default false
   */
  export let top = false;

  /**
   * Place image at the bottom of the card.
   * @type {boolean}
   * @default false
   */
  export let bottom = false;

  /**
   * The image URL.
   * @type {string}
   * @default ''
   */
  export let src;

  /**
   * The image alt text.
   * @type {string}
   * @default ''
   */
  export let alt = '';

  let classes = '';

  $: {
    let cardImgClassName = 'card-img';

    if (top) {
      cardImgClassName = 'card-img-top';
    }

    if (bottom) {
      cardImgClassName = 'card-img-bottom';
    }

    classes = classnames(className, cardImgClassName);
  }
</script>

<img {...$$restProps} class={classes} {src} {alt} />
