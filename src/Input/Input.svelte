<script>
  import { FormCheck } from '../FormCheck';
  import { FormFeedback } from '../FormFeedback';
  import { classnames } from '../utils';

  /**
   * Additional CSS classes for the input.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Bootstrap size to apply to the input.
   * @type {string | undefined}
   * @default undefined
   */
  export let bsSize = undefined;

  /**
   * Indicates whether the input should be checked
   * Used with type "checkbox", "radio", and "switch".
   * @type {boolean}
   * @default false
   */
  export let checked = false;

  /**
   * Color selection of the input
   * Used with type "color"
   * @type {string | undefined}
   * @default undefined
   */
  export let color = undefined;

  /**
   * Determines whether the input is disabled.
   * @type {boolean | undefined}
   * @default undefined
   */
  export let disabled = undefined;

  /**
   * Feedback message for the Input.
   * @type {string | Array}
   * @default undefined
   */
  export let feedback = undefined;

  /**
   * Array of files for file names for input.
   * Used with type "file"
   * @type {Array | undefined}
   * @default undefined
   */
  export let files = undefined;

  /**
   * Group identifier for the Input.
   * Used with type "checkbox", "radio", and "switch".
   * @type {string | undefined}
   * @default undefined
   */
  export let group = undefined;

  /**
   * Inner content for the Input.
   * @type {string | undefined}
   * @default undefined
   */
  export let inner = undefined;

  /**
   * Indicates whether the input is invalid.
   * @type {boolean}
   * @default false
   */
  export let invalid = false;

  /**
   * Label for the input.
   * Used with type "checkbox", "radio", "switch".
   * @type {string | undefined}
   * @default undefined
   */
  export let label = undefined;

  /**
   * Maximum value for the Input.
   * Used with type "date", "datetime", "datetime-local", "month", "number", "time", "range", and "week"
   * @type {string | number | undefined}
   * @default undefined
   */
  export let max = undefined;

  /**
   * Minimum value for the Input.
   * Used with type "date", "datetime", "datetime-local", "month", "number", "time", "range", and "week"
   * @type {string | number | undefined}
   * @default undefined
   */
  export let min = undefined;

  /**
   * Indicates whether the Input allows multiple selections.
   * Used with type "email" and "file".
   * @type {boolean | undefined}
   * @default undefined
   */
  export let multiple = undefined;

  /**
   * Name attribute for the Input.
   * @type {string}
   * @default ''
   */
  export let name = '';

  /**
   * Placeholder text for the input.
   * @type {string}
   * @default ''
   */
  export let placeholder = '';

  /**
   * Indicates whether the input should be rendered in plaintext mode.
   * @type {boolean}
   * @default false
   */
  export let plaintext = false;

  /**
   * Indicates whether the input is read-only.
   * @type {boolean | undefined}
   * @default undefined
   */
  export let readonly = undefined;

  /**
   * Indicates whether the input is reversed.
   * @type {boolean}
   * @default false
   */
  export let reverse = false;

  /**
   * Determines the size of the input.
   * @type {string | undefined}
   * @default undefined
   */
  export let size = undefined;

  /**
   * Theme name override to apply to the input.
   * @type {string | undefined}
   */
  export let theme = undefined;

  /**
   * Determines the type of input.
   * @type {string}
   * @default 'text'
   */
  export let type = 'text';

  /**
   * Indicates whether the input is valid.
   * @type {boolean}
   * @default false
   */
  export let valid = false;

  /**
   * Value of the input.
   * @type {string | undefined}
   * @default undefined
   */
  export let value = undefined;

  let classes;
  let tag;

  $: {
    const isNotaNumber = new RegExp('\\D', 'g');

    let isBtn = false;
    let formControlClass = 'form-control';
    tag = 'input';

    switch (type) {
      case 'color':
        formControlClass = `form-control form-control-color`;
        break;
      case 'range':
        formControlClass = 'form-range';
        break;
      case 'select':
        formControlClass = `form-select`;
        tag = 'select';
        break;
      case 'textarea':
        tag = 'textarea';
        break;
      case 'button':
      case 'reset':
      case 'submit':
        formControlClass = `btn btn-${color || 'secondary'}`;
        isBtn = true;
        break;
      case 'hidden':
      case 'image':
        formControlClass = undefined;
        break;
      default:
        formControlClass = 'form-control';
        tag = 'input';
    }

    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      tag = 'input';
    }

    if (size && isNotaNumber.test(size)) {
      console.warn('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = size;
      size = undefined;
    }

    classes = classnames(className, formControlClass, {
      'is-invalid': invalid,
      'is-valid': valid,
      [`form-control-${bsSize}`]: bsSize && !isBtn && tag !== 'select',
      [`form-select-${bsSize}`]: bsSize && tag === 'select',
      [`btn-${bsSize}`]: bsSize && isBtn
    });
  }
