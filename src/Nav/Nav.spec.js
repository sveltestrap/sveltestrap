import Nav from './Nav.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Nav', () => {
  test('should render correctly', () => {
    const { container } = render(Nav);
    const nav = container.querySelector('.nav');
    expect(nav.className).toContain('nav');
  });

  test('should render custom class', () => {
    const { container } = render(Nav, { class: 'go' });
    const nav = container.querySelector('.nav');
    expect(nav.className).toContain('go');
  });

  test('should render prop underline', () => {
    const { container } = render(Nav, { underline: true });
    const nav = container.querySelector('.nav');
    expect(nav.className).toContain('nav-underline');
  });

  test('should render prop tabs', () => {
    const { container } = render(Nav, { tabs: true });
    const nav = container.querySelector('.nav');
    expect(nav.className).toContain('nav-tabs');
  });

  test('should render prop pills', () => {
    const { container } = render(Nav, { pills: true });
    const nav = container.querySelector('.nav');
    expect(nav.className).toContain('nav-pills');
  });

  test('should render prop vertical', () => {
    const { container } = render(Nav, { vertical: true });
    const nav = container.querySelector('.nav');
    expect(nav.className).toContain('flex-column');
  });
});
