import { render } from '@testing-library/svelte';
import { ToastHeader } from './';

const TestHarness = (props) => render(ToastHeader, props);

describe('ToastHeader', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const header = container.querySelector('.toast-header');

    expect(header.className).toContain('toast-header');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'butter' });
    const header = container.querySelector('.toast-header');

    expect(header.className).toContain('butter');
    expect(container).toMatchSnapshot();
  });
});
