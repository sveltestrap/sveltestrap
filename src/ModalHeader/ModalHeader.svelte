<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names to apply
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Determines whether the modal header includes a close button.
   * @type {boolean | undefined}
   */
  export let toggle = undefined;

  /**
   * The aria-label for the close button.
   * @type {string}
   */

  export let closeAriaLabel = 'Close';
  /**
   * The unique id of the modal header.
   * @type {string}
   */
  export let id = undefined;

  export let content = undefined;

  $: classes = classnames(className, 'modal-header');
</script>

<div {...$$restProps} class={classes}>
  <h5 class="modal-title" {id}>
    {#if content}
      {content}
    {:else}
      <slot />
    {/if}
  </h5>
  <slot name="close">
    {#if typeof toggle === 'function'}
      <button type="button" on:click={toggle} class="btn-close" aria-label={closeAriaLabel} />
    {/if}
  </slot>
</div>
