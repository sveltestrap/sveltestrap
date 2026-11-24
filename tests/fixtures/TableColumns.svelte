<script>
  import { Column, Table } from '../../src';

  export let rows = [{ first: 'Ada', last: 'Lovelace' }];
  export let footer = undefined;
</script>

<Table {rows} let:row>
  <Column header="First" {footer}>{row.first}</Column>
  <Column header="Last">{row.last}</Column>
</Table>
