<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class name for the component
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'p-5 mb-4 bg-light rounded-3');
</script>

<div class={classes}>
  <slot />
</div>
