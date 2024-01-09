import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export declare type ColumnProps =
  | string
  | boolean
  | number
  | {
      size?: boolean | number | string;
      push?: string | number;
      pull?: string | number;
      offset?: string | number;
      order?: string | number;
    };

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;
  xxl?: ColumnProps;
  widths?: string[];
}

export interface ColEvents {}

export interface ColSlots {
  default: {};
}

export default class Col extends SvelteComponent<ColProps, ColEvents, ColSlots> {}
