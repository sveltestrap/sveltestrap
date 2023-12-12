declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';
  import { Color } from '../shared';

  export interface BadgeProps extends HTMLAttributes<HTMLAnchorElement> {
    color?: Color;
    href?: string;
    pill?: boolean;
  }

  export interface BadgeEvents {}

  export interface BadgeSlots {
    default: {};
  }

  export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {}
}
