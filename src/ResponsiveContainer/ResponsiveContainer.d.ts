import { SvelteComponent } from 'svelte';

export interface ResponsiveContainerProps {
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export interface ResponsiveContainerEvents {}

export interface ResponsiveContainerSlots {
  default: {};
}

export default class ResponsiveContainer extends SvelteComponent<
  ResponsiveContainerProps,
  ResponsiveContainerEvents,
  ResponsiveContainerSlots
> {}
