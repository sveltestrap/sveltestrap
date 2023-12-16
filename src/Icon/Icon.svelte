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
   * Name of the icon to display.
   * @type {string}
   */
  export let name = '';

  $: classes = classnames(className, `bi-${name}`);
</script>

<i {...$$restProps} class={classes} />
