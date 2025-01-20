import { render } from '@testing-library/svelte';
import { Button } from './';

const TestHarness = (props) => render(Button, props);

describe('Button', () => {
  test('should render text and default color', () => {
    const { container } = TestHarness({ content: 'Hello world!' });
    const button = container.querySelector('.btn');

    expect(button.innerHTML).toBe('Hello world!');
    expect(button.className).toBe('btn btn-secondary');
    expect(container).toMatchSnapshot();
  });

  test('should render specified color', () => {
    const { container } = TestHarness({ color: 'primary' });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('btn btn-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render outline', () => {
    const { container } = TestHarness({ color: 'warning', outline: true });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('btn btn-outline-warning');
    expect(container).toMatchSnapshot();
  });

  test('should render sm size', () => {
    const { container } = TestHarness({ size: 'sm' });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('btn btn-secondary btn-sm');
    expect(container).toMatchSnapshot();
  });

  test('should render lg size', () => {
    const { container } = TestHarness({ size: 'lg' });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('btn btn-secondary btn-lg');
    expect(container).toMatchSnapshot();
  });

  test('should render block', () => {
    const { container } = TestHarness({ block: true });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('btn btn-secondary d-block w-100');
    expect(container).toMatchSnapshot();
  });

  test('should render disabled', () => {
    const { container } = TestHarness({ disabled: true });
    const button = container.querySelector('.btn');

    expect(button.disabled).toBe(true);
    expect(container).toMatchSnapshot();
  });

  test('should render active', () => {
    const { container } = TestHarness({ active: true });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('btn btn-secondary active');
    expect(container).toMatchSnapshot();
  });

  test('should render as close', () => {
    const { container } = TestHarness({ close: true });
    const button = container.querySelector('.btn-close');

    expect(button.className).toBe('btn-close');
    expect(container).toMatchSnapshot();
  });

  test('should render as link if href specified', () => {
    const { container } = TestHarness({ href: 'http://example.com/' });
    const link = container.querySelector('a');

    expect(link.className).toBe('btn btn-secondary');
    expect(link.href).toBe('http://example.com/');
    expect(container).toMatchSnapshot();
  });

  test('should render value', () => {
    const { container } = TestHarness({ value: '$1000000' });
    const button = container.querySelector('.btn');

    expect(button.value).toBe('$1000000');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ color: 'danger', class: 'boogie' });
    const button = container.querySelector('.btn');

    expect(button.className).toBe('boogie btn btn-danger');
    expect(container).toMatchSnapshot();
  });
});
