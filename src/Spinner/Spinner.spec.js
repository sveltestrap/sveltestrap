import { render } from '@testing-library/svelte';
import { Spinner } from './';

const TestHarness = (props) => render(Spinner, props);

describe('Spinner', () => {
  test('should render default color and type', () => {
    const { container } = TestHarness();
    const spinner = container.querySelector('.spinner-border');

    expect(spinner.className).toBe('spinner-border');
    expect(container).toMatchSnapshot();
  });

  test('should render specified color', () => {
    const { container } = TestHarness({ color: 'primary' });
    const spinner = container.querySelector('.spinner-border');

    expect(spinner.className).toBe('spinner-border text-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render specified type', () => {
    const { container } = TestHarness({
      color: 'warning',
      type: 'grow'
    });
    const spinner = container.querySelector('.spinner-grow');

    expect(spinner.className).toBe('spinner-grow text-warning');
    expect(container).toMatchSnapshot();
  });

  test('should render large size', () => {
    const { container } = TestHarness({ size: 'lg' });
    const spinner = container.querySelector('.spinner-border');

    expect(spinner.className).toBe('spinner-border-lg spinner-border');
    expect(container).toMatchSnapshot();
  });

  test('should render small size', () => {
    const { container } = TestHarness({ size: 'sm' });
    const spinner = container.querySelector('.spinner-border');

    expect(spinner.className).toBe('spinner-border-sm spinner-border');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({
      color: 'danger',
      class: 'boogie'
    });
    const spinner = container.querySelector('.spinner-border');

    expect(spinner.className).toBe('boogie spinner-border text-danger');
    expect(container).toMatchSnapshot();
  });
});
