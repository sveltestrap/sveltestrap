import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardTextProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface CardTextEvents {}

export interface CardTextSlots {
  default: {};
}

export default class CardText extends SvelteComponent<CardTextProps, CardTextEvents, CardTextSlots> {}
