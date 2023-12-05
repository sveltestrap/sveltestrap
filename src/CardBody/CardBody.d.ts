import { SvelteComponent } from 'svelte';

export interface CardBodyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class CardBody extends SvelteComponent<
  CardBodyProps,
  {},
  { default: {} }
> {}
