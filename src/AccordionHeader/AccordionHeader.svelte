<script>
  import { classnames } from '../utils';

  // Additional CSS class names to use
  let className = '';

  /**
   * Additional CSS class names to use
   * @type {string}
   */
  export { className as class };

  $: classes = classnames(className, 'accordion-button');
</script>

<h2 class="accordion-header" {...$$restProps}>
  <button type="button" class={classes} on:click>
    <slot />
  </button>
</h2>
