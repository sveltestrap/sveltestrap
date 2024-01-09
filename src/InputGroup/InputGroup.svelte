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
   * Size of the component.
   * @type {string}
   * @default ''
   */
  export let size = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  $: classes = classnames(className, 'input-group', size ? `input-group-${size}` : null);
</script>

<div {...$$restProps} class={classes} data-bs-theme={theme}>
  <slot />
</div>
