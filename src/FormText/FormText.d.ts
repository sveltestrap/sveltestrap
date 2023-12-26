import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { TextColor } from '../shared';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  color?: TextColor;
  inline?: boolean;
}

export interface IconEvents {}

export interface IconSlots {
  default: {};
}

export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {}
