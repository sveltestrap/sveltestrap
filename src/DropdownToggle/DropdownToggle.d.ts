import { SvelteComponent } from 'svelte';
import { ButtonProps } from '../Button';

export interface DropdownToggleProps extends ButtonProps {
  caret?: boolean;
  split?: boolean;
  tag?: 'a' | 'div' | 'span';
  nav?: boolean;
}

export interface DropdownToggleEvents {}

export interface DropdownToggleSlots {
  default?: {};
}

export default class DropdownToggle extends SvelteComponent<
  DropdownToggleProps,
  DropdownToggleEvents,
  DropdownToggleSlots
> {}
