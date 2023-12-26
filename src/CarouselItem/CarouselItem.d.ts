import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex?: number;
  itemIndex?: number;
}

export interface CarouselItemEvents {}

export interface CarouselItemSlots {
  default: {};
}

export default class CarouselItem extends SvelteComponent<CarouselItemProps, CarouselItemEvents, CarouselItemSlots> {}
