import { SvelteComponent } from 'svelte';

export interface OffcanvasHeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  closeAriaLabel?: string;
  toggle?: () => void;
}

export default class OffcanvasHeader extends SvelteComponent<
  OffcanvasHeaderProps,
  {},
  { default: {} }
> {}
