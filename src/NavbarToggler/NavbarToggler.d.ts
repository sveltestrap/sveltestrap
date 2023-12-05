import { SvelteComponent } from 'svelte';
import { ButtonProps } from '../Button';

export interface NavbarTogglerProps extends ButtonProps {}

export default class NavbarToggler extends SvelteComponent<
  NavbarTogglerProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
