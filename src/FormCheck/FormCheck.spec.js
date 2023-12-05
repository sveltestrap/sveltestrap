import { render } from '@testing-library/svelte';
import { FormCheck } from './';

const TestHarness = (props) => render(FormCheck, props);

describe('FormCheck', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const check = container.querySelector('.form-check');

    expect(check.className).toContain('form-check');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'good' });
    const check = container.querySelector('.form-check');

    expect(check.className).toContain('good');
    expect(container).toMatchSnapshot();
  });
});
