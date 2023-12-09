import { SvelteComponent } from 'svelte';
import { HTMLButtonAttributes } from 'svelte/elements';

export interface DropdownItemProps extends HTMLButtonAttributes {
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
