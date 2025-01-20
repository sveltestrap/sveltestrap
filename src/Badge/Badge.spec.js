import { render } from '@testing-library/svelte';
import { Badge } from './';

const TestHarness = (props) => render(Badge, props);

describe('Badge', () => {
  test('should render text and default color', () => {
    const { container } = TestHarness({
      content: 'Hello world!'
    });

    const badge = container.querySelector('.badge');

    expect(badge.innerHTML.trim()).toBe('Hello world!');
    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-secondary');
    expect(container).toMatchSnapshot();
  });

  test('should render specified color', () => {
    const { container } = TestHarness({
      color: 'primary',
      content: 'Hello world!'
    });

    const badge = container.querySelector('.badge');

    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({
      color: 'danger',
      content: 'Hello world!',
      class: 'boogie'
    });

    const badge = container.querySelector('.badge');

    expect(badge.className).toContain('boogie');
    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-danger');
    expect(container).toMatchSnapshot();
  });

  test('should render pill', () => {
    const { container } = TestHarness({
      pill: true,
      content: 'Hello world!'
    });

    const badge = container.querySelector('.badge');

    expect(badge.className).toContain('badge');
    expect(badge.className).toContain('text-bg-secondary');
    expect(badge.className).toContain('rounded-pill');
    expect(container).toMatchSnapshot();
  });

  test('should render link with href', () => {
    const { container } = TestHarness({
      content: 'Hello World!',
      href: 'http://example.com/'
    });

    const link = container.querySelector('a');

    expect(link.className).toBe('badge text-bg-secondary');
    expect(link.href).toBe('http://example.com/');
    expect(container).toMatchSnapshot();
  });

  test('should render a positioned badge', () => {
    const { container } = TestHarness({
      positioned: true,
      content: '100+',
      ariaLabel: 'Unread messages'
    });

    const screenText = container.querySelector('.visually-hidden');
    expect(screenText.innerHTML).toBe('Unread messages');

    const badge = container.querySelector('.badge');
    expect(badge.className).toContain('position-absolute');
    expect(badge.className).toContain('translate-middle');
    expect(badge.className).toContain('top-0');
    expect(badge.className).toContain('start-100');

    expect(container).toMatchSnapshot();
  });
});
