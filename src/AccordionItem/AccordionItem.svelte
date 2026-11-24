<script>
  import { createEventDispatcher, getContext, onMount } from 'svelte';

  import { AccordionHeader } from '../AccordionHeader/index.js';
  import { Collapse } from '../Collapse/index.js';

  import { classnames, textProp } from '../utils.js';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The header text or content for the accordion item.
   * @type {string}
   * @default ''
   */
  export let header = '';
  $: headerText = textProp(header);

  /**
   * Indicates whether the accordion item is initially active (open).
   * @type {boolean}
   * @default false
   */
  export let active = false;

  const dispatch = createEventDispatcher();

  const { stayOpen, toggle, open } = getContext('accordion');

  /**
   * The Accordion DOM element.
   * @type {HTMLDivElement}
   */
  let accordionRef;

  onMount(() => {
    if (active) {
      toggle(accordionRef);
    }
  });

  const onToggle = () => {
    if (stayOpen) {
      active = !active;
    }

    toggle(accordionRef);

    dispatch('toggle', !isOpen);
  };

  $: classes = classnames(className, 'accordion-item');
  $: isOpen = stayOpen ? active : $open === accordionRef;
</script>

<div class={classes} bind:this={accordionRef}>
  <AccordionHeader on:click={onToggle} class={!isOpen && 'collapsed'}>
    <slot name="header" />
    {headerText}
  </AccordionHeader>
  <Collapse {isOpen} class="accordion-collapse" on:introstart on:introend on:outrostart on:outroend>
    <div class="accordion-body">
      <slot />
    </div>
  </Collapse>
</div>
