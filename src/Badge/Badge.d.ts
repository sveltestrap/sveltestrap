import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';
import { Color } from '../shared';

export interface BadgeProps extends HTMLAnchorAttributes {
  ariaLabel?: string;
  border?: boolean;
  color?: Color;
  href?: string;
  indicator?: boolean;
  pill?: boolean;
  placement?: string;
  positioned?: boolean;
}

export interface BadgeEvents {}

export interface BadgeSlots {
  default: {};
}

export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {}
