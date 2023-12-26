import { SvelteComponent } from 'svelte';
import { HTMLLiAttributes } from 'svelte/elements';

export interface BreadcrumbItemProps extends HTMLLiAttributes {
  active?: boolean;
}

export interface BreadcrumbItemEvents {}

export interface BreadcrumbItemSlots {
  default: {};
}

export default class BreadcrumbItem extends SvelteComponent<
  BreadcrumbItemProps,
  BreadcrumbItemEvents,
  BreadcrumbItemSlots
> {}
