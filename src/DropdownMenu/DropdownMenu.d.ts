import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface DropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
  end?: boolean;
  right?: boolean;
}

export interface DropdownMenuEvents {}

export interface DropdownMenuSlots {
  default: {};
}

export default class DropdownMenu extends SvelteComponent<DropdownMenuProps, DropdownMenuEvents, DropdownMenuSlots> {}
