import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface TabPaneProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  tab?: string;
  disabled?: boolean;
  tabId?: number | string;
}

export interface TabPaneEvents {}

export interface TabPaneSlots {
  default: {};
  tab: {};
}

export default class TabPane extends SvelteComponent<TabPaneProps, TabPaneEvents, TabPaneSlots> {}
