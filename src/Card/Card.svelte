<script>
  import { classnames } from '../utils';

  // Additional CSS class names to add to the container.
  let className = '';

  /**
   * Exports a prop `class` which can be used to apply custom CSS classes.
   * @type {string}
   */
  export { className as class };
  /**
   * Determines whether to include a card body.
   * @type {boolean}
   */
  export let body = false;

  /**
   * Specifies the color theme of the card.
   * @type {string}
   */
  export let color = '';

  /**
   * Inverts the text color of the card.
   * @type {boolean}
   */
  export let inverse = false;

  /**
   * Render the card with an outline style.
   * @type {boolean}
   */
  export let outline = false;

  $: classes = classnames(
    className,
    'card',
    inverse ? 'text-white' : false,
    body ? 'card-body' : false,
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  );
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div {...$$restProps} class={classes} on:click>
  <slot />
</div>
