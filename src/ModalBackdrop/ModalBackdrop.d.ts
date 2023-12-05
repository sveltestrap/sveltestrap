import { SvelteComponent } from 'svelte';

export interface ModalBackdropProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  fade?: boolean;
  isOpen?: boolean;
}

export default class ModalBackdrop extends SvelteComponent<
  ModalBackdropProps,
  { click: WindowEventMap['click'] },
  {}
> {}
