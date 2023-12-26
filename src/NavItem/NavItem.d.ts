import { SvelteComponent } from 'svelte';
import { HTMLLiAttributes } from 'svelte/elements';

export interface NavItemProps extends HTMLLiAttributes {
  active?: boolean;
}

export interface NavItemEvents {}

export interface NavItemSlots {
  default: {};
}

export default class NavItem extends SvelteComponent<NavItemProps, NavItemEvents, NavItemSlots> {}
