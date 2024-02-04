import { SvelteComponent } from 'svelte';
import { HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import { Color, InputType } from '../shared';

type MixedElementProps = HTMLInputAttributes &
  HTMLSelectAttributes &
  HTMLTextareaAttributes & {
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
  };

type MixedTargetProps = {
  checked: boolean;
  valueAsDate: Date;
  valueAsNumber: number;
};

export interface InputProps extends MixedElementProps {}

type InputElementEvent<E extends Event = Event> = E & {
  currentTarget: (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) & MixedTargetProps;
  target: (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) & MixedTargetProps;
};

export interface InputEvents {
  blur: InputElementEvent<FocusEvent>;
  change: InputElementEvent<Event>;
  click: InputElementEvent<MouseEvent>;
  focus: InputElementEvent<FocusEvent>;
  input: InputElementEvent<InputEvent>;
  keydown: InputElementEvent<KeyboardEvent>;
  keypress: InputElementEvent<KeyboardEvent>;
  keyup: InputElementEvent<KeyboardEvent>;
  mousedown: InputElementEvent<MouseEvent>;
  mouseenter: InputElementEvent<MouseEvent>;
  mouseover: InputElementEvent<MouseEvent>;
  mouseleave: InputElementEvent<MouseEvent>;
  mouseup: InputElementEvent<MouseEvent>;
  paste: InputElementEvent<ClipboardEvent>;
}

export interface InputSlots {
  default?: {};
}

export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {}
