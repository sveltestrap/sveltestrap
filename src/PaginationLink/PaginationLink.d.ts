import { SvelteComponent } from 'svelte';

export interface PaginationLinkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']> {
  arialabel?: string;
  first?: boolean;
  href?: string;
  last?: boolean;
  next?: boolean;
  previous?: boolean;
}

export default class PaginationLink extends SvelteComponent<
  PaginationLinkProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
