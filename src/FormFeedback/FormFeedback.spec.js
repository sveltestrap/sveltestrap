import { render } from '@testing-library/svelte';
import { FormFeedback } from './';

const TestHarness = (props) => render(FormFeedback, props);

describe('FormFeedback', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const feedback = container.querySelector('.invalid-feedback');

    expect(feedback.className).toContain('invalid-feedback');
    expect(container).toMatchSnapshot();
  });

  test('should render valid feedback', () => {
    const { container } = TestHarness({ valid: true });
    const feedback = container.querySelector('.valid-feedback');

    expect(feedback.className).toContain('valid-feedback');
    expect(container).toMatchSnapshot();
  });

  test('should render invalid tooltip', () => {
    const { container } = TestHarness({ tooltip: true });
    const tooltip = container.querySelector('.invalid-tooltip');

    expect(tooltip.className).toContain('invalid-tooltip');
    expect(container).toMatchSnapshot();
  });

  test('should render valid tooltip', () => {
    const { container } = TestHarness({
      tooltip: true,
      valid: true
    });
    const tooltip = container.querySelector('.valid-tooltip');

    expect(tooltip.className).toContain('valid-tooltip');
    expect(container).toMatchSnapshot();
  });
});
