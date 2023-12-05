import { render } from '@testing-library/svelte';
import { Nav } from './';

const TestHarness = (props) => render(Nav, props);

describe('Nav', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const nav = container.querySelector('.nav');

    expect(nav.className).toContain('nav');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'go' });
    const nav = container.querySelector('.nav');

    expect(nav.className).toContain('go');
    expect(container).toMatchSnapshot();
  });

  test('should render prop underline', () => {
    const { container } = TestHarness({ underline: true });
    const nav = container.querySelector('.nav');

    expect(nav.className).toContain('nav-underline');
    expect(container).toMatchSnapshot();
  });

  test('should render prop tabs', () => {
    const { container } = TestHarness({ tabs: true });
    const nav = container.querySelector('.nav');

    expect(nav.className).toContain('nav-tabs');
    expect(container).toMatchSnapshot();
  });

  test('should render prop pills', () => {
    const { container } = TestHarness({ pills: true });
    const nav = container.querySelector('.nav');

    expect(nav.className).toContain('nav-pills');
    expect(container).toMatchSnapshot();
  });

  test('should render prop vertical', () => {
    const { container } = TestHarness({ vertical: true });
    const nav = container.querySelector('.nav');

    expect(nav.className).toContain('flex-column');
    expect(container).toMatchSnapshot();
  });
});
