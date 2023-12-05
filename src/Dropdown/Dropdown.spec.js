import { render } from '@testing-library/svelte';
import { Dropdown } from './';

const TestHarness = (props) => render(Dropdown, props);

describe('Dropdown', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const dropdown = container.querySelector('.dropdown');

    expect(dropdown.className).toContain('dropdown');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'cannonball' });
    const dropdown = container.querySelector('.dropdown');

    expect(dropdown.className).toContain('cannonball');
    expect(container).toMatchSnapshot();
  });
});
