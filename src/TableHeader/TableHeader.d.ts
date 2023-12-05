import { SvelteComponent } from 'svelte';

export interface TableHeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['thead']> {}

export default class TableHeader extends SvelteComponent<
  TableHeaderProps,
  {},
  { default: {} }
> {}
