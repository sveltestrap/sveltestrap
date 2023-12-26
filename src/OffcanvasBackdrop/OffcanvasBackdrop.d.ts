import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface OffcanvasBackdropProps extends HTMLAttributes<HTMLDivElement> {
  fade?: boolean;
  isOpen?: boolean;
}

export interface OffcanvasBackdropEvents {
  click: WindowEventMap['click'];
}

export interface OffcanvasBackdropSlots {}

export default class OffcanvasBackdrop extends SvelteComponent<
  OffcanvasBackdropProps,
  OffcanvasBackdropEvents,
  OffcanvasBackdropSlots
> {}
