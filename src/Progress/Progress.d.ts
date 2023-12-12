declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { Color } from '../shared';
  import { HTMLAttributes } from 'svelte/elements';

  export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    animated?: boolean;
    bar?: boolean;
    barClassName?: string;
    color?: Color;
    max?: string | number;
    multi?: boolean;
    striped?: boolean;
    value?: string | number;
  }

  export interface ProgressEvents {}

  export interface ProgressSlots {
    default: {};
  }

  export default class Progress extends SvelteComponent<ProgressProps, ProgressEvents, ProgressSlots> {}
}
