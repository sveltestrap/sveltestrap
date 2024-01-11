import { render } from '@testing-library/svelte';
import { Input } from './';

const TestHarness = (props) => render(Input, props);

describe('Input', () => {
  test('should render specified type', () => {
    const types = [
      'button',
      'checkbox',
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'month',
      'number',
      'password',
      'radio',
      'range',
      'reset',
      'search',
      // 'select',
      'submit',
      'switch',
      'tel',
      'text',
      // 'textarea',
      'time',
      'url',
      'week'
    ];
    types.forEach((type) => {
      const { container, unmount } = TestHarness({ type });
      const input = container.querySelector('input');

      switch (type) {
        case 'checkbox':
        case 'radio':
        case 'switch':
          expect(input.className).toContain('form-check-input');
          break;
        case 'color':
          expect(input.className).toContain('form-control form-control-color');
          break;
        case 'range':
          expect(input.className).toContain('form-range');
          break;
        case 'button':
        case 'reset':
        case 'submit':
          expect(input.className).toContain('btn');
          break;
        default:
          expect(input.className).toContain('form-control');
      }
      unmount();
    });
  });

  test('should render sm size', () => {
    const { container } = TestHarness({ bsSize: 'sm' });
    const input = container.querySelector('input');

    expect(input.className).toContain('form-control form-control-sm');
    expect(container).toMatchSnapshot();
  });

  test('should render lg size', () => {
    const { container } = TestHarness({ bsSize: 'lg' });
    const input = container.querySelector('input');

    expect(input.className).toContain('form-control-lg');
    expect(container).toMatchSnapshot();
  });

  test('should render disabled', () => {
    const { container } = TestHarness({ disabled: true });
    const input = container.querySelector('input');

    expect(input.disabled).toBe(true);
    expect(container).toMatchSnapshot();
  });

  test('should render readonly', () => {
    const { container } = TestHarness({ readonly: true });
    const input = container.querySelector('input');

    expect(input.readOnly).toBe(true);
    expect(container).toMatchSnapshot();
  });

  test('should render value', () => {
    const { container } = TestHarness({ value: '$1000000' });
    const input = container.querySelector('input');

    expect(input.value).toBe('$1000000');
    expect(container).toMatchSnapshot();
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const input = container.querySelector('input');

    expect(input.className).toContain('boogie');
    expect(container).toMatchSnapshot();
  });

  test('should render invalid feedback', () => {
    const { container } = TestHarness({
      invalid: true,
      feedback: 'Bad to the bone'
    });
    const feedback = container.querySelector('.invalid-feedback');

    expect(feedback.innerHTML).toBe('Bad to the bone');
    expect(container).toMatchSnapshot();
  });

  test('should render valid feedback', () => {
    const { container } = TestHarness({
      valid: true,
      feedback: 'Goody goody two shoes'
    });
    const feedback = container.querySelector('.valid-feedback');

    expect(feedback.innerHTML).toBe('Goody goody two shoes');
    expect(container).toMatchSnapshot();
  });

  test('should render an array of feedback', () => {
    const { container } = TestHarness({
      invalid: true,
      feedback: ['Aint it true', 'the sun that shines', 'you got yours', 'and you got mine']
    });
    const feedback = container.querySelectorAll('.invalid-feedback');

    expect(feedback).toHaveLength(4);
  });

  test('should not render feedback if none', () => {
    const { container } = TestHarness();

    expect(container.querySelector('.invalid-feedback')).toBeNull();
    expect(container.querySelector('.valid-feedback')).toBeNull();
  });

  test('should render max', () => {
    const { container } = TestHarness({ type: 'date', max: '07-01-1987' });
    const input = container.querySelector('input');
    expect(input.getAttribute('max')).toBe('07-01-1987');
  });

  test('should render min', () => {
    const { container } = TestHarness({ type: 'date', min: '07-01-1987' });
    const input = container.querySelector('input');
    expect(input.getAttribute('min')).toBe('07-01-1987');
  });
});
