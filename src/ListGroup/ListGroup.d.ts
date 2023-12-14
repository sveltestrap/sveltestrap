declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';

  export interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
    flush?: boolean;
    horizontal?: boolean;
    numbered?: boolean;
  }

  export interface ListGroupEvents {}

  export interface ListGroupSlots {
    default: {};
  }

  export default class ListGroup extends SvelteComponent<
    ListGroupProps,
    ListGroupEvents,
    ListGroupSlots
  > {}
}
