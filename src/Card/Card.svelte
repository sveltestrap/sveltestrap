<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Determines whether to include a card body.
   * @type {boolean}
   * @default false
   */
  export let body = false;

  /**
   * Specifies the color theme of the card.
   * @type {string}
   * @default ''
   */
  export let color = '';

  /**
   * Inverts the text color of the card.
   * @type {boolean}
   * @default false
   */
  export let inverse = false;

  /**
   * Render the card with an outline style.
   * @type {boolean}
   * @default false
   */
  export let outline = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | undefined}
   */
  export let theme = undefined;

  $: classes = classnames(
    className,
    'card',
    inverse ? 'text-white' : false,
    body ? 'card-body' : false,
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  );
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div {...$$restProps} data-bs-theme={theme} class={classes} on:click>
  <slot />
</div>
