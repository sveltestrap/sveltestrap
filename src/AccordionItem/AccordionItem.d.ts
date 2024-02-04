import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  class?: string;
  header?: string;
}

export interface AccordionItemEvents {
  introstart: CustomEvent<void>;
  introend: CustomEvent<void>;
  outrostart: CustomEvent<void>;
  outroend: CustomEvent<void>;
  toggle: CustomEvent<boolean>;
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
