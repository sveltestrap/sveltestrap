<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class name for the component
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Name of the icon to display.
   * @type {string}
   * @default ''
   */
  export let name = '';

  $: classes = classnames(className, `bi-${name}`);
</script>

<i {...$$restProps} class={classes} />
