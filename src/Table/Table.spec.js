import { render } from '@testing-library/svelte';
import { Table } from './';

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
});
