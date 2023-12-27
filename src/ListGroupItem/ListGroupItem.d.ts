import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';
import { Color } from '../shared';

export interface ListGroupItemProps extends HTMLAnchorAttributes {
  action?: boolean;
  active?: boolean;
  color?: Color;
  disabled?: boolean;
  href?: string;
  tag?: 'a' | 'button' | 'li';
}

export interface ListGroupItemEvents {
  open: CustomEvent<void>;
  opening: CustomEvent<void>;
  closing: CustomEvent<void>;
  close: CustomEvent<void>;
}

export interface ListGroupItemSlots {
  default: {};
}

export default class ListGroupItem extends SvelteComponent<
  ListGroupItemProps,
  ListGroupItemEvents,
  ListGroupItemSlots
> {}
