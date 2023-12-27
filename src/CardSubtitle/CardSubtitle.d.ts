import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface CardSubtitleEvents {}

export interface CardSubtitleSlots {
  default: {};
}

export default class CardSubtitle extends SvelteComponent<CardSubtitleProps, CardSubtitleEvents, CardSubtitleSlots> {}
