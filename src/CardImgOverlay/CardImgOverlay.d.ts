import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardImgOverlayProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface CardImgOverlayEvents {}

export interface CardImgOverlaySlots {
  default: {};
}

export default class CardImgOverlay extends SvelteComponent<
  CardImgOverlayProps,
  CardImgOverlayEvents,
  CardImgOverlaySlots
> {}
