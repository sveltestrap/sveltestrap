import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { ColumnProps } from '../shared';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  cols?: ColumnProps;
  noGutters?: boolean;
  form?: boolean;
  inner?: HTMLElement;
}

export interface RowEvents {}

export interface RowSlots {
  default: {};
}

export default class Row extends SvelteComponent<RowProps, RowEvents, RowSlots> {}
