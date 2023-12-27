<script context="module">
  // TODO fade option
  let openCount = 0;
</script>

<script>
  import { createEventDispatcher, onDestroy, onMount, afterUpdate } from 'svelte';

  import { modalIn, modalOut } from '../transitions';
  import { InlineContainer } from '../InlineContainer';
  import { ModalBackdrop } from '../ModalBackdrop';
  import { ModalBody } from '../ModalBody';
  import { ModalHeader } from '../ModalHeader';
  import { Portal } from '../Portal';

  import {
    browserEvent,
    classnames,
    conditionallyUpdateScrollbar,
    getOriginalBodyPadding,
    setScrollbarWidth,
    uuid
  } from '../utils';

  const dispatch = createEventDispatcher();

  /**
   * Additional CSS class names to apply
   * @type {string}
   */
  let className = '';
  export { className as class };

  // Prevents the modal from closing when the backdrop has been clicked.
  let staticModal = false;

  /**
   * Prevents the modal from closing when the backdrop has been clicked.
   * @type {boolean}
   */
  export { staticModal as static };

  /**
   * Automatically puts focus on the modal with it first opens.
   * @type {boolean}
   */
  export let autoFocus = true;

  /**
   * Indicates whether the modal should include a body content.
   * @type {boolean}
   */
  export let body = false;

  /**
   * Auto-positioning of the modal to ensure its centered in the viewport.
   * @type {boolean}
   */
  export let centered = false;

  /**
   * Container element that the modal should be rendered.
   * @type {HTMLElement | null | undefined}
   */
  export let container = undefined;

  /**
   * Determines whether or no the modal is rendered in fullscreen mode.
   * @type {boolean}
   */
  export let fullscreen = false;

  /**
   * Customize the modal header content.
   * @type {string | undefined}
   */
  export let header = undefined;

  /**
   * Used to control the modal state
   * @type {boolean}
   */
  export let isOpen = false;

  /**
   * Ccontrol whether the modal can be closed using the ESC key.
   * @type {boolean}
   */
  export let keyboard = true;

  /**
   * Controls the visibility of the modal backdrop.
   * @type {boolean}
   */
  export let backdrop = true;

  /**
   * Additional classes to be added to the modal body/content.
   * @type {string}
   */
  export let contentClassName = '';

  /**
   * Control the fade effect when opening or closing the modal.
   * @type {boolean}
   */
  export let fade = true;

  /**
   * `labelledBy` for accessibility, associating the modal with a header element.
   * @type {string | undefined}
   */
  export let labelledBy = header ? `modal-${uuid()}` : undefined;

  /**
   * Additional classes to be added to the modal content.
   * @type {string}
   */
  export let modalClassName = '';

  /**
   * Custom styling to apply to the modal.
   * @type {string | null}
   */
  export let modalStyle = null;

  /**
   * Should focus should be returned to the triggering element after modal close.
   * @type {boolean}
   */
  export let returnFocusAfterClose = true;

  /**
   * Determines if the modal content should be scrollable.
   * @type {boolean}
   */
  export let scrollable = false;

  /**
   * Specify the size of the modal (e.g., 'sm', 'lg').
   * @type {string}
   */
  export let size = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * Callback to toggle the modal state.
   * @type {Function | undefined}
   */
  export let toggle = undefined;

  /**
   * Determines whether the modal should be unmounted when closed.
   * @type {boolean}
   */
  export let unmountOnClose = true;

  /**
   * Additional classes to be added to the modal wrapper.
   * @type {string}
   */
  export let wrapClassName = '';

  let hasOpened = false;
  let _isMounted = false;
  let _triggeringElement;
  let _originalBodyPadding;
  let _lastIsOpen = isOpen;
  let _lastHasOpened = hasOpened;
  let _dialog;
  let _mouseDownElement;
  let _removeEscListener;

  onMount(() => {
    if (isOpen) {
      init();
      hasOpened = true;
    }

    if (hasOpened && autoFocus) {
      setFocus();
    }
  });

  onDestroy(() => {
    destroy();
    if (hasOpened) {
      close();
    }
  });

  afterUpdate(() => {
    if (isOpen && !_lastIsOpen) {
      init();
      hasOpened = true;
    }

    if (autoFocus && hasOpened && !_lastHasOpened) {
      setFocus();
    }

    _lastIsOpen = isOpen;
    _lastHasOpened = hasOpened;
  });

  function setFocus() {
    if (_dialog && _dialog.parentNode && typeof _dialog.parentNode.focus === 'function') {
      _dialog.parentNode.focus();
    }
  }

  function init() {
    try {
      _triggeringElement = document.activeElement;
    } catch (err) {
      _triggeringElement = null;
    }

    if (!staticModal) {
      _originalBodyPadding = getOriginalBodyPadding();
      conditionallyUpdateScrollbar();
      if (openCount === 0) {
        document.body.className = classnames(document.body.className, 'modal-open');
      }

      ++openCount;
    }
    _isMounted = true;
  }

  function manageFocusAfterClose() {
    if (_triggeringElement) {
      if (typeof _triggeringElement.focus === 'function' && returnFocusAfterClose) {
        _triggeringElement.focus();
      }

      _triggeringElement = null;
    }
  }

  function destroy() {
    manageFocusAfterClose();
  }

  function close() {
    if (openCount <= 1) {
      document.body.classList.remove('modal-open');
    }

    manageFocusAfterClose();
    openCount = Math.max(0, openCount - 1);

    setScrollbarWidth(_originalBodyPadding);
  }

  function handleBackdropClick(e) {
    if (e.target === _mouseDownElement) {
      if (!isOpen || !backdrop) {
        return;
      }

      const backdropElem = _dialog ? _dialog.parentNode : null;
      if (backdrop === true && backdropElem && e.target === backdropElem && toggle) {
        e.stopPropagation();
        toggle(e);
      }
    }
  }

  function onModalOpened() {
    dispatch('open');
    _removeEscListener = browserEvent(document, 'keydown', (event) => {
      if (event.key && event.key === 'Escape' && keyboard) {
        if (toggle && backdrop === true) {
          if (_removeEscListener) _removeEscListener();
          toggle(event);
        }
      }
    });
  }

  function onModalClosing() {
    dispatch('closing');
    if (_removeEscListener) {
      _removeEscListener();
    }
  }

  function onModalClosed() {
    dispatch('close');
    if (unmountOnClose) {
      destroy();
    }
    close();
    if (_isMounted) {
      hasOpened = false;
    }
    _isMounted = false;
  }

  function handleBackdropMouseDown(e) {
    _mouseDownElement = e.target;
  }

  const dialogBaseClass = 'modal-dialog';

  $: classes = classnames(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    'modal-fullscreen': fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === 'string',
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });

  $: outer = container === 'inline' || staticModal ? InlineContainer : Portal;
