import { SvelteComponent } from 'svelte';

export interface ImageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['img']> {
  figure?: boolean;
  fluid?: boolean;
  thumbnail?: boolean;
}

export default class Image extends SvelteComponent<ImageProps, {}, {}> {}
