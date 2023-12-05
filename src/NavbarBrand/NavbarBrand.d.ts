import { SvelteComponent } from 'svelte';

export interface NavbarBrandProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']> {
  href?: string;
}

export default class NavbarBrand extends SvelteComponent<
  NavbarBrandProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
