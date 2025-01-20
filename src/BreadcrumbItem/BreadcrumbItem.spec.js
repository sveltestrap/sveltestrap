import { render } from '@testing-library/svelte';
import { BreadcrumbItem } from './';

const TestHarness = (props) => render(BreadcrumbItem, props);

describe('BreadcrumbItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness({ content: 'Alpha' });
    const item = container.querySelector('.breadcrumb-item');

    expect(item.innerHTML).toBe('Alpha');
    expect(item.className).toBe('breadcrumb-item');
    expect(container).toMatchSnapshot();
  });

  test('should render active', () => {
    const { container } = TestHarness({ active: true });
    const item = container.querySelector('.breadcrumb-item');

    expect(item.className).toBe('active breadcrumb-item');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({
      class: 'boogie',
      listClassName: 'shoes'
    });
    const item = container.querySelector('.breadcrumb-item');

    expect(item.className).toBe('boogie breadcrumb-item');
    expect(container).toMatchSnapshot();
  });
});
