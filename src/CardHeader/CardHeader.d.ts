import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardHeaderProps extends HTMLAttributes<HTMLElement> {
  tag?: 'div' | 'h3';
}

export interface CardHeaderEvents {}

export interface CardHeaderSlots {}

export default class CardHeader extends SvelteComponent<CardHeaderProps, CardHeaderEvents, CardHeaderSlots> {}
