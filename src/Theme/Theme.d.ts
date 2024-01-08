import { SvelteComponent } from 'svelte';

export interface ThemeProps {
  theme?: string;
}

export interface ThemeEvents {}

export interface ThemeSlots {
  default: {};
}

export default class Theme extends SvelteComponent<ThemeProps, ThemeEvents, ThemeSlots> {}
