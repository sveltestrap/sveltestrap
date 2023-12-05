import { SvelteComponent } from 'svelte';

export interface CardSubtitleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['h6']> {}

export default class CardSubtitle extends SvelteComponent<
  CardSubtitleProps,
  {},
  { default: {} }
> {}
