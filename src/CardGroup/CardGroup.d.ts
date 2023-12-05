import { SvelteComponent } from 'svelte';

export interface CardGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class CardGroup extends SvelteComponent<
  CardGroupProps,
  {},
  { default: {} }
> {}
