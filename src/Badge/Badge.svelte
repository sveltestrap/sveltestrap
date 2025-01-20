<script>
  import { classnames } from '../utils';

  /**
   * Text to be read by screen readers.
   * @type {string}
   * @default ''
   */
  export let ariaLabel = '';

  /**
   * Determines if the badge should have a border
   * @type {boolean | string}
   * @default false
   */
  export let border = false;

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The content to be displayed within the badge.
   * @type {string}
   * @default ''
   */
  export let content = '';

  /**
   * The color theme for the badge.
   * @type {string}
   * @default 'secondary'
   */
  export let color = 'secondary';

  /**
   * The href attribute for the badge, which turns it into a link if provided.
   * @type {string}
   * @default ''
   */
  export let href = '';

  /**
   * Create a circular indicator for absolute positioned badge.
   * @type {boolean}
   * @default false
   */
  export let indicator = false;

  /**
   * Flag to indicate if the badge should have a pill shape.
   * @type {boolean}
   * @default false
   */
  export let pill = false;

  /**
   * Flag to indicate if the badge should be absolutely positioned.
   * @type {boolean}
   * @default false
   */
  export let positioned = false;

  /**
   * Classes determining where the badge should be absolutely positioned.
   * @type {string}
   * @default 'top-0 start-100'
   */
  export let placement = 'top-0 start-100';

  /**
   * Determines if the badge should have a shadow
   * @type {boolean | string}
   * @default false
   */
  export let shadow = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | undefined}
   * @default undefined
   */
  export let theme = undefined;

  $: classes = classnames(
    'badge',
    `text-bg-${color}`,
    pill ? 'rounded-pill' : false,
    positioned ? 'position-absolute translate-middle' : false,
    positioned ? placement : false,
    indicator ? 'p-2' : false,
    border ? (typeof border === 'string' ? border : 'border') : false,
    shadow ? (typeof shadow === 'string' ? shadow : 'shadow') : false,
    className
  );
</script>

{#if href}
  <a {...$$restProps} {href} class={classes} data-bs-theme={theme}>
    {#if content}
      {content}
    {:else}
      <slot />
    {/if}
    {#if positioned || indicator}
      <span class="visually-hidden">{ariaLabel}</span>
    {/if}
  </a>
{:else}
  <span {...$$restProps} class={classes} data-bs-theme={theme}>
    {#if content}
      {content}
    {:else}
      <slot />
    {/if}
    {#if positioned || indicator}
      <span class="visually-hidden">{ariaLabel}</span>
    {/if}
  </span>
{/if}
