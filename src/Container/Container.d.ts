import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
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
