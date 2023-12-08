declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';

  export interface ModalBackdropProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    class?: string;
    fade?: boolean;
    isOpen?: boolean;
  }

  export class ModalBackdrop extends SvelteComponent<ModalBackdropProps, { click: WindowEventMap['click'] }, {}> {}
}
