import { SvelteComponent } from 'svelte';

export interface ContainerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  id?: string;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  fluid?: boolean | string;
}

export default class Container extends SvelteComponent<
  ContainerProps,
  {},
  { default: {} }
> {}
