<script>
  import { getContext, setContext, onDestroy } from 'svelte';
  import { createPopperActions } from '../popper';
  import { classnames } from '../utils';

  import { createContext } from './DropdownContext';

  const noop = () => undefined;

  let context = createContext();
  setContext('dropdownContext', context);
  const navbarContext = getContext('navbar');

  // Additional CSS class names to add to the container.
  let className = '';

  /**
   * Exports a prop `class` which can be used to apply custom CSS classes.
   * @type {string}
   */
  export { className as class };

  /**
   * A boolean indicating whether the Dropdown is active (open).
   * @type {boolean}
   */
  export let active = false;

  /**
   * A boolean indicating whether the Dropdown should automatically close when an item is selected.
   * @type {boolean}
   */
  export let autoClose = true;

  /**
   * The direction in which the Dropdown menu should expand ('down', 'up', 'left', 'right').
   * @type {string}
   */
  export let direction = 'down';

  /**
   * A boolean indicating whether the Dropdown should expand upwards.
   * @type {boolean}
   */
  export let dropup = false;

  /**
   * A boolean indicating whether the Dropdown is part of a group.
   * @type {boolean}
   */
  export let group = false;

  /**
   * A boolean indicating whether the Dropdown is inside a Navbar.
   * @type {boolean}
   */
  export let inNavbar = navbarContext ? navbarContext.inNavbar : false;

  /**
   * A boolean indicating whether the Dropdown is currently open.
   * @type {boolean}
   */
  export let isOpen = false;

  /**
   * A boolean indicating whether the Dropdown is used in a navigation bar.
   * @type {boolean}
   */
  export let nav = false;

  /**
   * A boolean indicating whether the Dropdown should set its active state based on a child item's selection.
   * @type {boolean}
   */
  export let setActiveFromChild = false;

  /**
   * The size variant for the Dropdown.
   * @type {string}
   */
  export let size = '';

  /**
   * The theme name override to apply to this component instance.
   * @type {string | null}
   */
  export let theme = null;

  /**
   * A function that can be used to toggle the state of the Dropdown.
   * @type {Function | undefined}
   */
  export let toggle = undefined;

  const [popperRef, popperContent] = createPopperActions();

  const validDirections = ['up', 'down', 'left', 'right', 'start', 'end'];

  if (validDirections.indexOf(direction) === -1) {
    throw new Error(
      `Invalid direction sent: '${direction}' is not one of 'up', 'down', 'left', 'right', 'start', 'end'`
    );
  }

  let component;
  let dropdownDirection;

  $: subItemIsActive = !!(
    setActiveFromChild &&
    component &&
    typeof component.querySelector === 'function' &&
    component.querySelector('.active')
  );

  $: {
    if (direction === 'left') dropdownDirection = 'start';
    else if (direction === 'right') dropdownDirection = 'end';
    else dropdownDirection = direction;
  }

  $: classes = classnames(
    className,
    direction !== 'down' && `drop${dropdownDirection}`,
    nav && active ? 'active' : false,
    setActiveFromChild && subItemIsActive ? 'active' : false,
    {
      'btn-group': group,
      [`btn-group-${size}`]: !!size,
      dropdown: !group,
      show: isOpen,
      'nav-item': nav
    }
  );

  $: {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        ['click', 'touchstart', 'keyup'].forEach((event) =>
          document.addEventListener(event, handleDocumentClick, true)
        );
      } else {
        ['click', 'touchstart', 'keyup'].forEach((event) =>
          document.removeEventListener(event, handleDocumentClick, true)
        );
      }
    }
  }

  $: {
    context.update(() => {
      return {
        toggle: handleToggle,
        isOpen,
        autoClose,
        direction: direction === 'down' && dropup ? 'up' : direction,
        inNavbar: nav || inNavbar,
        popperRef: nav ? noop : popperRef,
        popperContent: nav ? noop : popperContent
      };
    });
  }

  $: handleToggle = toggle || (() => (isOpen = !isOpen));

  function handleDocumentClick(e) {
    if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== 9))) return;

    if (component.contains(e.target) && component !== e.target && (e.type !== 'keyup' || e.which === 9)) {
      return;
    }

    if (autoClose === true || autoClose === 'outside') {
      handleToggle(e);
    }
  }

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      ['click', 'touchstart', 'keyup'].forEach((event) =>
        document.removeEventListener(event, handleDocumentClick, true)
      );
    }
  });
</script>

{#if nav}
  <li {...$$restProps} class={classes} data-bs-theme={theme} bind:this={component}>
    <slot />
  </li>
{:else}
  <div {...$$restProps} class={classes} data-bs-theme={theme} bind:this={component}>
    <slot />
  </div>
{/if}
