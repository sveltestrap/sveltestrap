import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';

export interface NavLinkProps extends HTMLAnchorAttributes {
  active?: boolean;
  disabled?: boolean;
}

export interface NavLinkEvents {
  click: WindowEventMap['click'];
}

export interface NavLinkSlots {
  default: {};
}

export default class NavLink extends SvelteComponent<NavLinkProps, NavLinkEvents, NavLinkSlots> {}
