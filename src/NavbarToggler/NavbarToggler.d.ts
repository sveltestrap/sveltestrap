import { SvelteComponent } from 'svelte';
import { ButtonProps } from '../Button';

export interface NavbarTogglerProps extends ButtonProps {
  active?: boolean;
  disabled?: boolean;
}

export interface NavbarTogglerEvents {
  click: WindowEventMap['click'];
}

export interface NavbarTogglerSlots {
  default: {};
}

export default class NavbarToggler extends SvelteComponent<
  NavbarTogglerProps,
  NavbarTogglerEvents,
  NavbarTogglerSlots
> {}
