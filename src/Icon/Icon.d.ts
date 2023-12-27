import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  name: string;
}

export interface IconEvents {}

export interface IconSlots {}

export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {}
