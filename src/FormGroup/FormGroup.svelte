<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  export let className = '';
  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  export { className as class };
  /**
   * Indicates whether the FormGroup is checked.
   * @type {boolean}
   */
  export let check = false;

  /**
   * Indicates whether the FormGroup is disabled.
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Indicates whether the FormGroup is rendered in a floating style.
   * @type {boolean}
   */
  export let floating = false;

  /**
   * Indicates whether the FormGroup is rendered inline.
   * @type {boolean}
   */
  export let inline = false;

  /**
   * The label associated with the FormGroup.
   * @type {string}
   */
  export let label = '';

  /**
   * Indicates whether the FormGroup is part of a row layout.
   * @type {boolean}
   */
  export let row = false;

  /**
   * A custom tag for the FormGroup
   * @type {string}
   */
  export let tag = null;

  $: classes = classnames(className, 'mb-3', {
    row,
    'form-check': check,
    'form-check-inline': check && inline,
    'form-floating': floating,
    disabled: check && disabled
  });
</script>

{#if tag === 'fieldset'}
  <fieldset {...$$restProps} class={classes}>
    <slot />
    {#if label || $$slots.label}
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>
        {label}
        <slot name="label" />
      </label>
    {/if}
  </fieldset>
{:else}
  <div {...$$restProps} class={classes}>
    <slot />
    {#if label || $$slots.label}
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>
        {label}
        <slot name="label" />
      </label>
    {/if}
  </div>
{/if}
