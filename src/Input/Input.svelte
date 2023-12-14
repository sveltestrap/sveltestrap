<script>
  import { FormCheck } from '../FormCheck';
  import { FormFeedback } from '../FormFeedback';

  import { classnames } from '../utils';

  // Additional CSS class name for the component
  let className = '';
  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  export { className as class };

  /**
   * Bootstrap size of the Input.
   * @type {string}
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
   * @type {string}
   * @default undefined
   */
  export let color = undefined;

  /**
   * Indicates whether the Input is disabled.
   * @type {boolean}
   * @default undefined
   */
  export let disabled = undefined;

  /**
   * Feedback message for the Input.
   * @type {string|Array}
   * @default undefined
   */
  export let feedback = undefined;

  /**
   * Array of files for file input.
   * @type {Array}
   * @default undefined
   */
  export let files = undefined;

  /**
   * Group identifier for the Input.
   * @type {string|undefined}
   * @default undefined
   */
  export let group = undefined;

  /**
   * Inner content for the Input.
   * @type {string|undefined}
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
   * @type {string|undefined}
   * @default undefined
   */
  export let label = undefined;

  /**
   * Indicates whether the Input allows multiple selections.
   * @type {boolean|undefined}
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
   * @type {boolean|undefined}
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
   * @type {string|undefined}
   * @default undefined
   */
  export let size = undefined;

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
   * @type {string}
   * @default ''
   */
  export let value = '';

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
      [`form-control-${bsSize}`]: bsSize && !isBtn,
      [`btn-${bsSize}`]: bsSize && isBtn
    });
  }

  const handleInput = (event) => {
    value = event.target.value;
  };
</script>

{#if tag === 'input'}
  {#if type === 'text'}
    <input
      {...$$restProps}
      class={classes}
      type="text"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'password'}
    <input
      {...$$restProps}
      class={classes}
      type="password"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'color'}
    <input
      {...$$restProps}
      class={classes}
      type="color"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'email'}
    <input
      {...$$restProps}
      class={classes}
      type="email"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
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
      class={classes}
      type="file"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:files
      bind:value
      bind:this={inner}
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
      class={className}
      size={bsSize}
      {type}
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:checked
      bind:inner
      bind:group
      bind:value
      {disabled}
      {invalid}
      {label}
      {name}
      {placeholder}
      {reverse}
      {readonly}
      {valid}
    />
  {:else if type === 'url'}
    <input
      {...$$restProps}
      class={classes}
      type="url"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'number'}
    <input
      {...$$restProps}
      class={classes}
      type="number"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {readonly}
      {name}
      {disabled}
      {placeholder}
    />
  {:else if type === 'date'}
    <input
      {...$$restProps}
      class={classes}
      type="date"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'time'}
    <input
      {...$$restProps}
      class={classes}
      type="time"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'datetime'}
    <input
      {...$$restProps}
      type="datetime"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {readonly}
      class={classes}
      {name}
      {disabled}
      {placeholder}
    />
  {:else if type === 'datetime-local'}
    <input
      {...$$restProps}
      class={classes}
      type="datetime-local"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'month'}
    <input
      {...$$restProps}
      class={classes}
      type="month"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else if type === 'color'}
    <input
      {...$$restProps}
      type="color"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {readonly}
      class={classes}
      {name}
      {disabled}
      {placeholder}
    />
  {:else if type === 'range'}
    <input
      {...$$restProps}
      type="range"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {readonly}
      class={classes}
      {name}
      {disabled}
      {placeholder}
    />
  {:else if type === 'search'}
    <input
      {...$$restProps}
      class={classes}
      type="search"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'tel'}
    <input
      {...$$restProps}
      class={classes}
      type="tel"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
      {size}
    />
  {:else if type === 'week'}
    <input
      {...$$restProps}
      class={classes}
      type="week"
      on:blur
      on:change
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      bind:value
      bind:this={inner}
      {disabled}
      {name}
      {placeholder}
      {readonly}
    />
  {:else}
    <input
      {...$$restProps}
      {type}
      on:blur
      on:change={handleInput}
      on:focus
      on:input={handleInput}
      on:keydown
      on:keypress
      on:keyup
      {readonly}
      class={classes}
      {name}
      {disabled}
      {placeholder}
      {value}
    />
  {/if}
{:else if tag === 'textarea'}
  <textarea
    {...$$restProps}
    class={classes}
    on:blur
    on:change
    on:focus
    on:input
    on:keydown
    on:keypress
    on:keyup
    bind:value
    bind:this={inner}
    {disabled}
    {name}
    {placeholder}
    {readonly}
  />
{:else if tag === 'select' && !multiple}
  <select
    {...$$restProps}
    class={classes}
    on:blur
    on:change
    on:focus
    on:input
    bind:value
    bind:this={inner}
    {name}
    {disabled}
    {readonly}
  >
    <slot />
  </select>

  <!-- {:else if tag === 'select' && multiple}
  <select
    {...$$restProps}
    multiple
    class={classes}
    on:blur
    on:focus
    on:change
    on:input
    bind:value
    bind:this={inner}
    {name}
    {disabled}>
    <slot />
  </select> -->
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
