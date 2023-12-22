<script>
  import { classnames } from '../utils';
  import { Container } from '../Container';
  import { setContext } from 'svelte';

  setContext('navbar', {
    inNavbar: true
  });

  let className = '';
  export { className as class };
  export let container = 'fluid';
  export let color = '';
  export let dark = false;
  export let expand = false || '';
  export let fixed = '';
  export let light = false;
  export let sticky = '';

  let containerProps = {
    sm: container === 'sm',
    md: container === 'md',
    lg: container === 'lg',
    xl: container === 'xl',
    xxl: container === 'xxl',
    fluid: container === 'fluid'
  };

  function getExpandClass(expand) {
    if (expand === false) {
      return false;
    }

    if (expand === true || expand === 'xs') {
      return 'navbar-expand';
    }

    return `navbar-expand-${expand}`;
  }

  $: theme = dark ? 'dark' : light ? 'light' : undefined;

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