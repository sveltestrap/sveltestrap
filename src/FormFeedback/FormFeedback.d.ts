import { SvelteComponent } from 'svelte';

export interface FormFeedbackProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tooltip?: boolean;
  valid?: boolean;
}

export default class FormFeedback extends SvelteComponent<
  FormFeedbackProps,
  {},
  { default: {} }
> {}
