import { SvelteComponent } from 'svelte';

export interface OffcanvasBackdropProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  fade?: boolean;
  isOpen?: boolean;
}

export default class OffcanvasBackdrop extends SvelteComponent<
  OffcanvasBackdropProps,
  { click: WindowEventMap['click'] },
  {}
> {}
