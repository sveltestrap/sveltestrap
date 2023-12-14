declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';

  export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    check?: boolean;
    disabled?: boolean;
    floating?: boolean;
    id?: string;
    inline?: boolean;
    label?: string;
    row?: boolean;
    tag?: 'div' | 'fieldset';
  }

  export interface FormGroupEvents {}

  export interface FormGroupSlots {
    default: {};
    label: {};
  }

  declare class FormGroup extends SvelteComponent<FormGroupProps, FormGroupEvents, FormGroupSlots> {}
  export default FormGroup;
}
