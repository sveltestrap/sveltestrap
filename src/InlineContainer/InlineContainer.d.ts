import { SvelteComponent } from 'svelte';

export interface InlineContainerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class InlineContainer extends SvelteComponent<
  InlineContainerProps,
  {},
  { default: {} }
> {}
