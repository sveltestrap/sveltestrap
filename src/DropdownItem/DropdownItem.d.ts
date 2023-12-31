import { SvelteComponent } from 'svelte';
import { HTMLLiAttributes } from 'svelte/elements';

export interface DropdownItemProps extends HTMLLiAttributes {
  active?: boolean;
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  href?: string;
  toggle?: boolean;
}

export interface DropdownItemEvents {
  click: WindowEventMap['click'];
}

export interface DropdownItemSlots {
  default: {};
}

export default class DropdownItem extends SvelteComponent<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {}
