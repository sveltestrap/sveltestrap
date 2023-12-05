import { render } from '@testing-library/svelte';
import { NavbarBrand } from './';

const TestHarness = (props) => render(NavbarBrand, props);

describe('NavbarBrand', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const brand = container.querySelector('.navbar-brand');

    expect(brand.className).toContain('navbar-brand');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'gulp' });
    const brand = container.querySelector('.navbar-brand');

    expect(brand.className).toContain('gulp');
    expect(container).toMatchSnapshot();
  });
});
