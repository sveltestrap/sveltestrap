declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';

  export interface PaginationProps extends HTMLAttributes<HTMLElement> {
    listClassName?: string;
    size?: string;
    arialabel?: string;
  }

  export interface PaginationEvents {}

  export interface PaginationSlots {
    default: {};
  }

  export default class Pagination extends SvelteComponent<PaginationProps, PaginationEvents, PaginationSlots> {}
}
