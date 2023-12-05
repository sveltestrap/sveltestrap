import { SvelteComponent } from 'svelte';

export interface CardDeckProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class CardDeck extends SvelteComponent<
  CardDeckProps,
  {},
  { default: {} }
> {}
