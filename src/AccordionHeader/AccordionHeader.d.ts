declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';

  export interface AccordionHeaderProps extends svelteHTML.HTMLAttributes<HTMLElementTagNameMap['h2']> {}

  export interface AccordionHeaderEvents {}

  export interface AccordionHeaderSlots {
    default: {};
  }

  export default class AccordionHeader extends SvelteComponent<
    AccordionHeaderProps,
    AccordionHeaderEvents,
    AccordionHeaderSlots
  > {}
}
