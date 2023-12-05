import { SvelteComponent } from 'svelte';

export interface FormProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['form']> {
  inline?: boolean;
  validated?: boolean;
}

export default class Form extends SvelteComponent<
  FormProps,
  { submit: WindowEventMap['submit'] },
  { default: {} }
> {}
