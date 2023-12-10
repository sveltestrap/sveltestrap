declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { ContainerType } from '../shared';

  type Placement = 'start' | 'end' | 'top' | 'bottom';

  export interface OffcanvasProps extends svelteHTML.HTMLAttributes<HTMLElementTagNameMap['div']> {
    class?: string;
    backdrop?: boolean;
    body?: boolean;
    container?: ContainerType;
    fade?: boolean;
    header?: string;
    isOpen: boolean;
    keyboard: boolean;
    placement?: Placement;
    scroll?: boolean;
    style?: string;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
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
    header: {}
  }

  export default class Offcanvas extends SvelteComponent<OffcanvasProps, OffcanvasEvents, OffcanvasSlots> {}
}
