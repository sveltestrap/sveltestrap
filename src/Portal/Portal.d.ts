import { SvelteComponent } from 'svelte';

export interface PortalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class Portal extends SvelteComponent<
  PortalProps,
  {},
  { default: {} }
> {}
