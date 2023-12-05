import { render } from '@testing-library/svelte';
import { NavLink } from './';

const TestHarness = (props) => render(NavLink, props);

describe('NavLink', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const link = container.querySelector('.nav-link');

    expect(link.className).toContain('nav-link');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'star' });
    const link = container.querySelector('.nav-link');

    expect(link.className).toContain('star');
    expect(container).toMatchSnapshot();
  });
});
