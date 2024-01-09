import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Direction } from '../shared';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
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

export interface DropdownEvents {}

export interface DropdownSlots {
  default: {};
}

export default class Dropdown extends SvelteComponent<DropdownProps, DropdownEvents, DropdownSlots> {}
