import { SvelteComponent } from 'svelte';

export interface CardFooterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class CardFooter extends SvelteComponent<
  CardFooterProps,
  {},
  { default: {} }
> {}
