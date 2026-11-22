<script>
  import { getContext, onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { NavItem } from '../NavItem';
  import { NavLink } from '../NavLink';
  import { classnames, textProp } from '../utils';

  let className = '';
  export { className as class };
  export let active = false;
  export let disabled = false;
  export let tab = undefined;
  $: tabText = textProp(tab);
  export let tabId = undefined;

  const tabs = getContext('tabs');
  const { activeTabId, setActiveTab } = getContext('tabContent');

  onMount(() => {
    if (active) setActiveTab(tabId);
  });

  // Follow later changes to `active`. Only the change itself is acted on, so
  // a pane whose `active` stays true does not take the selection back when
  // another tab is clicked.
  let wasActive = active;
  function syncActive(isActive) {
    if (isActive === wasActive) return;
    wasActive = isActive;
    if (isActive && get(activeTabId) !== tabId) setActiveTab(tabId);
  }
  $: syncActive(active);

  let tabOpen = active;
  $: if ($activeTabId !== undefined) tabOpen = $activeTabId === tabId;
  $: classes = classnames('tab-pane', className, {
    active: tabOpen,
    show: tabOpen
  });
</script>

{#if tabs}
  <NavItem>
    <NavLink active={tabOpen} {disabled} on:click={() => setActiveTab(tabId)}>
      {#if tabText}{tabText}{/if}
      <slot name="tab" />
    </NavLink>
  </NavItem>
{:else}
  <div {...$$restProps} class={classes}>
    <slot />
  </div>
{/if}
