import { render } from '@testing-library/svelte';
import { DropdownItem } from './';

const TestHarness = (props) => render(DropdownItem, props);

describe('DropdownItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const item = container.querySelector('.dropdown-item');

    expect(item.className).toContain('dropdown-item');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'coconut' });
    const item = container.querySelector('.dropdown-item');

    expect(item.className).toContain('coconut');
    expect(container).toMatchSnapshot();
  });
});
