import { SvelteComponent } from 'svelte';

export interface CardImgProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['img']> {
  alt?: string;
  bottom?: boolean;
  src?: string;
  top?: boolean;
}

export default class CardImg extends SvelteComponent<
  CardImgProps,
  {},
  {}
> {}
