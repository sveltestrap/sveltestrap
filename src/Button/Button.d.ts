import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import { Color } from '../shared';

export interface ButtonProps extends HTMLAnchorAttributes, HTMLButtonAttributes {
  active?: boolean;
  block?: boolean;
  class?: string;
  close?: boolean;
  color?: Color | 'link' | string;
  disabled?: boolean;
  href?: string;
  inner?: HTMLElement;
  outline?: boolean;
  size?: 'sm' | 'lg' | string;
}

export interface ButtonEvents {
  click: WindowEventMap['click'];
  mouseover: WindowEventMap['mouseover'];
  mouseenter: WindowEventMap['mouseenter'];
  mouseleave: WindowEventMap['mouseleave'];
  focus: WindowEventMap['focus'];
  blur: WindowEventMap['blur'];
}

export interface ButtonSlots {
  default: {};
}

export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {}
