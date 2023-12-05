import { SvelteComponent } from 'svelte';

export interface TableFooterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['tfoot']> {}

export default class TableFooter extends SvelteComponent<
  TableFooterProps,
  {},
  { default: {} }
> {}
