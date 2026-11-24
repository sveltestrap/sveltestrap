import { TextOrSnippet } from '../shared';
import { SvelteComponent } from 'svelte';
import { HTMLTdAttributes } from 'svelte/elements';

export interface ContainerProps extends HTMLTdAttributes {
  footer?: TextOrSnippet;
  header?: TextOrSnippet;
}

export interface ContainerEvents {}

export interface ContainerSlots {
  default: {};
  footer?: {};
  header?: {};
}

export default class Container extends SvelteComponent<ContainerProps, ContainerEvents, ContainerSlots> {}
