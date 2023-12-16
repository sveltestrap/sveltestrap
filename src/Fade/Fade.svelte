<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import toggle from '../toggle';

  const dispatch = createEventDispatcher();

  /**
   * Tracks the open/closed state of the Fade component.
   * @type {boolean}
   */
  export let isOpen = false;

  // Additional CSS class names for styling.
  let className = '';
  /**
   * Additional CSS class names for styling.
   * @type {string}
   */
  export { className as class };

  /**
   * Callback triggered before Fade enters; dispatches 'opening'.
   * @type {Function}
   */
  export let onEntering = () => dispatch('opening');

  /**
   * Callback triggered after Fade has entered; dispatches 'open'.
   * @type {Function}
   */
  export let onEntered = () => dispatch('open');

  /**
   * Callback triggered before Fade exits; dispatches 'closing'.
   * @type {Function}
   */
  export let onExiting = () => dispatch('closing');

  /**
   * Callback triggered after Fade has exited; dispatches 'close'.
   * @type {Function}
   */
  export let onExited = () => dispatch('close');

  /**
   * Manages the state of a toggling element associated with the Fade component.
   * @type {HTMLElement | null}
   */
  export let toggler = null;

  onMount(() =>
    toggle(toggler, (e) => {
      isOpen = !isOpen;
      e.preventDefault();
    })
  );
</script>

{#if isOpen}
  <div
    {...$$restProps}
    transition:fade|local
    on:introstart
    on:introend
    on:outrostart
    on:outroend
    on:introstart={onEntering}
    on:introend={onEntered}
    on:outrostart={onExiting}
    on:outroend={onExited}
    class={className}
  >
    <slot />
  </div>
{/if}
