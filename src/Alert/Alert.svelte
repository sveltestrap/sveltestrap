<script>
  import { fade as fadeTransition } from 'svelte/transition';
  import { classnames } from '../utils';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The content to be displayed in the alert.
   * @type {any}
   */
  export let content = undefined;

  /**
   * ARIA label for the close button.
   * @type {string}
   * @default 'Close'
   */
  export let closeAriaLabel = 'Close';

  /**
   * Additional CSS class names for the close button.
   * @type {string}
   * @default ''
   */
  export let closeClassName = '';

  /**
   * The color theme for the alert.
   * @type {string}
   * @default 'success'
   */
  export let color = 'success';

  /**
   * Flag to indicate if the alert is dismissible.
   * @type {boolean}
   * @default false
   */
  export let dismissible = false;

  /**
   * Flag to enable fade transition.
   * @type {boolean}
   * @default true
   */
  export let fade = true;

  /**
   * Heading text for the alert.
   * @type {string}
   * @default ''
   */
  export let heading = '';

  /**
   * Controls the visibility of the alert.
   * @type {boolean}
   * @default true
   */
  export let isOpen = true;

  /**
   * Function to toggle the visibility of the alert.
   * @type {Function | undefined}
   * @default undefined
   */
  export let toggle = undefined;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | undefined}
   * @default undefined
   */
  export let theme = undefined;

  /**
   * Transition configuration.
   * @type {object}
   */
  export let transition = { duration: fade ? 400 : 0 };

  $: showClose = dismissible || toggle;
  $: handleToggle = toggle || (() => (isOpen = false));
  $: classes = classnames(className, 'alert', `alert-${color}`, {
    'alert-dismissible': showClose
  });
  $: closeClassNames = classnames('btn-close', closeClassName);
</script>

{#if isOpen}
  <div {...$$restProps} data-bs-theme={theme} transition:fadeTransition={transition} class={classes} role="alert">
    {#if heading || $$slots.heading}
      <h4 class="alert-heading">
        {heading}<slot name="heading" />
      </h4>
    {/if}
    {#if showClose}
      <button type="button" class={closeClassNames} aria-label={closeAriaLabel} on:click={handleToggle} />
    {/if}
    {#if content}
      {content}
    {:else}
      <slot />
    {/if}
  </div>
{/if}
