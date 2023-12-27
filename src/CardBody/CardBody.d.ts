import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardBodyEvents {}

export interface CardBodySlots {
  default: {};
}

export default class CardBody extends SvelteComponent<CardBodyProps, CardBodyEvents, CardBodySlots> {}
