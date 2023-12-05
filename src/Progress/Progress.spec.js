import { render } from '@testing-library/svelte';
import { Progress } from './';

const TestHarness = (props) => render(Progress, props);

describe('Progress', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const progress = container.querySelector('.progress');

    expect(progress.className).toContain('progress');
    expect(container).toMatchSnapshot();
  });

  test('should render specified color', () => {
    const { container } = TestHarness({ color: 'primary' });
    const progress = container.querySelector('.progress-bar');

    expect(progress.className).toContain('progress-bar');
    expect(progress.className).toContain('text-bg-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'end' });
    const progress = container.querySelector('.progress');

    expect(progress.className).toContain('end');
    expect(container).toMatchSnapshot();
  });
});
