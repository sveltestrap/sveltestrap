<script>
  import { onDestroy, onMount } from 'svelte';
  import { classnames } from '../utils';
  import { getNewCarouselActiveIndex, browserEvent } from '../utils';

  // Additional CSS class names to add to the container.
  let classes = '';

  // Additional CSS class names to add to the container.
  let className = '';

  /**
   * Exports a prop `class` which can be used to apply custom CSS classes.
   * @type {string}
   */
  export { className as class };

  /**
   * An array of items to be displayed in the carousel.
   * @type {Array}
   */
  export let items = [];

  /**
   * The index of the currently active item in the carousel.
   * @type {number}
   */
  export let activeIndex = 0;

  /**
   * A boolean indicating whether the carousel should automatically cycle through items.
   * @type {boolean}
   */
  export let ride = true;

  /**
   * The time interval (in milliseconds) between automatic transitions of the carousel items.
   * @type {number}
   */
  export let interval = 5000;

  /**
   * A boolean indicating whether automatic cycling of the carousel should pause on hover.
   * @type {boolean}
   */
  export let pause = true;

  /**
   * A boolean indicating whether the carousel should respond to keyboard navigation.
   * @type {boolean}
   */
  export let keyboard = true;

  let _rideTimeoutId = false;
  let _removeVisibilityChangeListener = false;

  $: classes = classnames(className, 'carousel', 'slide');

  onMount(() => {
    setRideTimeout();

    _removeVisibilityChangeListener = browserEvent(document, 'visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        clearRideTimeout();
      } else {
        setRideTimeout();
      }
    });
  });

  onDestroy(() => {
    if (_rideTimeoutId) {
      clearTimeout(_rideTimeoutId);
    }

    if (_removeVisibilityChangeListener) {
      _removeVisibilityChangeListener();
    }
  });

  function handleKeydown(event) {
    if (!keyboard) {
      return;
    }

    let direction = '';

    if (event.key === 'ArrowLeft') {
      direction = 'prev';
    } else if (event.key === 'ArrowRight') {
      direction = 'next';
    } else {
      return;
    }

    activeIndex = getNewCarouselActiveIndex(direction, items, activeIndex);
  }

  function setRideTimeout() {
    clearRideTimeout();

    if (ride) {
      _rideTimeoutId = setTimeout(autoNext, interval);
    }
  }

  function clearRideTimeout() {
    if (_rideTimeoutId) {
      clearTimeout(_rideTimeoutId);
    }
  }

  function autoNext() {
    activeIndex = getNewCarouselActiveIndex('next', items, activeIndex);
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  role="presentation"
  {...$$restProps}
  class={classes}
  on:mouseenter={() => (pause ? clearRideTimeout() : undefined)}
  on:mouseleave={() => (pause ? setRideTimeout() : undefined)}
>
  <slot />
</div>