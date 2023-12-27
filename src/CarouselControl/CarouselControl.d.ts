import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';

export interface CarouselControlProps extends HTMLAnchorAttributes {
  activeIndex?: number;
  direction: 'prev' | 'next';
  directionText?: string;
  items?: any[];
  wrap?: boolean;
}

export interface CarouselControlEvents {}

export interface CarouselControlSlots {}

export default class CarouselControl extends SvelteComponent<
  CarouselControlProps,
  CarouselControlEvents,
  CarouselControlSlots
> {}
