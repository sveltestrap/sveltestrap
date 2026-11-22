<script>
  import { getContext, onDestroy } from 'svelte';
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
  const table = getContext('table');

  // The column rendered in the table header tells the table whether it has
  // footer content, which decides if the table renders a <tfoot> at all.
  let countedFooter = false;
  function countFooter(hasFooter) {
    if (!table || !head || hasFooter === countedFooter) return;
    countedFooter = hasFooter;
    table.footerCount.update((count) => count + (hasFooter ? 1 : -1));
  }

  $: hasFooter = !!(footerText || $$slots.footer);
  $: countFooter(hasFooter);
  onDestroy(() => countFooter(false));
</script>

{#if colgroup}
  <col style="width: {width};" />
{:else if foot}
  {#if hasFooter}
    <th {...$$restProps}>
      {#if footerText}{footerText}{/if}
      <slot name="footer" />
    </th>
  {:else}
    <td {...$$restProps}></td>
  {/if}
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
