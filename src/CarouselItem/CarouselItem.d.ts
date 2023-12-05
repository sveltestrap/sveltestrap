import { SvelteComponent } from 'svelte';

export interface CarouselItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  activeIndex?: number;
  itemIndex?: number;
}

export default class CarouselItem extends SvelteComponent<
  CarouselItemProps,
  {},
  { default: {} }
> {}
