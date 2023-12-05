import { SvelteComponent } from 'svelte';

export interface JumbotronProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class Jumbotron extends SvelteComponent<
  JumbotronProps,
  {},
  { default: {} }
> {}
