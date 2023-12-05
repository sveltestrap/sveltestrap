import { SvelteComponent } from 'svelte';

export interface CardColumnsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class CardColumns extends SvelteComponent<
  CardColumnsProps,
  {},
  { default: {} }
> {}
