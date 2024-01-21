import { SvelteComponent } from 'svelte';
import { HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import { Color, InputType } from '../shared';

export interface InputProps extends HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes {
  bsSize?: 'lg' | 'sm' | string;
  color?: Color | string;
  feedback?: string | string[];
  files?: FileList;
  group?: any;
  inner?: HTMLElement;
  invalid?: boolean;
  label?: string;
  plaintext?: boolean;
  reverse?: boolean;
  theme?: string;
  type?: InputType;
  valid?: boolean;
}

declare type InputEvent<T extends Event = Event, EventTarget> = T & {
  currentTarget: HTMLInputElement;
};

export interface InputEvents {
  blur: InputEvent<FocusEvent>;
  change: InputEvent<Event>;
  click: InputEvent<MouseEvent>;
  focus: InputEvent<FocusEvent>;
  input: InputEvent<InputEvent>;
  keydown: InputEvent<KeyboardEvent>;
  keypress: InputEvent<KeyboardEvent>;
  keyup: InputEvent<KeyboardEvent>;
  mouseenter: InputEvent<MouseEvent>;
  mouseover: InputEvent<MouseEvent>;
  mouseleave: InputEvent<MouseEvent>;
  paste: InputEvent<ClipboardEvent>;
}

export interface InputSlots {
  default?: {};
}

export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {}
