declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';
  import { FadeProps } from '../Fade';
  import { Color } from '../shared';

  export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    closeAriaLabel?: string;
    closeClassName?: string;
    color?: Color;
    dismissible?: boolean;
    fade?: boolean;
    heading?: string;
    isOpen?: boolean;
    transition?: FadeProps;
  }

  export interface AlertEvents {
    toggle: CustomEvent<{ [id: string]: boolean }>;
  }

  export interface AlertSlots {
    default: {};
    heading: {};
  }

  export default class Alert extends SvelteComponent<AlertProps, AlertEvents, AlertSlots> {}
}
