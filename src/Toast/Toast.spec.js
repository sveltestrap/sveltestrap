import { render } from '@testing-library/svelte';
import { Toast } from './';

const TestHarness = (props) => render(Toast, props);

describe('Toast', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const toast = container.querySelector('.toast');

    expect(toast.className).toContain('toast');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'butter' });
    const toast = container.querySelector('.toast');

    expect(toast.className).toContain('butter');
    expect(container).toMatchSnapshot();
  });
});
