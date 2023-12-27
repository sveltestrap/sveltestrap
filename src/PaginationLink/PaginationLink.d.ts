import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';

export interface PaginationLinkProps extends HTMLAnchorAttributes {
  arialabel?: string;
  first?: boolean;
  last?: boolean;
  next?: boolean;
  previous?: boolean;
}

export interface PaginationLinkEvents {
  click: WindowEventMap['click'];
}

export interface PaginationLinkSlots {
  default: {};
}

export default class PaginationLink extends SvelteComponent<
  PaginationLinkProps,
  PaginationLinkEvents,
  PaginationLinkSlots
> {}
