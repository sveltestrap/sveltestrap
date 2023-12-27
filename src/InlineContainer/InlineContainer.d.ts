import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface InlineContainerProps extends HTMLAttributes<HTMLDivElement> {}

export interface InlineContainerEvents {}

export interface InlineContainerSlots {
  default: {};
}

export default class InlineContainer extends SvelteComponent<
  InlineContainerProps,
  InlineContainerEvents,
  InlineContainerSlots
> {}
