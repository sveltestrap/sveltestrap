import { SvelteComponent } from 'svelte';
import { Color } from '../shared';

export interface ListGroupItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']> {
  action?: boolean;
  active?: boolean;
  color?: Color;
  disabled?: boolean;
  href?: string;
  tag?: 'a' | 'button' | 'li';
}

export default class ListGroupItem extends SvelteComponent<
  ListGroupItemProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
