declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { Color } from '../shared';
  import { HTMLInputAttributes } from 'svelte/elements';

  export type InputType =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'select'
    | 'submit'
    | 'switch'
    | 'tel'
    | 'text'
    | 'textarea'
    | 'time'
    | 'url'
    | 'week';

  export interface InputProps extends HTMLInputAttributes {
    bsSize?: 'lg' | 'sm';
    color?: Color;
    feedback?: string | string[];
    inner?: HTMLElement;
    invalid?: boolean;
    label?: string;
    plaintext?: boolean;
    reverse?: boolean;
    type?: InputType;
    valid?: boolean;
    files?: FileList;
    group?: any;
  }

  export interface InputEvents {
    click: WindowEventMap['click'];
    blur: WindowEventMap['blur'];
    focus: WindowEventMap['focus'];
    keydown: WindowEventMap['keydown'];
    keypress: WindowEventMap['keypress'];
    keyup: WindowEventMap['keyup'];
    change: WindowEventMap['change'];
    input: WindowEventMap['input'];
  }

  export interface InputSlots {
    default: {};
  }

  export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {}
}
