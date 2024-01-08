import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  arialabel?: string;
  listClassName?: string;
  size?: string;
  theme?: string;
}

export interface PaginationEvents {}

export interface PaginationSlots {
  default: {};
}

export default class Pagination extends SvelteComponent<PaginationProps, PaginationEvents, PaginationSlots> {}
