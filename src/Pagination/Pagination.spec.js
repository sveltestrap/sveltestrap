import { render } from '@testing-library/svelte';
import { Pagination } from './';

const TestHarness = (props) => render(Pagination, props);

describe('Pagination', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const pagination = container.querySelector('.pagination');

    expect(pagination.className).toContain('pagination');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'last' });
    const pagination = container.querySelector('nav');

    expect(pagination.className).toContain('last');
    expect(container).toMatchSnapshot();
  });
});
