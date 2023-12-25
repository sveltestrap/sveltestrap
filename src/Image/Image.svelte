<script>
  import { getContext } from 'svelte';
  import { classnames } from '../utils';

  // Additional CSS class name for the component
  let className = '';
  /**
   * Additional CSS class name for the component
   * @type {string}
   */
  export { className as class };

  /**
   * Alternative text for the image
   * @type {string}
   */
  export let alt = undefined;

  /**
   * Contextual information related to the figure component
   * @type {HTMLElement}
   */
  export let figure = getContext('figure');

  /**
   * Fluid image indicator flag
   * @type {boolean}
   */
  export let fluid = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * Thumbnail image indicator flag
   * @type {boolean}
   */
  export let thumbnail = false;

  $: classes = classnames(className, {
    'figure-img': figure,
    'img-fluid': fluid,
    'img-thumbnail': thumbnail
  });
</script>

<img {alt} {...$$restProps} data-bs-theme={theme} class={classes} />
