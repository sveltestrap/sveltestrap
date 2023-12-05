import { render } from '@testing-library/svelte';
import { NavItem } from './';

const TestHarness = (props) => render(NavItem, props);

describe('NavItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const item = container.querySelector('.nav-item');

    expect(item.className).toContain('nav-item');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'putty' });
    const item = container.querySelector('.nav-item');

    expect(item.className).toContain('putty');
    expect(container).toMatchSnapshot();
  });
});
