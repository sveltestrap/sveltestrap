<script>
  import { createEventDispatcher, getContext, onMount } from 'svelte';

  import { AccordionHeader } from '../AccordionHeader';
  import { Collapse } from '../Collapse';

  import { classnames } from '../utils';

  // Additional CSS class names to use
  let className = '';

  /**
   * Additional CSS class names to use
   * @type {string}
   */
  export { className as class };

  /**
   * The header text or content for the accordion item.
   * @type {string}
   */
  export let header = '';

  /**
   * Indicates whether the accordion item is initially active (open).
   * @type {boolean}
   */
  export let active = false;

  const dispatch = createEventDispatcher();

  const { stayOpen, toggle, open } = getContext('accordion');

  /**
   * @type {HTMLDivElement}
   */
  let accordionId;

  onMount(() => {
    if (active) {
      toggle(accordionId);
    }
  });

  const onToggle = () => {
    if (stayOpen) {
      active = !active;
    }

    toggle(accordionId);

    dispatch('toggle', !accordionOpen);
  };

  $: classes = classnames(className, 'accordion-item');
  $: accordionOpen = stayOpen ? active : $open === accordionId;
</script>

<div class={classes} bind:this={accordionId}>
  <AccordionHeader on:click={() => onToggle()} class={!accordionOpen && 'collapsed'}>
    <slot name="header" />
    {header}
  </AccordionHeader>
  <Collapse isOpen={accordionOpen} class="accordion-collapse" on:introstart on:introend on:outrostart on:outroend>
    <div class="accordion-body">
      <slot />
    </div>
  </Collapse>
</div>
