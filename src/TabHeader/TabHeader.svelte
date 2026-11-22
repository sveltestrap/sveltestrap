<script>
  import { setContext } from 'svelte';
  import { Nav } from '../Nav/index.js';

  setContext('tabs', true);
</script>

<Nav {...$$restProps}>
  <slot />
</Nav>
