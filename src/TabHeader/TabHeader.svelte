<script>
  import { setContext } from 'svelte';
  import { Nav } from '../Nav';

  setContext('tabs', true);
</script>

<Nav {...$$restProps}>
  <slot />
</Nav>
