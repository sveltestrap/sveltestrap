import { render } from '@testing-library/svelte';
import { NavbarToggler } from './';

const TestHarness = (props) => render(NavbarToggler, props);

describe('NavbarToggler', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const toggle = container.querySelector('.navbar-toggler');

    expect(toggle.className).toContain('navbar-toggler');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'push' });
    const toggle = container.querySelector('.navbar-toggler');

    expect(toggle.className).toContain('push');
    expect(container).toMatchSnapshot();
  });
});
