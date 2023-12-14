
declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';
  import { ContainerType, Placement } from '../shared';

  type TooltipPlacement = 'left' | 'top' | 'bottom' | 'right';

  export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    animation?: boolean;
    container?: ContainerType;
    isOpen?: boolean;
    placement?: TooltipPlacement;
    target: string | HTMLElement;
  }

  export interface TooltipEvents {}

  export interface TooltipSlots {
    default: {};
  }

  export default class Tooltip extends SvelteComponent<
    TooltipProps,
    TooltipEvents,
    TooltipSlots
  > {}
}
