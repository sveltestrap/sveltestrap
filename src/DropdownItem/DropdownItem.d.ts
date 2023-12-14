declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLButtonAttributes } from 'svelte/elements';

  export interface DropdownItemProps extends HTMLButtonAttributes {
    active?: boolean;
    divider?: boolean;
    header?: boolean;
    href?: string;
    toggle?: boolean;
  }

  export interface DropdownItemEvents {}

  export interface DropdownItemSlots {
    default: {};
  }

  export default class DropdownItem extends SvelteComponent<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {}
}
