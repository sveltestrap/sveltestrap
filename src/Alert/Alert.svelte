<script>
  import { fade as fadeTransition } from 'svelte/transition';
  import { classnames } from '../utils';

  /**
   * Additional CSS class names.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * The content to be displayed in the alert.
   * @type {any}
   */
  export let children = undefined;

  /**
   * The color theme for the alert.
   * @type {string}
   */
  export let color = 'success';

  /**
   * Additional CSS class names for the close button.
   * @type {string}
   */
  export let closeClassName = '';

  /**
   * ARIA label for the close button.
   * @type {string}
   */
  export let closeAriaLabel = 'Close';

  /**
   * Flag to indicate if the alert is dismissible.
   * @type {boolean}
   */
  export let dismissible = false;

  /**
   * Heading text for the alert.
   * @type {string}
   */
  export let heading = '';

  /**
   * Controls the visibility of the alert.
   * @type {boolean}
   */
  export let isOpen = true;

  /**
   * Function to toggle the visibility of the alert.
   * @type {Function | undefined}
   */
  export let toggle = undefined;

  /**
   * Flag to enable fade transition.
   * @type {boolean}
   */
  export let fade = true;

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
  <div {...$$restProps} transition:fadeTransition={transition} class={classes} role="alert">
    {#if heading || $$slots.heading}
      <h4 class="alert-heading">
        {heading}<slot name="heading" />
      </h4>
    {/if}
    {#if showClose}
      <button type="button" class={closeClassNames} aria-label={closeAriaLabel} on:click={handleToggle} />
    {/if}
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </div>
{/if}
