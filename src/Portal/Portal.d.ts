import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface PortalProps extends HTMLAttributes<HTMLDivElement> {}

export interface PortalEvents {}

export interface PortalSlots {
  default: {};
}

export default class Portal extends SvelteComponent<PortalProps, PortalEvents, PortalSlots> {}
