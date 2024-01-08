import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';
import { Border, Color, Shadow } from '../shared';

export interface BadgeProps extends HTMLAnchorAttributes {
  ariaLabel?: string;
  border?: boolean | Border;
  color?: string | Color;
  href?: string;
  indicator?: boolean;
  pill?: boolean;
  placement?: string;
  positioned?: boolean;
  shadow?: boolean | Shadow;
  theme?: string;
}

export interface BadgeEvents {}

export interface BadgeSlots {
  default: {};
}

export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {}
