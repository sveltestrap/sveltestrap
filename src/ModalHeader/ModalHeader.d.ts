import { SvelteComponent } from 'svelte';

export interface ModalHeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  ariaToggle?: string;
  toggle?: () => void;
}

export default class ModalHeader extends SvelteComponent<
  ModalHeaderProps,
  {},
  { default: {}; close: {} }
> {}
