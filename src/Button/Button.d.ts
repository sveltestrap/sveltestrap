declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLButtonAttributes } from 'svelte/elements';

  type ButtonColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';

  type ButtonSize = 'lg' | 'sm';

  export interface ButtonProps extends HTMLButtonAttributes {
    active?: boolean;
    block?: boolean;
    class?: string;
    close?: boolean;
    color?: ButtonColor;
    disabled?: boolean;
    href?: string;
    inner?: HTMLElement;
    outline?: boolean;
    size?: ButtonSize;
  }

  export interface ButtonEvents {
    click: WindowEventMap['click'];
  }

  export interface ButtonSlots {
    default: {};
  }

  export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {}
}
