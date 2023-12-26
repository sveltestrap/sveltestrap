import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface InputGroupTextProps extends HTMLAttributes<HTMLSpanElement> {}

export interface InputGroupTextEvents {}

export interface InputGroupTextSlots {
  default: {};
}

export default class InputGroupText extends SvelteComponent<
  InputGroupTextProps,
  InputGroupTextEvents,
  InputGroupTextSlots
> {}
