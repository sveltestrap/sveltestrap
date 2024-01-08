<script>
  import { setContext } from 'svelte';
  import { classnames } from '../utils';
  import { Container } from '../Container';

  setContext('navbar', {
    inNavbar: true
  });

  /**
   * Additional CSS class names for the navbar.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Determines the container type within the navbar.
   * @type {'fluid' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  export let container = 'fluid';

  /**
   * The color theme for the navbar.
   * @type {string}
   */
  export let color = '';

  /**
   * Flag to indicate if dark theme should be applied.
   * @type {boolean}
   */
  export let dark = false;

  /**
   * Determines when the navbar should expand.
   * @type {boolean | string}
   */
  export let expand = false || '';

  /**
   * Fixes the navbar at the top or bottom of the viewport.
   * @type {string}
   */
  export let fixed = '';

  /**
   * Flag to indicate if light theme should be applied.
   * @type {boolean}
   */
  export let light = false;

  /**
   * Makes the navbar stick to the top of the viewport.
   * @type {string}
   */
  export let sticky = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  let containerProps = {
    sm: container === 'sm',
    md: container === 'md',
    lg: container === 'lg',
    xl: container === 'xl',
    xxl: container === 'xxl',
    fluid: container === 'fluid'
  };

  /**
   * Returns the class for the current expanded state
   * @param {boolean | string} expand - The expand prop value.
   * @returns {string | false} The class name or false if not applicable.
   */
  function getExpandClass(expand) {
    if (expand === false) {
      return false;
    }

    if (expand === true || expand === 'xs') {
      return 'navbar-expand';
    }

    return `navbar-expand-${expand}`;
  }

  $: theme = dark ? 'dark' : light ? 'light' : theme;

  $: classes = classnames(className, 'navbar', getExpandClass(expand), {
    [`bg-${color}`]: color,
    [`fixed-${fixed}`]: fixed,
    [`sticky-${sticky}`]: sticky
  });
</script>

<nav {...$$restProps} class={classes} data-bs-theme={theme}>
  {#if container}
    <Container {...containerProps}>
      <slot />
    </Container>
  {:else}
    <slot />
  {/if}
</nav>
