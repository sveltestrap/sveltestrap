import { SvelteComponent } from 'svelte';
import { HTMLImgAttributes } from 'svelte/elements';

export interface ImageProps extends HTMLImgAttributes {
  alt?: string;
  figure?: boolean;
  fluid?: boolean;
  thumbnail?: boolean;
}

export interface ImageEvents {}

export interface ImageSlots {}

export default class Image extends SvelteComponent<ImageProps, ImageEvents, ImageSlots> {}
