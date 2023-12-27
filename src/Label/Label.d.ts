import { SvelteComponent } from 'svelte';
import { HTMLLabelAttributes } from 'svelte/elements';
import { ColumnProps } from '../Col';

export interface LabelProps extends HTMLLabelAttributes {
  check?: boolean;
  hidden?: boolean;
  lg?: ColumnProps;
  md?: ColumnProps;
  size?: string;
  sm?: ColumnProps;
  xl?: ColumnProps;
  xs?: ColumnProps;
  xxl?: ColumnProps;
}

export interface LabelEvents {}

export interface LabelSlots {
  default: {};
}

export default class Label extends SvelteComponent<LabelProps, LabelEvents, LabelSlots> {}
