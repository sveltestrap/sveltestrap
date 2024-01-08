import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface NavProps extends HTMLAttributes<HTMLUListElement> {
  card?: boolean;
  fill?: boolean;
  horizontal?: string;
  justified?: boolean;
  navbar?: boolean;
  pills?: boolean;
  tabs?: boolean;
  theme?: string;
  vertical?: boolean | string;
  underline?: boolean;
}

export interface NavEvents {}

export interface NavSlots {
  default: {};
}

export default class Nav extends SvelteComponent<NavProps, NavEvents, NavSlots> {}
