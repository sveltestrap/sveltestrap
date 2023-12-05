import { SvelteComponent } from 'svelte';

export interface InputGroupTextProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['span']> {}

export default class InputGroupText extends SvelteComponent<
  InputGroupTextProps,
  {},
  { default: {} }
> {}
