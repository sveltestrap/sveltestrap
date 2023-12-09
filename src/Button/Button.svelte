<script>
  import { classnames } from '../utils';

  // Additional CSS class name for the component
  let className = '';
  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  export { className as class };

  /**
   * Indicates if the component is active.
   * @type {boolean}
   */
  export let active = false;

  /**
   * Indicates if the component should be displayed as a block.
   * @type {boolean}
   */
  export let block = false;

  /**
   * Children elements to be rendered inside the component.
   * @type {any}
   */
  export let children = undefined;

  /**
   * Indicates if the component is a close button.
   * @type {boolean}
   */
  export let close = false;

  /**
   * Color theme for the component.
   * @type {'primary'|'secondary'|string}
   */
  export let color = 'secondary';

  /**
   * Indicates if the component is disabled.
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Hyperlink reference for the component.
   * @type {string}
   */
  export let href = '';

  /**
   * Reference to the inner element of the component.
   * @type {any}
   */
  export let inner = undefined;

  /**
   * Indicates if the component should have an outline.
   * @type {boolean}
   */
  export let outline = false;

  /**
   * Size of the component.
   * @type {string}
   */
  export let size = '';

  /**
   * Value attribute for the button element.
   * @type {string}
   */
  export let value = '';

  $: ariaLabel = $$props['aria-label'];

  $: classes = classnames(
    className,
    close ? 'btn-close' : 'btn',
    close || `btn${outline ? '-outline' : ''}-${color}`,
    size ? `btn-${size}` : false,
    block ? 'd-block w-100' : false,
    {
      active
    }
  );

  $: defaultAriaLabel = close ? 'Close' : null;
</script>

{#if href}
  <a
    {...$$restProps}
    class={classes}
    class:disabled
    bind:this={inner}
    on:click
    {href}
    aria-label={ariaLabel || defaultAriaLabel}
  >
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <button
    {...$$restProps}
    class={classes}
    {disabled}
    bind:this={inner}
    on:click
    {value}
    aria-label={ariaLabel || defaultAriaLabel}
  >
    <slot>
      {#if children}
        {children}
      {:else}
        <slot />
      {/if}
    </slot>
  </button>
{/if}
