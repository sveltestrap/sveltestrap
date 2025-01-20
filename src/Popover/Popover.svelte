<script>
  import { onMount } from 'svelte';
  import { createPopper } from '@popperjs/core';
  import { classnames } from '../utils';
  import { InlineContainer } from '../InlineContainer';
  import { Portal } from '../Portal';

  /**
   * Additional CSS class names for the popover.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Flag to enable animation for the popover.
   * @type {boolean}
   */
  export let animation = true;

  /**
   * The content to be displayed within the popover.
   * @type {string}
   */
  export let content = '';

  /**
   * The container in which the popover should be rendered.
   * @type {string | undefined}
   */
  export let container = undefined;

  /**
   * Flag to indicate if the popover should be dismissible.
   * @type {boolean}
   */
  export let dismissible = false;

  /**
   * Flag to hide the popover on outside click.
   * @type {boolean}
   */
  export let hideOnOutsideClick = false;

  /**
   * Controls the visibility of the popover.
   * @type {boolean}
   */
  export let isOpen = false;

  /**
   * The preferred placement of the popover.
   * @type {string}
   */
  export let placement = 'top';

  /**
   * The target element to which the popover is attached.
   * @type {string}
   */
  export let target = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * The title of the popover.
   * @type {string}
   */
  export let title = '';

  /**
   * The trigger action to open/close the popover.
   * @type {string}
   */
  export let trigger = 'click';

  let targetEl;
  let popoverEl;
  let popperInstance;
  let bsPlacement;
  let popperPlacement = placement;

  const checkPopperPlacement = {
    name: 'checkPopperPlacement',
    enabled: true,
    phase: 'main',
    fn({ state }) {
      popperPlacement = state.placement;
    }
  };

  $: {
    if (isOpen && popoverEl) {
      popperInstance = createPopper(targetEl, popoverEl, {
        placement,
        modifiers: [
          checkPopperPlacement,
          {
            name: 'offset',
            options: {
              offset: () => {
                return [0, 8];
              }
            }
          }
        ]
      });
    } else if (popperInstance) {
      popperInstance.destroy();
      popperInstance = undefined;
    }
  }

  const open = () => (isOpen = true);
  const close = () => (isOpen = false);
  const toggle = () => (isOpen = !isOpen);

  onMount(() => {
    targetEl = document.querySelector(`#${target}`);

    switch (trigger) {
      case 'hover':
        targetEl.addEventListener('mouseover', open);
        targetEl.addEventListener('mouseleave', close);
        break;
      case 'focus':
        targetEl.addEventListener('focus', open);
        targetEl.addEventListener('blur', close);
        break;
      default:
        targetEl.addEventListener('click', toggle);

        if (dismissible) {
          targetEl.addEventListener('blur', close);
        }

        break;
    }

    return () => {
      switch (trigger) {
        case 'hover':
          targetEl.removeEventListener('mouseover', open);
          targetEl.removeEventListener('mouseleave', close);
          break;
        case 'focus':
          targetEl.removeEventListener('focus', open);
          targetEl.removeEventListener('blur', close);
          break;
        default:
          targetEl.removeEventListener('click', toggle);

          if (dismissible) {
            targetEl.removeEventListener('blur', close);
          }
          break;
      }
    };
  });

  const handleOutsideClick = (event) => {
    if (isOpen && hideOnOutsideClick && !popoverEl.contains(event.target)) {
      isOpen = false;
    }
  };

  $: if (!target) {
    throw new Error('Need target!');
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
    'popover',
    animation ? 'fade' : false,
    `bs-popover-${bsPlacement}`,
    isOpen ? 'show' : false
  );

  $: outer = container === 'inline' ? InlineContainer : Portal;
</script>

<svelte:window on:mousedown={handleOutsideClick} />

{#if isOpen}
  <svelte:component this={outer}>
    <div
      bind:this={popoverEl}
      {...$$restProps}
      class={classes}
      role="tooltip"
      data-bs-theme={theme}
      x-placement={popperPlacement}
    >
      <div class="popover-arrow" data-popper-arrow />
      <h3 class="popover-header">
        <slot name="title">{title}</slot>
      </h3>
      <div class="popover-body">
        {#if content}
          {content}
        {:else}
          <slot />
        {/if}
      </div>
    </div>
  </svelte:component>
{/if}
