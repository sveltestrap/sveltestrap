import { render } from '@testing-library/svelte';
import { InputGroupText } from './';

const TestHarness = (props) => render(InputGroupText, props);

describe('InputGroupText', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const text = container.querySelector('.input-group-text');

    expect(text.className).toContain('input-group-text');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'mucho' });
    const text = container.querySelector('.input-group-text');

    expect(text.className).toContain('mucho');
    expect(container).toMatchSnapshot();
  });
});
