import { SvelteComponent } from 'svelte';

export interface PaginationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['nav']> {
  listClassName?: string;
  size?: string;
  arialabel?: string;
}

export default class Pagination extends SvelteComponent<
  PaginationProps,
  {},
  { default: {} }
> {}
