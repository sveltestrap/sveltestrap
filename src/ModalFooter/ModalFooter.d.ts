import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalFooterEvents {}

export interface ModalFooterSlots {
  default: {};
}

export default class ModalFooter extends SvelteComponent<ModalFooterProps, ModalFooterEvents, ModalFooterSlots> {}
