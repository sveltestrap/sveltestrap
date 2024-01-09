<script>
  import { getContext } from 'svelte';
  import { classnames } from '../utils';

  /**
   * Additional CSS class name for the component
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * Alternative text for the image
   * @type {string | undefined}
   * @default undefined
   */
  export let alt = undefined;

  /**
   * Determines if the image should apply the figure class
   * @type {boolean}
   */
  export let figure = getContext('figure');

  /**
   * Fluid image indicator flag
   * @type {boolean}
   * @default false
   */
  export let fluid = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   * @default null
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
