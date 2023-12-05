import { SvelteComponent } from 'svelte';

export interface ButtonGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  size?: string;
  vertical?: boolean;
}

export default class ButtonGroup extends SvelteComponent<
  ButtonGroupProps,
  {},
  { default: {} }
> {}
