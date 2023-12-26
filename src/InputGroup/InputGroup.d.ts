import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'lg';
  theme?: string;
}

export interface InputGroupEvents {}

export interface InputGroupSlots {
  default: {};
}

export default class InputGroup extends SvelteComponent<InputGroupProps, InputGroupEvents, InputGroupSlots> {}
