<script>
  import { onDestroy, onMount } from 'svelte';

  import { browserEvent, classnames, getNewCarouselActiveIndex } from '../utils';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The index of the currently active item in the carousel.
   * @type {number}
   * @default 0
   */
  export let activeIndex = 0;

  /**
   * The time interval (in milliseconds) between automatic transitions of the carousel items.
   * @type {number}
   * @default 5000
   */
  export let interval = 5000;

  /**
   * An array of items to be displayed in the carousel.
   * @type {Array}
   * @default []
   */
  export let items = [];

  /**
   * A boolean indicating whether the carousel should respond to keyboard navigation.
   * @type {boolean}
   * @default true
   */
  export let keyboard = true;

  /**
   * A boolean indicating whether automatic cycling of the carousel should pause on hover.
   * @type {boolean}
   * @default true
   */
  export let pause = true;

  /**
   * A boolean indicating whether the carousel should automatically cycle through items.
   * @type {boolean}
   * @default true
   */
  export let ride = true;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | undefined}
   * @default undefined
   */
  export let theme = undefined;

  let _rideIntervalId = false;
  let _removeVisibilityChangeListener = false;
  let classes = '';

  $: classes = classnames(className, 'carousel', 'slide');

  onMount(() => {
    startRideInterval();

    _removeVisibilityChangeListener = browserEvent(document, 'visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        clearRideInterval();
      } else {
        startRideInterval();
      }
    });
  });

  onDestroy(() => {
    if (_rideIntervalId) {
      clearInterval(_rideIntervalId);
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

  function startRideInterval() {
    clearRideInterval();

    if (ride) {
      _rideIntervalId = setInterval(autoNext, interval);
    }
  }

  function clearRideInterval() {
    if (_rideIntervalId) {
      clearInterval(_rideIntervalId);
    }
  }

  function autoNext() {
    activeIndex = getNewCarouselActiveIndex('next', items, activeIndex);
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  {...$$restProps}
  role="presentation"
  class={classes}
  data-bs-theme={theme}
  on:mouseenter={() => (pause ? clearRideInterval() : undefined)}
  on:mouseleave={() => (pause ? startRideInterval() : undefined)}
>
  <slot />
</div>
