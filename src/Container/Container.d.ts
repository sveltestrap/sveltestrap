declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLDivAttributes } from 'svelte/elements';

  export interface ContainerProps extends HTMLDivAttributes {
    id?: string;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    fluid?: boolean | string;
  }

  export interface ContainerEvents {}

  export interface ContainerSlots {
    default: {};
  }

  export default class Container extends SvelteComponent<ContainerProps, ContainerEvents, ContainerSlots> {}
}
