declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLDivElement } from 'svelte/elements';
  import { Direction } from '../shared';

  export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    autoClose?: boolean | string;
    direction?: Direction;
    dropup?: boolean;
    group?: boolean;
    inNavbar?: boolean;
    isOpen?: boolean;
    nav?: boolean;
    setActiveFromChild?: boolean;
    size?: string;
    theme?: string;
    toggle?: () => void;
  }

  export interface DropdownItemEvents {}

  export interface DropdownItemSlots {
    default: {};
  }

  export default class DropdownItem extends SvelteComponent<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {}
}
