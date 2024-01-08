<script>
  import { classnames } from '../utils';

  /**
   * Indicates if the bar should have animation.
   * @type {boolean}
   */
  export let animated = false;

  /**
   * Indicates whether to show a bar.
   * @type {boolean}
   */
  export let bar = false;

  /**
   * The class name for the bar.
   * @type {string}
   */
  export let barClassName = '';

  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * The color of the bar.
   * @type {string}
   */
  export let color = '';

  /**
   * The maximum value of the bar.
   * @type {number}
   */
  export let max = 100;

  /**
   * Indicates if it's a multi-bar.
   * @type {boolean}
   */
  export let multi = false;

  /**
   * Indicates if the bar should be striped.
   * @type {boolean}
   */
  export let striped = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * The current value of the bar.
   * @type {number}
   */
  export let value = 0;

  $: classes = classnames(className, 'progress');

  $: progressBarClasses = classnames(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `text-bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  );

  $: percent = (parseInt(value, 10) / parseInt(max, 10)) * 100;
</script>

{#if bar}
  {#if multi}
    <slot />
  {:else}
    <div
      {...$$restProps}
      class={progressBarClasses}
      style="width: {percent}%"
      data-bs-theme={theme}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      <slot />
    </div>
  {/if}
{:else}
  <div {...$$restProps} data-bs-theme={theme} class={classes}>
    {#if multi}
      <slot />
    {:else}
      <div
        class={progressBarClasses}
        style="width: {percent}%"
        data-bs-theme={theme}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      >
        <slot />
      </div>
    {/if}
  </div>
{/if}
