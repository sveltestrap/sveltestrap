import { SvelteComponent } from 'svelte';
import { HTMLLiAttributes } from 'svelte/elements';

export interface PaginationItemProps extends HTMLLiAttributes {
  active?: boolean;
  disabled?: boolean;
}

export interface PaginationItemEvents {}

export interface PaginationItemSlots {
  default: {};
}

export default class PaginationItem extends SvelteComponent<
  PaginationItemProps,
  PaginationItemEvents,
  PaginationItemSlots
> {}
