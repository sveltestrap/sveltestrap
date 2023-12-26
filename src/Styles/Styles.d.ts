import { SvelteComponent } from 'svelte';

export interface StylesProps {
  icons?: boolean;
  theme?: 'light' | 'dark' | 'auto' | undefined;
}

export interface StylesEvents {}

export interface StylesSlots {}

export default class Styles extends SvelteComponent<StylesProps, StylesEvents, StylesSlots> {}
