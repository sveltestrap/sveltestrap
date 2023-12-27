import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ToastBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface ToastBodyEvents {}

export interface ToastBodySlots {
  default: {};
}

export default class ToastBody extends SvelteComponent<ToastBodyProps, ToastBodyEvents, ToastBodySlots> {}
