import Form from './Form.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Form', () => {
  test('should render correctly', () => {
    const { container } = render(Form, {
      action: 'https://example.com/yo-mama',
      method: 'post'
    });
    const component = container.querySelector('form');
    expect(component.action).toBe('https://example.com/yo-mama');
    expect(component.method).toBe('post');
  });

  test('should render inline', () => {
    const { container } = render(Form, { inline: true });
    const component = container.querySelector('.form-inline');
    expect(component.className).toBe('form-inline');
  });

  test('should render validated', () => {
    const { container } = render(Form, { validated: true });
    const component = container.querySelector('form');
    expect(component.className).toBe('was-validated');
  });

  test('should render custom class', () => {
    const { container } = render(Form, { class: 'boogie' });
    const component = container.querySelector('form');
    expect(component.className).toBe('boogie');
  });
});
