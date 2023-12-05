import Badge from './Badge.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Badge', () => {
  test('should render text and default color', () => {
    const { container } = render(Badge, {
      children: 'Hello world!'
    });
    const badge = container.querySelector('.badge');
    expect(badge.innerHTML).toBe('Hello world!');
    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-secondary');
  });

  test('should render specified color', () => {
    const { container } = render(Badge, {
      color: 'primary',
      children: 'Hello world!'
    });
    const badge = container.querySelector('.badge');
    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-primary');
  });

  test('should render custom class', () => {
    const { container } = render(Badge, {
      color: 'danger',
      children: 'Hello world!',
      class: 'boogie'
    });
    const badge = container.querySelector('.badge');
    expect(badge.className).toContain('boogie');
    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-danger');
  });

  test('should render pill', () => {
    const { container } = render(Badge, {
      pill: true,
      children: 'Hello world!'
    });
    const badge = container.querySelector('.badge');
    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-secondary');
    expect(badge.className).toContain('rounded-pill');
  });

  test('should render link with href', () => {
    const { container } = render(Badge, {
      href: 'http://example.com/'
    });
    const link = container.querySelector('a');
    expect(link.className).toBe('badge text-bg-secondary');
    expect(link.href).toBe('http://example.com/');
  });
});
