import { render } from '@testing-library/svelte';
import { ToastBody } from './';

const TestHarness = (props) => render(ToastBody, props);

describe('ToastBody', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const body = container.querySelector('.toast-body');

    expect(body.className).toBe('toast-body');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const body = container.querySelector('.toast-body');

    expect(body.className).toBe('boogie toast-body');
    expect(container).toMatchSnapshot();
  });
});
