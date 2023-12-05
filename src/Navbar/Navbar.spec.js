import { render } from '@testing-library/svelte';
import { Navbar } from './';

const TestHarness = (props) => render(Navbar, props);

describe('Navbar', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const navbar = container.querySelector('.navbar');

    expect(navbar.className).toContain('navbar');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'gone' });
    const navbar = container.querySelector('.navbar');

    expect(navbar.className).toContain('gone');
    expect(container).toMatchSnapshot();
  });
});
