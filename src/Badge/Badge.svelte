<script>
  import { classnames } from '../utils';

  /**
   * Text to be read by screen readers.
   * @type {string}
   */
  export let ariaLabel = '';

  /**
   * Determines if the badge should have a border
   * @type {boolean}
   */
  export let border = false;

  /**
   * Additional CSS class names.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * The content to be displayed within the badge.
   * @type {string}
   */
  export let children = '';

  /**
   * The color theme for the badge.
   * @type {string}
   */
  export let color = 'secondary';

  /**
   * The href attribute for the badge, which turns it into a link if provided.
   * @type {string}
   */
  export let href = '';

  /**
   * Create a circular indicator for absolute positioned badge.
   * @type {boolean}
   */
  export let indicator = false;

  /**
   * Flag to indicate if the badge should have a pill shape.
   * @type {boolean}
   */
  export let pill = false;

  /**
   * Flag to indicate if the badge should be absolutely positioned.
   * @type {boolean}
   */
  export let positioned = false;

  /**
   * Classes determining where the badge should be absolutely positioned.
   * @type {string}
   */
  export let placement = 'top-0 start-100';
 
  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  $: classes = classnames(
    'badge',
    `text-bg-${color}`,
    pill ? 'rounded-pill' : false,
    positioned ? 'position-absolute translate-middle' : false,
    positioned ? placement : false,
    indicator ? 'p-2 border' : false,
    border ? 'border' : false,
    className
  );
</script>

{#if href}
  <a {...$$restProps} {href} class={classes} data-bs-theme={theme}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
    {#if positioned || indicator}
      <span class="visually-hidden">{ariaLabel}</span>
    {/if}
  </a>
{:else}
  <span {...$$restProps} class={classes} data-bs-theme={theme}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
    {#if positioned || indicator}
      <span class="visually-hidden">{ariaLabel}</span>
    {/if}
  </span>
{/if}
