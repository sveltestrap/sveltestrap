import { SvelteComponent } from 'svelte';
import { TextColor } from '../shared';
import { HTMLAttributes } from 'svelte/elements';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  color?: TextColor;
  size?: any;
  type?: string;
}

export interface SpinnerEvents {}

export interface SpinnerSlots {
  default: {};
}

export default class Spinner extends SvelteComponent<SpinnerProps, SpinnerEvents, SpinnerSlots> {}
