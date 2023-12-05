import { DropdownProps } from '../Dropdown';
import { SvelteComponent } from 'svelte';

export interface ButtonDropdownProps extends Omit<DropdownProps, 'group'> {}

export default class ButtonDropdown extends SvelteComponent<
  ButtonDropdownProps,
  {},
  {
    default: {};
  }
> {}
