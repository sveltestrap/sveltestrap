import { SvelteComponent } from 'svelte';
import { HTMLImgAttributes } from 'svelte/elements';

export interface CardImgProps extends HTMLImgAttributes {
  bottom?: boolean;
  top?: boolean;
}

export interface CardImgEvents {}

export interface CardImgSlots {}

export default class CardImg extends SvelteComponent<CardImgProps, CardImgEvents, CardImgSlots> {}
