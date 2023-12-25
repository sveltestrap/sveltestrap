declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLInputAttributes } from 'svelte/elements';
  import { Color } from '../shared';

  export interface InputProps extends HTMLInputAttributes {
    bsSize?: 'lg' | 'sm';
    color?: Color;
    feedback?: string | string[];
    files?: FileList;
    group?: any;
    inner?: HTMLElement;
    invalid?: boolean;
    label?: string;
    plaintext?: boolean;
    reverse?: boolean;
    theme?: string;
    valid?: boolean;
  }

  export interface InputEvents {}

  export interface InputSlots {
    default?: {};
  }

  export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {}
}
