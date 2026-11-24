import { render } from '@testing-library/svelte';
import { tick } from 'svelte';
import { Table } from './';
import TableColumns from '../../tests/fixtures/TableColumns.svelte';

const TestHarness = (props) => render(Table, props);

describe('Table', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const table = container.querySelector('.table');

    expect(table.className).toContain('table');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'legged' });
    const table = container.querySelector('.table');

    expect(table.className).toContain('legged');
    expect(container).toMatchSnapshot();
  });

  test('should not render a footer when no column has footer content', () => {
    const { container } = render(TableColumns);

    expect(container.querySelectorAll('thead th')).toHaveLength(2);
    expect(container.querySelectorAll('tbody td')).toHaveLength(2);
    expect(container.querySelector('tfoot')).toBeNull();
  });

  test('should render a footer when a column has footer content', () => {
    const { container } = render(TableColumns, { footer: 'Total' });
    const cells = container.querySelectorAll('tfoot tr > *');

    expect(cells).toHaveLength(2);
    expect(cells[0].tagName).toBe('TH');
    expect(cells[0].textContent.trim()).toBe('Total');
    // a column without footer content must not produce an empty <th>
    expect(cells[1].tagName).toBe('TD');
  });

  test('should add and remove the footer as column footers change', async () => {
    const { container, component } = render(TableColumns);

    component.$set({ footer: 'Total' });
    await tick();
    expect(container.querySelector('tfoot th').textContent.trim()).toBe('Total');

    component.$set({ footer: undefined });
    await tick();
    expect(container.querySelector('tfoot')).toBeNull();
  });
});
