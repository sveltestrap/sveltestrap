import { render } from '@testing-library/svelte';
import { Form } from './';

const TestHarness = (props) => render(Form, props);

describe('Form', () => {
  test('should render correctly', () => {
    const { container } = TestHarness({
      action: 'https://example.com/yo-mama',
      method: 'post'
    });
    const form = container.querySelector('form');

    expect(form.action).toBe('https://example.com/yo-mama');
    expect(form.method).toBe('post');
    expect(container).toMatchSnapshot();
  });

  test('should render inline', () => {
    const { container } = TestHarness({ inline: true });
    const form = container.querySelector('.form-inline');

    expect(form.className).toBe('form-inline');
    expect(container).toMatchSnapshot();
  });

  test('should render validated', () => {
    const { container } = TestHarness({ validated: true });
    const form = container.querySelector('form');

    expect(form.className).toBe('was-validated');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const form = container.querySelector('form');

    expect(form.className).toBe('boogie');
    expect(container).toMatchSnapshot();
  });
});
