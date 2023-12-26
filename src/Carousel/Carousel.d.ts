import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex?: number;
  interval?: number | string | boolean;
  items: any[];
  keyboard?: boolean;
  pause?: 'hover' | false;
  ride?: boolean;
  theme?: string;
}

export interface CarouselEvents {}

export interface CarouselSlots {
  default: {};
}

export default class Carousel extends SvelteComponent<CarouselProps, CarouselEvents, CarouselSlots> {}
