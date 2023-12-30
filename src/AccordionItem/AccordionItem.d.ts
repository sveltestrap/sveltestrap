import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  class?: string;
  header?: string;
}

export interface AccordionItemEvents {
  toggle: CustomEvent<void>;
}

export interface AccordionItemSlots {
  default: {};
  header?: {};
}

export default class AccordionItem extends SvelteComponent<
  AccordionItemProps,
  AccordionItemEvents,
  AccordionItemSlots
> {}
