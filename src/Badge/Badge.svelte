<script>
  import { classnames } from '../utils';

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
   * Flag to indicate if the badge should have a pill shape.
   * @type {boolean}
   */
  export let pill = false;

  $: classes = classnames(className, 'badge', `text-bg-${color}`, pill ? 'rounded-pill' : false);
</script>

{#if href}
  <a {...$$restProps} {href} class={classes}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <span {...$$restProps} class={classes}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </span>
{/if}
