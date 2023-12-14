declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';

  export interface FigureProps extends HTMLAttributes<HTMLElement> {}

  export interface FigureEvents {}

  export interface FigureSlots {
    default: {};
    caption?: {};
  }

  export default class Figure extends SvelteComponent<FigureProps, FigureEvents, FigureSlots> {}
}
