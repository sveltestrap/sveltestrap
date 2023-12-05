import { render } from '@testing-library/svelte';
import { Breadcrumb } from './';

const TestHarness = (props) => render(Breadcrumb, props);

describe('Breadcrumb', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const breadcrumb = container.querySelector('.breadcrumb');

    expect(breadcrumb.className).toBe('breadcrumb');
    expect(container).toMatchSnapshot();
  });

  test.todo('should render custom divider');

  test('should render custom class', () => {
    const { container } = TestHarness({
      class: 'boogie',
      listClassName: 'shoes'
    });

    const nav = container.querySelector('nav');
    expect(nav.className).toBe('boogie');

    const breadcrumb = container.querySelector('.breadcrumb');
    expect(breadcrumb.className).toBe('breadcrumb shoes');

    expect(container).toMatchSnapshot();
  });
});
