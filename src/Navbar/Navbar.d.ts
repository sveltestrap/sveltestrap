import { SvelteComponent } from 'svelte';
import { BackgroundColor } from '../shared';

export interface NavbarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['nav']> {
  color?: BackgroundColor;
  container?: boolean | 'fluid'; // TODO also sm-xxl?
  dark?: boolean;
  expand?: boolean | string;
  fixed?: string;
  light?: boolean;
  sticky?: string;
}

export default class Navbar extends SvelteComponent<
  NavbarProps,
  {},
  { default: {} }
> {}
