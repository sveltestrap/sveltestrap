import { render } from '@testing-library/svelte';
import { Row } from './';

const TestHarness = (props) => render(Row, props);

describe('Row', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const row = container.querySelector('.row');

    expect(row.className).toBe('row');
    expect(container).toMatchSnapshot();
  });

  test('should render noGutters', () => {
    const { container } = TestHarness({ noGutters: true });
    const row = container.querySelector('.row');

    expect(row.className).toBe('gx-0 row');
    expect(container).toMatchSnapshot();
  });

  test('should render form row', () => {
    const { container } = TestHarness({ form: true });
    const row = container.querySelector('.form-row');

    expect(row.className).toBe('form-row');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const row = container.querySelector('.row');

    expect(row.className).toBe('boogie row');
    expect(container).toMatchSnapshot();
  });

  test('should support cols number', () => {
    const { container } = TestHarness({ cols: '2' });
    const row = container.querySelector('.row');

    expect(row.className).toBe('row row-cols-2');
    expect(container).toMatchSnapshot();
  });

  test('should support cols object', () => {
    const { container } = TestHarness({
      cols: {
        sm: 2,
        md: 3
      }
    });
    const row = container.querySelector('.row');

    expect(row.className).toBe('row row-cols-sm-2 row-cols-md-3');
    expect(container).toMatchSnapshot();
  });
});
