import { render } from '@testing-library/svelte';
import { PaginationLink } from './';

const TestHarness = (props) => render(PaginationLink, props);

describe('PaginationLink', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const page = container.querySelector('.page-link');

    expect(page.className).toContain('page-link');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'push' });
    const page = container.querySelector('.page-link');

    expect(page.className).toContain('push');
    expect(container).toMatchSnapshot();
  });
});
