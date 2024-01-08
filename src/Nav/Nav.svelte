<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the <ul> element.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Indicates whether the nav should be styled as tabs.
   * @type {boolean}
   */
  export let tabs = false;

  /**
   * Indicates whether the nav should be styled as pills.
   * @type {boolean}
   */
  export let pills = false;

  /**
   * Controls vertical orientation of the nav.
   * @type {string}
   */
  export let vertical = '';

  /**
   * Controls horizontal alignment of the nav items.
   * @type {string}
   */
  export let horizontal = '';

  /**
   * Indicates whether the nav should be justified.
   * @type {boolean}
   */
  export let justified = false;

  /**
   * Indicates whether the nav should fill the available space.
   * @type {boolean}
   */
  export let fill = false;

  /**
   * Indicates whether the nav is part of a navbar.
   * @type {boolean}
   */
  export let navbar = false;

  /**
   * Indicates whether the nav is part of a card header.
   * @type {boolean}
   */
  export let card = false;

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * Indicates whether the nav should have an underline style.
   * @type {boolean}
   */
  export let underline = false;

  /**
   * Computes the class for vertical orientation based on the provided value.
   * @param {boolean | 'xs' | 'sm' | 'md' | 'lg' | 'xl'} vertical - The vertical prop value.
   * @returns {string | false} The class name or false if not applicable.
   */
  function getVerticalClass(vertical) {
    if (!vertical) {
      return false;
    }

    if (vertical === true || vertical === 'xs') {
      return 'flex-column';
    }

    return `flex-${vertical}-column`;
  }

  /**
   * Computed class names for the <ul> element based on the component's props.
   * @type {string}
   */
  $: classes = classnames(
    className,
    navbar ? 'navbar-nav' : 'nav',
    horizontal ? `justify-content-${horizontal}` : false,
    getVerticalClass(vertical),
    {
      'nav-tabs': tabs,
      'card-header-tabs': card && tabs,
      'nav-pills': pills,
      'card-header-pills': card && pills,
      'nav-justified': justified,
      'nav-fill': fill,
      'nav-underline': underline
    }
  );
</script>

<ul {...$$restProps} class={classes} data-bs-theme={theme}>
  <slot />
</ul>
