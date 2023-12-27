import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';

export interface CardLinkProps extends HTMLAnchorAttributes {}

export interface CardLinkEvents {}

export interface CardLinkSlots {
  default: {};
}

export default class CardLink extends SvelteComponent<CardLinkProps, CardLinkEvents, CardLinkSlots> {}
