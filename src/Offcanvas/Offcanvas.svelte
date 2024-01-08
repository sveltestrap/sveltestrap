<script>
  import { createEventDispatcher, onMount } from 'svelte';

  import { InlineContainer } from '../InlineContainer';
  import { OffcanvasBackdrop } from '../OffcanvasBackdrop';
  import { OffcanvasBody } from '../OffcanvasBody';
  import { OffcanvasHeader } from '../OffcanvasHeader';
  import { Portal } from '../Portal';

  import { classnames, browserEvent, getTransitionDuration } from '../utils';

  const dispatch = createEventDispatcher();

  /**
   * Additional CSS class names to apply.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Controls whether the backdrop is displayed behind the offcanvas.
   * @type {boolean}
   */
  export let backdrop = true;

  /**
   * Controls whether the offcanvas body is displayed.
   * @type {boolean}
   */
  export let body = true;

  /**
   * The container element where the offcanvas will be placed.
   * @type {string}
   */
  export let container = 'body';

  /**
   * Controls whether to use a fade animation when opening/closing the offcanvas.
   * @type {boolean}
   */
  export let fade = true;

  /**
   * The header content of the offcanvas.
   * @type {string}
   */
  export let header = '';

  /**
   * Indicates whether the offcanvas is currently open.
   * @type {boolean}
   */
  export let isOpen = false;

  /**
   * Controls whether keyboard interaction is enabled for closing the offcanvas.
   * @type {boolean}
   */
  export let keyboard = true;

  /**
   * The placement of the offcanvas ('start', 'end', etc.).
   * @type {string}
   */
  export let placement = 'start';

  /**
   * Controls whether to allow scrolling of the body when the offcanvas is open.
   * @type {boolean}
   */
  export let scroll = false;

  /**
   * Controls the size of the offcanvas for small screens.
   * @type {boolean}
   */
  export let sm = false;

  /**
   * Controls the size of the offcanvas for medium screens.
   * @type {boolean}
   */
  export let md = false;

  /**
   * Controls the size of the offcanvas for large screens.
   * @type {boolean}
   */
  export let lg = false;

  /**
   * Controls the size of the offcanvas for extra-large screens.
   * @type {boolean}
   */
  export let xl = false;

  /**
   * Controls the size of the offcanvas for extra-extra-large screens.
   * @type {boolean}
   */
  export let xxl = false;

  /**
   * Additional CSS styles to apply to the offcanvas.
   * @type {string}
   */
  export let style = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * Function to toggle the state of the offcanvas.
   * @type {undefined|function}
   */
  export let toggle = undefined;

  /**
   * TODO: Support these like Modals:
   * - autoFocus
   * - unmountOnClose
   * - focus trap
   */
  let bodyElement;
  let isTransitioning = false;
  let element;
  let removeEscListener;

  onMount(() => (bodyElement = document.body));

  $: if (bodyElement && !scroll) {
    bodyElement.classList.toggle('overflow-noscroll', isOpen || isTransitioning);
  }

  $: if (element) {
    isOpen = isOpen;
    isTransitioning = true;

    dispatch(isOpen ? 'opening' : 'closing');

    setTimeout(() => {
      isTransitioning = false;
      dispatch(isOpen ? 'open' : 'close');
    }, getTransitionDuration(element));
  }

  $: if (isOpen && toggle && typeof window !== 'undefined') {
    removeEscListener = browserEvent(document, 'keydown', (event) => {
      if (event.key && event.key === 'Escape' && keyboard) {
        toggle();
      }
    });
  }

  $: if (!isOpen && removeEscListener) {
    removeEscListener();
  }

  $: handleMouseDown =
    backdrop && toggle && bodyElement && isOpen
      ? (e) => {
          if (e.target === bodyElement) {
            toggle();
          }
        }
      : undefined;

  $: classes = classnames(
    {
      offcanvas: !sm && !md && !lg && !xl && !xxl,
      'offcanvas-sm': sm,
      'offcanvas-md': md,
      'offcanvas-lg': lg,
      'offcanvas-xl': xl,
      'offcanvas-xxl': xxl,
      show: isOpen
    },
    `offcanvas-${placement}`,
    className
  );

  $: outer = container === 'inline' ? InlineContainer : Portal;
</script>

<svelte:body on:mousedown={handleMouseDown} />

<svelte:component this={outer}>
  <div
    {...$$restProps}
    bind:this={element}
    aria-hidden={!isOpen ? true : undefined}
    aria-modal={isOpen ? true : undefined}
    class={classes}
    role={isOpen ? 'dialog' : undefined}
    data-bs-theme={theme}
    style={`visibility: ${isOpen || isTransitioning ? 'visible' : 'hidden'};${style}`}
    tabindex="-1"
  >
    {#if toggle || header || $$slots.header}
      <OffcanvasHeader {toggle}>
        {#if header}
          {header}
        {/if}
        <slot name="header" />
      </OffcanvasHeader>
    {/if}
    {#if body}
      <OffcanvasBody>
        <slot />
      </OffcanvasBody>
    {:else}
      <slot />
    {/if}
  </div>
  {#if backdrop}
    <OffcanvasBackdrop on:click={toggle || undefined} {fade} {isOpen} />
  {/if}
</svelte:component>

<style>
  :global(.overflow-noscroll) {
    overflow: hidden;
    padding-right: 0px;
  }
</style>
