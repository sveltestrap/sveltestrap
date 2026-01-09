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

  $: classes = classnames(className, 'modal-backdrop', {
    fade,
    show: !fade
  });
</script>

{#if isOpen && loaded}
  {#if fade}
    <div role="presentation" {...$$restProps} class={classes} in:backdropIn out:backdropOut on:click />
  {:else}
    <div role="presentation" {...$$restProps} class={classes} style="display: block;" on:click />
  {/if}
{/if}
