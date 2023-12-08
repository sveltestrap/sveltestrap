<script>
  import { createEventDispatcher, getContext, onMount } from 'svelte';
  import { Collapse } from '../Collapse';
  import { AccordionHeader } from '../AccordionHeader';
  import { classnames } from '../utils';

  let className = '';
  export { className as class };
  export let header = '';
  export let active = false;
  let accordionId;

  const dispatch = createEventDispatcher();

  const { stayOpen, toggle, open } = getContext('accordion');
  $: classes = classnames(className, 'accordion-item');
  $: accordionOpen = stayOpen ? active : $open === accordionId;

  onMount(() => {
    if (active) toggle(accordionId);
  });

  const onToggle = () => {
    if (stayOpen) active = !active;
    toggle(accordionId);
    dispatch('toggle', !accordionOpen);
  };
</script>

<div class={classes} bind:this={accordionId}>
  <AccordionHeader
    on:click={() => onToggle()}
    class={!accordionOpen && 'collapsed'}
  >
    <slot name="header" />
    {header}
  </AccordionHeader>
  <Collapse
    isOpen={accordionOpen}
    class="accordion-collapse"
    on:introstart
    on:introend
    on:outrostart
    on:outroend
  >
    <div class="accordion-body">
      <slot />
    </div>
  </Collapse>
</div>
