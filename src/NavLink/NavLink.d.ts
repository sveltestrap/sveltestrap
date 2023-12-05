import { SvelteComponent } from 'svelte';

export interface NavLinkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']> {
  disabled?: boolean;
  active?: boolean;
  href?: string;
}

export default class NavLink extends SvelteComponent<
  NavLinkProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
