import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardColumnsProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardColumnsEvents {}

export interface CardColumnsSlots {
  default: {};
}

export default class CardColumns extends SvelteComponent<CardColumnsProps, CardColumnsEvents, CardColumnsSlots> {}
