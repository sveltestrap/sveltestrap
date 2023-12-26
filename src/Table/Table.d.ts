import { Breakpoints } from '../shared';
import { SvelteComponent } from 'svelte';
import { HTMLTableAttributes } from 'svelte/elements';

export interface TableProps<T> extends HTMLTableAttributes {
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  responsive?: boolean | Breakpoints;
  rows?: T[];
  size?: string;
  striped?: boolean;
}

export interface TableEvents {}

export interface TableSlots<T> {
  default: {
    row?: T;
  };
}

export default class Table<T> extends SvelteComponent<TableProps<T>, TableEvents, TableSlots<T>> {}
