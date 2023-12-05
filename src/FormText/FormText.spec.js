import { render } from '@testing-library/svelte';
import { FormText } from './';

const TestHarness = (props) => render(FormText, props);

describe('FormText', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const formtext = container.querySelector('.form-text');

    expect(formtext.className).toContain('form-text');
    expect(container).toMatchSnapshot();
  });

  test('should render custom color', () => {
    const { container } = TestHarness({ color: 'indigo' });
    const formtext = container.querySelector('.form-text');

    expect(formtext.className).toContain('form-text');
    expect(formtext.className).toContain('text-indigo');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'coffee' });
    const formtext = container.querySelector('.form-text');

    expect(formtext.className).toContain('coffee');
    expect(container).toMatchSnapshot();
  });
});