</script>

{#if _isMounted}
  <svelte:component this={outer}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class={wrapClassName} tabindex="-1" {...$$restProps} data-bs-theme={theme}>
      {#if isOpen}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <div
          in:modalIn|global
          out:modalOut|global
          style={modalStyle}
          aria-labelledby={labelledBy}
          class={classnames('modal', modalClassName, {
            fade,
            'position-static': staticModal
          })}
          role="dialog"
          on:introstart={() => dispatch('opening')}
          on:introend={onModalOpened}
          on:outrostart={onModalClosing}
          on:outroend={onModalClosed}
          on:click={handleBackdropClick}
          on:mousedown={handleBackdropMouseDown}
        >
          <slot name="external" />
          <div class={classes} role="document" bind:this={_dialog}>
            <div class={classnames('modal-content', contentClassName)}>
              {#if header}
                <ModalHeader {toggle} id={labelledBy}>
                  {header}
                </ModalHeader>
              {/if}
              {#if body}
                <ModalBody>
                  <slot />
                </ModalBody>
              {:else}
                <slot />
              {/if}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </svelte:component>
{/if}

{#if backdrop && !staticModal}
  <svelte:component this={outer}>
    <ModalBackdrop {fade} {isOpen} />
  </svelte:component>
{/if}

<style>
  :global(.modal-open) {
    overflow: hidden;
    padding-right: 0;
  }
</style>
