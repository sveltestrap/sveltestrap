import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface CardTitleEvents {}

export interface CardTitleSlots {
  default: {};
}

export default class CardTitle extends SvelteComponent<CardTitleProps, CardTitleEvents, CardTitleSlots> {}
