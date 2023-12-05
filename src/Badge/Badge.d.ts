import { Color } from '../shared';
import { SvelteComponent } from 'svelte';

export interface BadgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']> {
  color?: Color;
  href?: string;
  pill?: boolean;
}

export default class Badge extends SvelteComponent<
  BadgeProps,
  {},
  { default: {} }
> {}
