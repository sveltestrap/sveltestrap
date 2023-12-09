declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';

  export interface AccordionItemProps extends svelteHTML.HTMLAttributes<HTMLElementTagNameMap['div']> {
    active?: boolean;
    class?: string;
    header?: string;
  }

  export interface AccordionItemEvents {
    toggle: CustomEvent<boolean>;
  }

  export interface AccordionItemSlots {
    default: {};
    header: {};
  }

  export default class AccordionItem extends SvelteComponent<
    AccordionItemProps,
    AccordionItemEvents,
    AccordionItemSlots
  > {}
}
