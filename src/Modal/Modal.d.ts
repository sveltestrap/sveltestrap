import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import type { FadeProps } from '../Fade';
import type { Breakpoints, ContainerType } from '../shared';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  autoFocus?: boolean;
  backdrop?: boolean | 'static';
  body?: boolean;
  centered?: boolean;
  container?: ContainerType;
  contentClassName?: string;
  fade?: boolean;
  fullscreen?: boolean | Breakpoints;
  header?: string;
  isOpen?: boolean;
  keyboard?: boolean;
  labelledBy?: string;
  modalClassName?: string;
  modalStyle?: string;
  returnFocusAfterClose?: boolean;
  scrollable?: boolean;
  size?: string;
  theme?: string;
  toggle?: () => void;
  unmountOnClose?: boolean;
  wrapClassName?: string;
  zIndex?: number | string;
}

export interface ModalEvents {
  open: CustomEvent<void>;
  opening: CustomEvent<void>;
  closing: CustomEvent<void>;
  close: CustomEvent<void>;
}

export interface ModalSlots {
  default: {};
  external: {};
}

export default class Modal extends SvelteComponent<ModalProps, ModalEvents, ModalSlots> {}
