<script>
  import { useColorMode } from './helpers.js';

  export let theme = 'dark';

  let ref = null;

  $: ref && useColorMode(ref, theme);
</script>

<span bind:this={ref}>
  <slot />
</span>

<style>
  span {
    display: contents;
  }
</style>
