import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalHeaderEvents {}

export interface ModalHeaderSlots {
  default: {};
}

export default class ModalHeader extends SvelteComponent<ModalHeaderProps, ModalHeaderEvents, ModalHeaderSlots> {}
