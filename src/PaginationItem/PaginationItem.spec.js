import { render } from '@testing-library/svelte';
import { PaginationItem } from './';

const TestHarness = (props) => render(PaginationItem, props);

describe('PaginationItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const item = container.querySelector('.page-item');

    expect(item.className).toContain('page-item');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'long' });
    const item = container.querySelector('.page-item');

    expect(item.className).toContain('long');
    expect(container).toMatchSnapshot();
  });
});