</script>

{#if tag === 'input'}
  {#if type === 'text' || type === 'password' || type === 'search' || type === 'tel' || type === 'url'}
    <input
      {...$$restProps}
      {...{ type }}
      data-bs-theme={theme}
      class={classes}
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'color'}
    <input
      {...$$restProps}
      data-bs-theme={theme}
      class={classes}
      type="color"
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'email'}
    <input
      {...$$restProps}
      data-bs-theme={theme}
      class={classes}
      type="email"
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {multiple}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'file'}
    <input
      {...$$restProps}
      data-bs-theme={theme}
      class={classes}
      type="file"
      bind:files
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {invalid}
      {multiple}
      {name}
      {placeholder}
      {readonly}
      {valid}
    />
  {:else if type === 'checkbox' || type === 'radio' || type === 'switch'}
    <FormCheck
      {...$$restProps}
      data-bs-theme={theme}
      class={className}
      size={bsSize}
      {type}
      bind:checked
      bind:inner
      bind:group
      bind:value
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {invalid}
      {label}
      {name}
      {placeholder}
      {reverse}
      {readonly}
      {valid}
    />
  {:else if type === 'number'}
    <input
      {...$$restProps}
      type="number"
      data-bs-theme={theme}
      class={classes}
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {max}
      {min}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'range'}
    <input
      {...$$restProps}
      type="range"
      data-bs-theme={theme}
      class={classes}
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {max}
      {min}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'date' || type === 'datetime' || type === 'datetime-local' || type === 'month' || type === 'time' || type === 'week'}
    <input
      {...$$restProps}
      {...{ type }}
      data-bs-theme={theme}
      class={classes}
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {disabled}
      {max}
      {min}
      {name}
      {placeholder}
      {readonly}
    />
  {:else}
    <input
      {...$$restProps}
      data-bs-theme={theme}
      class={classes}
      {...{ type }}
      bind:this={inner}
      bind:value
      on:blur
      on:change
      on:click
      on:dblclick
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mousedown
      on:mouseup
      {name}
      {disabled}
      {placeholder}
      {readonly}
    />
  {/if}
{:else if tag === 'textarea'}
  <textarea
    {...$$restProps}
    data-bs-theme={theme}
    class={classes}
    bind:value
    bind:this={inner}
    on:blur
    on:change
    on:click
    on:dblclick
    on:focus
    on:input
    on:keydown
    on:keypress
    on:keyup
    on:mousedown
    on:mouseup
    {disabled}
    {name}
    {placeholder}
    {readonly}
  />
{:else if tag === 'select' && !multiple}
  <select
    {...$$restProps}
    data-bs-theme={theme}
    class={classes}
    bind:value
    bind:this={inner}
    on:blur
    on:click
    on:change
    on:focus
    on:input
    {name}
    {disabled}
    {readonly}
  >
    <slot />
  </select>
{/if}

{#if feedback}
  {#if Array.isArray(feedback)}
    {#each feedback as msg}
      <FormFeedback {valid}>{msg}</FormFeedback>
    {/each}
  {:else}
    <FormFeedback {valid}>{feedback}</FormFeedback>
  {/if}
{/if}
