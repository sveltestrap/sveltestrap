import { SvelteComponent } from 'svelte';

export interface AccordionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  flush?: boolean;
  stayOpen?: boolean;
}

export default class Accordion extends SvelteComponent<
  AccordionProps,
  {
    toggle: CustomEvent<any>;
  },
  { default: {} }
> {}
