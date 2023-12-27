import { SvelteComponent } from 'svelte';
import { HTMLTdAttributes } from 'svelte/elements';

export interface ContainerProps extends HTMLTdAttributes {
  footer?: string;
  header?: string;
}

export interface ContainerEvents {}

export interface ContainerSlots {
  default: {};
  footer?: {};
  header?: {};
}

export default class Container extends SvelteComponent<ContainerProps, ContainerEvents, ContainerSlots> {}
