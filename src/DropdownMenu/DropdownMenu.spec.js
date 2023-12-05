import { render } from '@testing-library/svelte';
import TestDropdown from '../Dropdown/Dropdown.spec.svelte';

const TestHarness = (props) => render(TestDropdown, props);

describe('DropdownMenu', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const menu = container.querySelector('.dropdown-menu');

    expect(menu.className).toContain('dropdown-menu');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness();
    const menu = container.querySelector('.dropdown-menu');

    expect(menu.className).toContain('cocoa');
    expect(container).toMatchSnapshot();
  });
});
