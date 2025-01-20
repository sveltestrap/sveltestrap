<script>
  import { classnames } from '../utils';

  let className = '';
  export { className as class };
  export let content = undefined;
  export let closeAriaLabel = 'Close';
  export let toggle = undefined;

  $: classes = classnames(className, 'offcanvas-header');
</script>

<div {...$$restProps} class={classes}>
  <h5 class="offcanvas-title">
    {#if content}
      {content}
    {:else}
      <slot />
    {/if}
  </h5>
  <slot name="close">
    {#if typeof toggle === 'function'}
      <button aria-label={closeAriaLabel} class="btn-close" on:click={toggle} type="button" />
    {/if}
  </slot>
</div>
