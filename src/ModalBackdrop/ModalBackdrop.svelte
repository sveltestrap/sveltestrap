<script>
  import { onMount } from 'svelte';
  import { classnames } from '../utils';
  import { backdropIn, backdropOut } from '../transitions.js';

  let className = '';

  export { className as class };
  export let isOpen = false;
  export let fade = true;

  let loaded = false;

  onMount(() => {
    loaded = true;
  });

  $: classes = classnames(className, 'modal-backdrop');
</script>

{#if isOpen && loaded}
  <div role="presentation" {...$$restProps} class={classes} class:fade in:backdropIn out:backdropOut on:click />
{/if}
