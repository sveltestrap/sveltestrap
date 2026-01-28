import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
  pills?: boolean;
  vertical?: boolean;
}

export interface TabContentEvents {
  tab: CustomEvent<number | string>;
}

export interface TabContentSlots {
  default: {};
}

export default class TabContent extends SvelteComponent<TabContentProps, TabContentEvents, TabContentSlots> {}
