declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';

  export interface ModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
    fade?: boolean;
    isOpen?: boolean;
  }

  export interface ModalBackdropEvents {}

  export interface ModalBackdropSlots {
    default: {};
  }

  export default class ModalBackdrop extends SvelteComponent<ModalBackdropProps, ModalBackdropEvents, ModalBackdropSlots> {}
}
