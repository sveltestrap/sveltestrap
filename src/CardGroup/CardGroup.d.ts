import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardGroupProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardGroupEvents {}

export interface CardGroupSlots {
  default: {};
}

export default class CardGroup extends SvelteComponent<CardGroupProps, CardGroupEvents, CardGroupSlots> {}
