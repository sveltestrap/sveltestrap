<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { fade as fadeTrans } from 'svelte/transition';
  import { ToastBody } from '../ToastBody';
  import { ToastHeader } from '../ToastHeader';
  import { classnames } from '../utils';

  const dispatch = createEventDispatcher();

  /**
   * Additional CSS class names to add to the container.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Controls whether the Toast component autohides after a certain duration.
   * @type {boolean}
   * @default false
   */
  export let autohide = false;

  /**
   * Specifies whether the Toast component includes a body wrapper.
   * @type {boolean}
   * @default false
   */
  export let body = false;

  /**
   * The time delay (in milliseconds) before the Toast component autohides.
   * @type {number}
   * @default 5000
   */
  export let delay = 5000;

  /**
   * The duration (in milliseconds) for the fade-in and fade-out animation of the Toast component.
   * @type {number}
   * @default 200
   */
  export let duration = 200;

  /**
   * Controls whether the Toast component fades in and out.
   * @type {boolean}
   * @default true
   */
  export let fade = true;

  /**
   * Specifies the header content of the Toast component.
   * @type {string | undefined}
   * @default undefined
   */
  export let header = undefined;

  /**
   * Controls whether the Toast component is initially open.
   * @type {boolean}
   * @default true
   */
  export let isOpen = true;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   * @default null
   */
  export let theme = null;

  /**
   * Function to toggle the visibility of the Toast component.
   * @type {null}
   * @default null
   */
  export let toggle = null;

  /**
   * The timer ID for the autohide timeout.
   * @type {number}
   */
  let timeout;

  onDestroy(() => {
    return () => clearTimeout(timeout);
  });

  $: if (isOpen && autohide) {
    // @ts-ignore
    timeout = setTimeout(() => (isOpen = false), delay);
  }

  $: classes = classnames(className, 'toast', {
    show: isOpen
  });
</script>

{#if isOpen}
  <div
    {...$$restProps}
    class={classes}
    data-bs-theme={theme}
    transition:fadeTrans={{ duration: fade && duration }}
    on:introstart={() => dispatch('opening')}
    on:introend={() => dispatch('open')}
    on:outrostart={() => dispatch('closing')}
    on:outroend={() => dispatch('close')}
    role="alert"
  >
    {#if header}
      <ToastHeader {toggle}>
        {header}
      </ToastHeader>
    {/if}
    {#if body}
      <ToastBody>
        <slot />
      </ToastBody>
    {:else}
      <slot />
    {/if}
  </div>
{/if}
