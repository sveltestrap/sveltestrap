<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the <li> element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Indicates whether the breadcrumb item is active (i.e., the current page).
   * @type {boolean}
   * @default false
   */
  export let active = false;

  /**
   * The content to be displayed within the breadcrumb item.
   * @type {string}
   * @default ''
   */
  export let content = '';

  $: classes = classnames(className, active ? 'active' : false, 'breadcrumb-item');
</script>

<li {...$$restProps} class={classes} aria-current={active ? 'page' : undefined}>
  {#if content}
    {content}
  {:else}
    <slot />
  {/if}
</li>
