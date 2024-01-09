import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  autohide?: boolean;
  body?: boolean;
  delay?: number;
  duration?: number;
  fade?: boolean;
  header?: string;
  isOpen?: boolean;
  theme?: string;
  toggle?: () => void;
}

export interface ToastEvents {
  open: CustomEvent<void>;
  opening: CustomEvent<void>;
  closing: CustomEvent<void>;
  close: CustomEvent<void>;
}

export interface ToastSlots {
  default: {};
}

export default class Toast extends SvelteComponent<ToastProps, ToastEvents, ToastSlots> {}
