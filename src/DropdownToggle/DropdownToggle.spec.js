import { render } from '@testing-library/svelte';
import TestDropdown from '../Dropdown/Dropdown.spec.svelte';

const TestHarness = (props) => render(TestDropdown, props);

describe('DropdownToggle', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const toggle = container.querySelector('.dropdown-toggle');

    expect(toggle.className).toContain('dropdown-toggle');
    expect(toggle.className).toContain('btn');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness();
    const toggle = container.querySelector('.dropdown-toggle');

    expect(toggle.className).toContain('coconut');
    expect(container).toMatchSnapshot();
  });
});
