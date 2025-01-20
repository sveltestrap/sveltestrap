import { fireEvent, render } from '@testing-library/svelte';
import { ModalHeader } from './';

const TestHarness = (props) => render(ModalHeader, props);

describe('ModalHeader', () => {
  test('should render correctly', () => {
    const { container } = TestHarness({ content: 'Zap' });
    const component = container.querySelector('.modal-header');

    expect(component.className).toBe('modal-header');

    const title = container.querySelector('.modal-title');

    expect(title.innerHTML).toBe('Zap');
    expect(container.querySelector('button')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should render close if toggle specified', () => {
    const toggle = vi.fn();
    const { container } = TestHarness({ toggle });
    const component = container.querySelector('.modal-header');

    expect(component.className).toBe('modal-header');

    const button = container.querySelector('button');
    fireEvent.click(button);

    expect(toggle.mock.calls.length).toBe(1);
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.modal-header');

    expect(component.className).toBe('boogie modal-header');
    expect(container).toMatchSnapshot();
  });
});
