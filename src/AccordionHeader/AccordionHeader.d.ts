import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface AccordionHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface AccordionHeaderEvents {}

export interface AccordionHeaderSlots {
  default: {};
}

export default class AccordionHeader extends SvelteComponent<
  AccordionHeaderProps,
  AccordionHeaderEvents,
  AccordionHeaderSlots
> {}
