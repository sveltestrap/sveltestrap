<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the navbar.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * The URL to link to when the navbar brand is clicked.
   * @type {string}
   */
  export let href = '/';

  $: classes = classnames(className, 'navbar-brand');
</script>

<a {...$$restProps} class={classes} {href} on:click>
  <slot />
</a>
