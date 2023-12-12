<script>
  import { classnames } from '../utils';

  // Additional CSS class name for the component
  let className = '';

  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  export { className as class };

  /**
   * Small size setting for the component.
   * @type {boolean}
   */
  export let sm = undefined;

  /**
   * Medium size setting for the component.
   * @type {boolean}
   */
  export let md = undefined;

  /**
   * Large size setting for the component.
   * @type {boolean}
   */
  export let lg = undefined;

  /**
   * Extra-large size setting for the component.
   * @type {boolean}
   */
  export let xl = undefined;

  /**
   * Double-extra-large size setting for the component.
   * @type {boolean}
   */
  export let xxl = undefined;

  /**
   * Flag indicating if the component should have a fluid width.
   * @type {boolean}
   */
  export let fluid = false;

  $: classes = classnames(className, {
    'container-sm': sm,
    'container-md': md,
    'container-lg': lg,
    'container-xl': xl,
    'container-xxl': xxl,
    'container-fluid': fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
