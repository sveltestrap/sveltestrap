import { SvelteComponent } from 'svelte';
import { HTMLButtonAttributes, HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

interface MixedElementProps extends Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'target'> {}

export interface DropdownItemProps extends MixedElementProps {
  active?: boolean;
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  href?: string;
  toggle?: boolean;
  target?: string | null;
}

export interface DropdownItemEvents {
  click: WindowEventMap['click'];
}

export interface DropdownItemSlots {
  default: {};
}

export default class DropdownItem extends SvelteComponent<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {}
