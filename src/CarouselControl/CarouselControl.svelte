<script>
  import { classnames, getNewCarouselActiveIndex } from '../utils';

  /**
   * Additional CSS class names for the carousel control.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * The direction of carousel control, can be 'next' or 'prev'.
   * @type {string}
   */
  export let direction = '';

  /**
   * The text for screen readers, indicating the direction.
   * @type {string}
   */
  export let directionText = '';

  /**
   * The active index of the carousel.
   * @type {number}
   */
  export let activeIndex = 0;

  /**
   * The items in the carousel.
   * @type {array}
   */
  export let items = [];

  /**
   * Determines whether the carousel should cycle continuously or have hard stops.
   * @type {boolean}
   */
  export let wrap = true;

  let classes = '';
  let screenText = '';

  $: classes = classnames(`carousel-control-${direction}`, className);
  $: screenText = directionText ? directionText : direction === 'next' ? 'Next' : 'Previous';

  function clickHandler() {
    const endOrBeginning =
      (direction === 'next' && activeIndex + 1 > items.length - 1) || (direction === 'prev' && activeIndex - 1 < 0);

    if (!wrap && endOrBeginning) {
      return;
    }

    activeIndex = getNewCarouselActiveIndex(direction, items, activeIndex);
  }
</script>

<a {...$$restProps} class={classes} role="button" href="#{direction}" on:click|preventDefault={clickHandler}>
  <span class="carousel-control-{direction}-icon" aria-hidden="true" />
  <span class="visually-hidden">{screenText}</span>
</a>
