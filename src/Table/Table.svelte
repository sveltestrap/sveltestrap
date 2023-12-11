<script>
  import { classnames } from '../utils';
  import { Colgroup } from '../Colgroup';
  import { ResponsiveContainer } from '../ResponsiveContainer';
  import { TableFooter } from '../TableFooter';
  import { TableHeader } from '../TableHeader';

  let className = '';
  /**
   * Represents a custom class name for the component.
   * @type {string}
   */

  export { className as class };

  /**
   * Represents the size of the component.
   * @type {string}
   */
  export let size = '';

  /**
   * Indicates whether the component should have a bordered style.
   * @type {boolean}
   */
  export let bordered = false;

  /**
   * Indicates whether the component should have a borderless style.
   * @type {boolean}
   */
  export let borderless = false;

  /**
   * Indicates whether the component should have a striped style.
   * @type {boolean}
   */
  export let striped = false;

  /**
   * Indicates whether the component should have a hover effect.
   * @type {boolean}
   */
  export let hover = false;

  /**
   * Indicates whether the component should be responsive.
   * @type {boolean}
   */
  export let responsive = false;

  /**
   * Represents the number of rows for the component.
   * @type {Object[]}
   */
  export let rows = undefined;

  $: classes = classnames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    borderless ? 'table-borderless' : false,
    striped ? 'table-striped' : false,
    hover ? 'table-hover' : false
  );
</script>

<ResponsiveContainer {responsive}>
  <table {...$$restProps} class={classes}>
    {#if rows}
      <Colgroup>
        <slot />
      </Colgroup>
      <TableHeader>
        <slot />
      </TableHeader>
      <tbody>
        {#each rows as row}
          <tr>
            <slot {row} />
          </tr>
        {/each}
      </tbody>
      <TableFooter>
        <slot />
      </TableFooter>
    {:else}
      <slot />
    {/if}
  </table>
</ResponsiveContainer>
