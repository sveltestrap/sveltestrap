import { SvelteComponent } from 'svelte';

export interface DropdownItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['button']> {
  active?: boolean;
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  href?: string;
  toggle?: boolean;
}

export default class DropdownItem extends SvelteComponent<
  DropdownItemProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
