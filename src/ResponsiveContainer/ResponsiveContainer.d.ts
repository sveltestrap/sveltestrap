import { SvelteComponent } from 'svelte';

export interface ResponsiveContainerProps {
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export default class ResponsiveContainer extends SvelteComponent<
  ResponsiveContainerProps,
  {},
  { default: {} }
> {}
