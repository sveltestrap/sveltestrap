import { TextOrSnippet } from '../shared';
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface FigureProps extends HTMLAttributes<HTMLElement> {
  alt?: string;
  class?: string;
  caption?: TextOrSnippet;
}

export interface FigureEvents {}

export interface FigureSlots {
  default: {};
  caption?: {};
}

export default class Figure extends SvelteComponent<FigureProps, FigureEvents, FigureSlots> {}
