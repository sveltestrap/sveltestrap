<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the nav link.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Indicates whether the nav link is disabled.
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Indicates whether the nav link is active.
   * @type {boolean}
   */
  export let active = false;

  /**
   * The URL to link to when the nav link is clicked.
   * @type {string}
   */
  export let href = '#';

  $: classes = classnames(className, 'nav-link', {
    disabled,
    active
  });

  function handleClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    if (href === '#') {
      e.preventDefault();
    }
  }
</script>

<a {...$$restProps} {href} on:click on:click={handleClick} class={classes}>
  <slot />
</a>
