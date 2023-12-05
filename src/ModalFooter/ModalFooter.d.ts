import { SvelteComponent } from 'svelte';

export interface ModalFooterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class ModalFooter extends SvelteComponent<
  ModalFooterProps,
  {},
  { default: {} }
> {}
