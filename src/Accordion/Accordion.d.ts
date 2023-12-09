declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';

  export interface AccordionProps extends svelteHTML.HTMLAttributes<HTMLElementTagNameMap['div']> {
    class?: string;
    flush?: boolean;
    stayOpen?: boolean;
  }

  export interface AccordionEvents {
    toggle: CustomEvent<{ [id: string]: boolean }>;
  }

  export interface AccordionSlots {
    default: {};
  }

  export default class Accordion extends SvelteComponent<AccordionProps, AccordionEvents, AccordionSlots> {}
}
