<script>
  import { FormCheck } from '../FormCheck';
  import { FormFeedback } from '../FormFeedback';
  import { classnames } from '../utils';

  /**
   * Additional CSS class name for the component
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Bootstrap size of the Input.
   * @type {string | undefined}
   * @default undefined
   */
  export let bsSize = undefined;

  /**
   * Indicates whether the Input is checked.
   * @type {boolean}
   * @default false
   */
  export let checked = false;

  /**
   * Color variant for the Input.
   * @type {string | undefined}
   * @default undefined
   */
  export let color = undefined;

  /**
   * Indicates whether the Input is disabled.
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
   * Array of files for file input.
   * @type {Array | undefined}
   * @default undefined
   */
  export let files = undefined;

  /**
   * Group identifier for the Input.
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
   * Indicates whether the Input is invalid.
   * @type {boolean}
   * @default false
   */
  export let invalid = false;

  /**
   * Label for the Input.
   * @type {string | undefined}
   * @default undefined
   */
  export let label = undefined;

  /**
   * Maximum value for the Input.
   * @type {string | number | undefined}
   * @default undefined
   */
  export let max = undefined;

  /**
   * Minimum value for the Input.
   * @type {string | number | undefined}
   * @default undefined
   */
  export let min = undefined;

  /**
   * Indicates whether the Input allows multiple selections.
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
   * Placeholder text for the Input.
   * @type {string}
   * @default ''
   */
  export let placeholder = '';

  /**
   * Indicates whether the Input is in plaintext mode.
   * @type {boolean}
   * @default false
   */
  export let plaintext = false;

  /**
   * Indicates whether the Input is read-only.
   * @type {boolean | undefined}
   * @default undefined
   */
  export let readonly = undefined;

  /**
   * Indicates whether the Input is reversed.
   * @type {boolean}
   * @default false
   */
  export let reverse = false;

  /**
   * Size of the Input.
   * @type {string | undefined}
   * @default undefined
   */
  export let size = undefined;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | undefined}
   */
  export let theme = undefined;

  /**
   * Type of the Input.
   * @type {string}
   * @default 'text'
   */
  export let type = 'text';

  /**
   * Indicates whether the Input is valid.
   * @type {boolean}
   * @default false
   */
  export let valid = false;

  /**
   * Value of the Input.
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

  const handleInput = (event) => {
    value = event.target.value;
  };
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
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
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
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
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
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
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
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
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
      {disabled}
      {invalid}
      {label}
      {name}
      {placeholder}
      {reverse}
      {readonly}
      {valid}
    />
  {:else if type === 'date' || type === 'datetime' || type === 'datetime-local' || type === 'month' || type === 'number' || type === 'time' || type === 'range' || type === 'week'}
    <input
      {...$$restProps}
      {...{ type }}
      data-bs-theme={theme}
      class={classes}
      bind:value
      bind:this={inner}
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
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
      {type}
      on:blur
      on:change={handleInput}
      on:focus
      on:input={handleInput}
      on:keydown
      on:keypress
      on:keyup
      {name}
      {disabled}
      {placeholder}
      {readonly}
      {value}
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
    on:focus
    on:input
    on:keydown
    on:keypress
    on:keyup
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
