import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Color } from '../shared';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  bar?: boolean;
  barClassName?: string;
  color?: Color;
  max?: string | number;
  multi?: boolean;
  striped?: boolean;
  theme?: string;
  value?: string | number;
}

export interface ProgressEvents {}

export interface ProgressSlots {
  default: {};
}

export default class Progress extends SvelteComponent<ProgressProps, ProgressEvents, ProgressSlots> {}
