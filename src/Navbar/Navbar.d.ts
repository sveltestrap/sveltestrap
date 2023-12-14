declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';
  import { BackgroundColor } from '../shared';

  export interface NavbarProps extends HTMLAttributes<HTMLElement> {
    color?: BackgroundColor;
    container?: boolean | 'fluid'; // TODO also sm-xxl?
    dark?: boolean;
    expand?: boolean | string;
    fixed?: string;
    light?: boolean;
    sticky?: string;
  }

  export interface NavbarEvents {}

  export interface NavbarSlots {
    default: {};
  }

  export default class Navbar extends SvelteComponent<NavbarProps, NavbarEvents, NavbarSlots> {}
}
