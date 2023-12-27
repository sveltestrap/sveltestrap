import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {}

export interface ButtonToolbarEvents {}

export interface ButtonToolbarSlots {
  default: {};
}

export default class ButtonToolbar extends SvelteComponent<
  ButtonToolbarProps,
  ButtonToolbarEvents,
  ButtonToolbarSlots
> {}
