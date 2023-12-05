import { SvelteComponent } from 'svelte';

export interface CardTextProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['p']> {}

export default class CardText extends SvelteComponent<
  CardTextProps,
  {},
  { default: {} }
> {}
