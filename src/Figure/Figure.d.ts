import { SvelteComponent } from 'svelte';

export interface FigureProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['figure']> {}

export default class Figure extends SvelteComponent<
  FigureProps,
  {},
  { default: {}; caption: {} }
> {}
