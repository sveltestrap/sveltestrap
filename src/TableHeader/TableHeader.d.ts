import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableHeaderEvents {}

export interface TableHeaderSlots {
  default: {};
}

export default class TableHeader extends SvelteComponent<TableHeaderProps, TableHeaderEvents, TableHeaderSlots> {}
