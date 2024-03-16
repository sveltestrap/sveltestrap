import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { ContainerType, Placement } from '../shared';

type TooltipPlacement = 'left' | 'top' | 'bottom' | 'right';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean;
  container?: ContainerType;
  delay?: string | number;
  isOpen?: boolean;
  placement?: TooltipPlacement;
  target: string | HTMLElement;
  theme?: string;
}

export interface TooltipEvents {}

export interface TooltipSlots {
  default: {};
}

export default class Tooltip extends SvelteComponent<TooltipProps, TooltipEvents, TooltipSlots> {}
