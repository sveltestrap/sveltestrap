import { SvelteComponent } from 'svelte';

export interface ThemeTogglerProps {}

export interface ThemeTogglerEvents {}

export interface ThemeTogglerSlots {
  default: {};
}

export default class ThemeToggler extends SvelteComponent<ThemeTogglerProps, ThemeTogglerEvents, ThemeTogglerSlots> {}
