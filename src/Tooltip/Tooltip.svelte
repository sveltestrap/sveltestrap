<script>
  import { onDestroy, onMount } from 'svelte';
  import { createPopper } from '@popperjs/core';
  import { classnames, uuid, getTransitionDuration } from '../utils';
  import { InlineContainer } from '../InlineContainer';
  import { Portal } from '../Portal';

  /**
   * Additional CSS class names for the tooltip.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Flag to enable animation for the tooltip.
   * @type {boolean}
   */
  export let animation = true;

  /**
   * The content to be displayed within the tooltip.
   * @type {string}
   */
  export let content = '';

  /**
   * The container in which the tooltip should be rendered.
   * @type {string}
   */
  export let container = undefined;
  /**
   * Unique identifier for the tooltip.
   * @type {string}
   */
  export let id = `tooltip_${uuid()}`;

  /**
   * Controls the visibility of the tooltip.
   * @type {boolean}
   */
  export let isOpen = false;

  /**
   * The preferred placement of the tooltip.
   * @type {string}
   */
  export let placement = 'top';

  /**
   * The target element to which the tooltip is attached.
   * @type {string | HTMLElement}
   */
  export let target = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * The delay for showing the tooltip (in milliseconds).
   * @type {string | number}
   */
  export let delay = 0;

  /**
   * @type {string}
   */
  let bsPlacement;
  /**
   * @type {object}
   */
  let popperInstance;
  /**
   * @type {string}
   */
  let popperPlacement = placement;
  /**
   * @type {HTMLDivElement | null}
   */
  let targetEl;
  /**
   * @type {HTMLDivElement | null}
   */
  let tooltipEl;
  /**
   * @type {string}
   */
  let showTimer;
  /**
   * @type {boolean}
   */
  let hasBeenShown = false;
  /**
   * @type {number}
   */
  let cleanupTimer;

  const DEFAULT_TRANSITION_DURATION = 500;

  const checkPopperPlacement = {
    name: 'checkPopperPlacement',
    enabled: true,
    phase: 'main',
    // @ts-ignore
    fn({ state }) {
      popperPlacement = state.placement;
    }
  };

  $: {
    if (isOpen && tooltipEl && !popperInstance) {
      // Create popper instance only once on first show
      // @ts-ignore
      popperInstance = createPopper(targetEl, tooltipEl, {
        placement,
        modifiers: [checkPopperPlacement]
      });
    }

    if (isOpen) {
      hasBeenShown = true;
    }
  }

  const open = () => {
    clearTimeout(showTimer);
    clearTimeout(cleanupTimer);
    showTimer = setTimeout(() => (isOpen = true), delay);
  };

  const close = () => {
    clearTimeout(showTimer);
    isOpen = false;

    // Clean up DOM after a delay to allow for smooth transitions
    clearTimeout(cleanupTimer);
    cleanupTimer = setTimeout(
      () => {
        hasBeenShown = false;
      },
      getTransitionDuration(tooltipEl) || DEFAULT_TRANSITION_DURATION
    ); // Fallback to 500ms if no transition
  };

  onMount(registerEventListeners);

  onDestroy(() => {
    unregisterEventListeners();
    clearTimeout(showTimer);
    clearTimeout(cleanupTimer);
    if (popperInstance) {
      // @ts-ignore
      popperInstance.destroy();
      popperInstance = undefined;
    }
  });

  $: if (target) {
    unregisterEventListeners();
    registerEventListeners();
  }

  function registerEventListeners() {
    // eslint-disable-next-line eqeqeq
    if (target == null || !target) {
      targetEl = null;
      return;
    }

    // Check if target is HTMLElement
    try {
      if (target instanceof HTMLElement) {
        // @ts-ignore
        targetEl = target;
      }
    } catch (e) {
      // fails on SSR
    }

    // If targetEl has not been found yet
    // eslint-disable-next-line eqeqeq
    if (targetEl == null) {
      // Check if target can be found via querySelector
      try {
        targetEl = document.querySelector(`#${target}`);
      } catch (e) {
        // fails on SSR
      }
    }

    // If we've found targetEl
    if (targetEl) {
      targetEl.addEventListener('mouseover', open);
      targetEl.addEventListener('mouseleave', close);
      targetEl.addEventListener('focus', open);
      targetEl.addEventListener('blur', close);
    }
  }

  function unregisterEventListeners() {
    if (targetEl) {
      targetEl.removeEventListener('mouseover', open);
      targetEl.removeEventListener('mouseleave', close);
      targetEl.removeEventListener('focus', open);
      targetEl.removeEventListener('blur', close);
      targetEl.removeAttribute('aria-describedby');
    }
  }

  $: if (targetEl) {
    if (isOpen) {
      targetEl.setAttribute('aria-describedby', id);
    } else {
      targetEl.removeAttribute('aria-describedby');
    }
  }

  $: {
    if (popperPlacement === 'left') {
      bsPlacement = 'start';
    } else if (popperPlacement === 'right') {
      bsPlacement = 'end';
    } else {
      bsPlacement = popperPlacement;
    }
  }

  $: classes = classnames(
    className,
    'tooltip',
    `bs-tooltip-${bsPlacement}`,
    animation ? 'fade' : false,
    isOpen ? 'show' : false
  );

  $: outer = container === 'inline' ? InlineContainer : Portal;
</script>

{#if isOpen || hasBeenShown}
  <svelte:component this={outer}>
    <div
      bind:this={tooltipEl}
      {...$$restProps}
      class={classes}
      {id}
      role="tooltip"
      data-bs-theme={theme}
      data-bs-delay={delay}
      x-placement={popperPlacement}
      style={isOpen ? '' : 'display: none;'}
    >
      <div class="tooltip-arrow" data-popper-arrow />
      <div class="tooltip-inner">
        {#if content}
          {content}
        {:else}
          <slot />
        {/if}
      </div>
    </div>
  </svelte:component>
{/if}
