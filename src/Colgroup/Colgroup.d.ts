import { SvelteComponent } from 'svelte';

export interface ColgroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['colgroup']> {
  footer?: undefined;
  header?: undefined;
  width?: undefined;
}

export default class Colgroup extends SvelteComponent<
  ColgroupProps,
  {},
  { default: {} }
> {}
