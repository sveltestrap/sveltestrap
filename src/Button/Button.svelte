<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Indicates if the component is active.
   * @type {boolean}
   * @default false
   */
  export let active = false;

  /**
   * Indicates if the component should be displayed as a block.
   * @type {boolean}
   * @default false
   */
  export let block = false;

  /**
   * Children elements to be rendered inside the component.
   * @type {string}
   * @default ''
   */
  export let content = '';

  /**
   * Indicates if the button is a close button.
   * @type {boolean}
   * @default false
   */
  export let close = false;

  /**
   * Color theme for the button.
   * @type {string}
   * @default 'secondary'
   */
  export let color = 'secondary';

  /**
   * Indicates if the component is disabled.
   * @type {boolean}
   * @default false
   */
  export let disabled = false;

  /**
   * The URL to link to when the button is clicked.
   * If set, will render an anchhor element instead of a button.
   * @type {string}
   * @default ''
   */
  export let href = '';

  /**
   * Reference to the inner element of the component.
   * @type {HTMLElement}
   * @default undefined
   */
  export let inner = undefined;

  /**
   * Indicates if the component should have an outline.
   * @type {boolean}
   * @default false
   */
  export let outline = false;

  /**
   * Size of the Button.
   * @type {string}
   * @default ''
   */
  export let size = '';

  /**
   * Value attribute for the button element.
   * @type {string}
   * @default ''
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
    on:focus
    on:blur
    {href}
    aria-label={ariaLabel || defaultAriaLabel}
  >
    {#if content}
      {content}
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
    on:focus
    on:blur
    {value}
    aria-label={ariaLabel || defaultAriaLabel}
  >
    <slot>
      {#if content}
        {content}
      {:else}
        <slot />
      {/if}
    </slot>
  </button>
{/if}
