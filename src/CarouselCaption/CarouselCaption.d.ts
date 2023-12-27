import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CarouselCaptionProps extends HTMLAttributes<HTMLDivElement> {
  captionHeader?: string;
  captionText: string;
}

export interface CarouselCaptionEvents {}

export interface CarouselCaptionSlots {
  default: {};
}

export default class CarouselCaption extends SvelteComponent<
  CarouselCaptionProps,
  CarouselCaptionEvents,
  CarouselCaptionSlots
> {}
