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

  // Additional CSS class names to add to the container.
  let className = '';
  // Additional CSS class names to add to the modal.
  let staticModal = false;

  /**
   * Exports a prop `class` which can be used to apply custom CSS classes.
   * @type {string}
   */
  export { className as class };

  /**
   * Exports a prop `static` which can be used to render a modal that doesn't close when the backdrop is clicked.
   * @type {boolean}
   */
  export { staticModal as static };

  /**
   * Exports a prop `isOpen` which can be used to control the modal state.
   * @type {boolean}
   */
  export let isOpen = false;

  /**
   * Exports a prop `autoFocus` which can be used to automatically focus the modal when it first opens.
   * @type {boolean}
   */
  export let autoFocus = true;

  /**
   * Exports a prop `body` indicating whether the modal should include a body content.
   * @type {boolean}
   */
  export let body = false;

  /**
   * Exports a prop `centered` to control the positioning of the modal, ensuring it is centered.
   * @type {boolean}
   */
  export let centered = false;

  /**
   * Exports a prop `container` to specify the container element in which the modal should be rendered.
   * @type {HTMLElement | null | undefined}
   */
  export let container = undefined;

  /**
   * Exports a prop `fullscreen` to enable or disable fullscreen mode for the modal.
   * @type {boolean}
   */
  export let fullscreen = false;

  /**
   * Exports a prop `header` for customizing the modal header content.
   * @type {string | undefined}
   */
  export let header = undefined;

  /**
   * Exports a prop `keyboard` to control whether the modal can be closed using the keyboard.
   * @type {boolean}
   */
  export let keyboard = true;

  /**
   * Exports a prop `scrollable` to determine if the modal content should be scrollable.
   * @type {boolean}
   */
  export let scrollable = false;

  /**
   * Exports a prop `size` to specify the size of the modal (e.g., 'sm', 'lg').
   * @type {string}
   */
  export let size = '';

  /**
   * Exports a prop `toggle` which can be used to toggle the modal state.
   * @type {Function | undefined}
   */
  export let toggle = undefined;

  /**
   * Exports a prop `labelledBy` for accessibility, associating the modal with a header element.
   * @type {string | undefined}
   */
  export let labelledBy = header ? `modal-${uuid()}` : undefined;

  /**
   * Exports a prop `backdrop` to control the visibility of the modal backdrop.
   * @type {boolean}
   */
  export let backdrop = true;

  /**
   * Exports a prop `wrapClassName` for additional classes to be added to the modal wrapper.
   * @type {string}
   */
  export let wrapClassName = '';

  /**
   * Exports a prop `modalClassName` for additional classes to be added to the modal content.
   * @type {string}
   */
  export let modalClassName = '';

  /**
   * Exports a prop `contentClassName` for additional classes to be added to the modal body/content.
   * @type {string}
   */
  export let contentClassName = '';

  /**
   * Exports a prop `fade` to control the fade effect when opening or closing the modal.
   * @type {boolean}
   */
  export let fade = true;

  /**
   * Exports a prop `unmountOnClose` to determine whether the modal should be unmounted when closed.
   * @type {boolean}
   */
  export let unmountOnClose = true;

  /**
   * Exports a prop `returnFocusAfterClose` to specify if focus should be returned to the triggering element after modal close.
   * @type {boolean}
   */
  export let returnFocusAfterClose = true;

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
    <div class={wrapClassName} tabindex="-1" {...$$restProps}>
      {#if isOpen}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <div
          in:modalIn|global
          out:modalOut|global
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
