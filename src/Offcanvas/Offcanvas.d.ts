import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { ContainerType, Placement } from '../shared';

export interface OffcanvasProps extends HTMLAttributes<HTMLDivElement> {
  backdrop?: boolean;
  body?: boolean;
  container?: ContainerType;
  fade?: boolean;
  header?: string;
  isOpen: boolean;
  keyboard?: boolean;
  placement?: Placement;
  scroll?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  theme?: string;
  toggle?: () => void;
}

export interface OffcanvasEvents {
  open: CustomEvent<void>;
  opening: CustomEvent<void>;
  closing: CustomEvent<void>;
  close: CustomEvent<void>;
}

export interface OffcanvasSlots {
  default: {};
  header: {};
}

export default class Offcanvas extends SvelteComponent<OffcanvasProps, OffcanvasEvents, OffcanvasSlots> {}
