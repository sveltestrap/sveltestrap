<script>
  import { useColorMode } from './theme';
  export let theme = 'dark';
  export let ref = null;
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
