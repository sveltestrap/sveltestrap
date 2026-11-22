<script>
  import { getContext } from 'svelte';
  import { textProp } from '../utils';

  let className = '';
  export { className as class };
  export let footer = undefined;
  $: footerText = textProp(footer);
  export let header = undefined;
  $: headerText = textProp(header);
  export let width = undefined;

  const colgroup = getContext('colgroup');
  const head = getContext('header');
  const foot = getContext('footer');
</script>

{#if colgroup}
  <col style="width: {width};" />
{:else if foot}
  <th {...$$restProps}>
    {#if footerText}{footerText}{/if}
    <slot name="footer" />
  </th>
{:else if head}
  <th {...$$restProps}>
    {#if headerText}{headerText}{/if}
    <slot name="header" />
  </th>
{:else}
  <td class={className} {...$$restProps}>
    <slot />
  </td>
{/if}
