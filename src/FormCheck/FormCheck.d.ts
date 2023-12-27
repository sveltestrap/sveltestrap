import { SvelteComponent } from 'svelte';
import { HTMLInputAttributes } from 'svelte/elements';

export interface FormCheckProps extends HTMLInputAttributes {
  group?: any;
  inline?: boolean;
  inner?: HTMLElement;
  invalid?: boolean;
  label?: string;
  reverse?: boolean;
  size?: 'lg' | 'sm';
  valid?: boolean;
}

export interface FormCheckEvents {}

export interface FormCheckSlots {
  default: {};
  label?: {};
}

export default class FormCheck extends SvelteComponent<FormCheckProps, FormCheckEvents, FormCheckSlots> {}
