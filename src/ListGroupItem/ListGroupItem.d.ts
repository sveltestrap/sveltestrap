import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';
import { Color } from '../shared';

export interface ListGroupItemProps extends HTMLAnchorAttributes {
  action?: boolean;
  active?: boolean;
  color?: Color | string;
  disabled?: boolean;
  href?: string;
  tag?: 'a' | 'button' | 'li';
}

export interface ListGroupItemEvents {
  click: WindowEventMap['click'];
}

export interface ListGroupItemSlots {
  default: {};
}

export default class ListGroupItem extends SvelteComponent<
  ListGroupItemProps,
  ListGroupItemEvents,
  ListGroupItemSlots
> {}
