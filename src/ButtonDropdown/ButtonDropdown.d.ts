import { SvelteComponent } from 'svelte';
import { DropdownProps } from '../Dropdown';

export interface ButtonDropdownProps extends Omit<DropdownProps, 'group'> {}

export interface ButtonDropdownEvents {
  click: WindowEventMap['click'];
}

export interface ButtonDropdownSlots {
  default: {};
}

export default class ButtonDropdown extends SvelteComponent<
  ButtonDropdownProps,
  ButtonDropdownEvents,
  ButtonDropdownSlots
> {}
