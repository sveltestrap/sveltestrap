import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  check?: boolean;
  disabled?: boolean;
  floating?: boolean;
  inline?: boolean;
  label?: string;
  row?: boolean;
  spacing?: string;
  tag?: 'div' | 'fieldset';
}

export interface FormGroupEvents {}

export interface FormGroupSlots {
  default: {};
  label: {};
}

export default class FormGroup extends SvelteComponent<FormGroupProps, FormGroupEvents, FormGroupSlots> {}
