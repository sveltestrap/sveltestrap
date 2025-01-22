import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { ContainerType } from '../shared';

declare type PopoverPlacement = 'left' | 'top' | 'bottom' | 'right' | 'auto';
declare type Triggers = 'click' | 'hover' | 'focus';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean;
  class?: string;
  container?: ContainerType;
  dismissible?: boolean;
  hideOnOutsideClick?: boolean;
  isOpen?: boolean;
  placement?: PopoverPlacement;
  target: string;
  theme?: string;
  title?: string;
  trigger?: Triggers;
}

export interface PopoverEvents {}

export interface PopoverSlots {
  default: {};
  title: {};
}

export default class Popover extends SvelteComponent<PopoverProps, PopoverEvents, PopoverSlots> {}
