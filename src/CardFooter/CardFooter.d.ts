import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardFooterEvents {}

export interface CardFooterSlots {
  default: {};
}

export default class CardFooter extends SvelteComponent<CardFooterProps, CardFooterEvents, CardFooterSlots> {}
