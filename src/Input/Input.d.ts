import { SvelteComponent } from 'svelte';
import { HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import { Color } from '../shared';

export interface InputProps extends HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes {
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
  valid?: boolean;
}

export interface InputEvents {
  blur: WindowEventMap['blur'];
  change: WindowEventMap['change'];
  click: WindowEventMap['click'];
  focus: WindowEventMap['focus'];
  input: WindowEventMap['input'];
  mouseenter: WindowEventMap['mouseenter'];
  mouseleave: WindowEventMap['mouseleave'];
  mouseover: WindowEventMap['mouseover'];
  keydown: WindowEventMap['keydown'];
  keypress: WindowEventMap['keypress'];
  keyup: WindowEventMap['keyup'];
  paste: DocumentAndElementEventHandlersEventMap['paste'];
}

export interface InputSlots {
  default?: {};
}

export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {}
