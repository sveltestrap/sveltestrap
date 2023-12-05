import { SvelteComponent } from 'svelte';

export interface BreadcrumbItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['li']> {
  active?: boolean;
}

export default class BreadcrumbItem extends SvelteComponent<
  BreadcrumbItemProps,
  {},
  { default: {} }
> {}
