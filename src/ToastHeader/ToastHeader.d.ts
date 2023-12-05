import { SvelteComponent } from 'svelte';

export interface ToastHeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  toggle?: () => void;
  icon?: any;
  closeAriaLabel?: string;
}

export default class ToastHeader extends SvelteComponent<
  ToastHeaderProps,
  {},
  { default: {}; close: {}; icon: {} }
> {}
