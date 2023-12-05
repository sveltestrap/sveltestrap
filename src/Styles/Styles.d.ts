import { SvelteComponent } from 'svelte';

export interface StylesProps {
  icons?: boolean;
  theme?: 'light' | 'dark' | 'auto' | undefined;
}

export default class Styles extends SvelteComponent<StylesProps, {}, {}> {}
