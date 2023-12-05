import ModalHeader from './ModalHeader.svelte';
import { fireEvent, render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('ModalHeader', () => {
  test('should render correctly', () => {
    const { container } = render(ModalHeader, { children: 'Zap' });
    const component = container.querySelector('.modal-header');
    expect(component.className).toBe('modal-header');
    const title = container.querySelector('.modal-title');
    expect(title.innerHTML).toBe('Zap');
    expect(container.querySelector('button')).toBeNull();
  });

  test('should render close if toggle specified', () => {
    const toggle = vi.fn();
    const { container } = render(ModalHeader, { toggle });
    const component = container.querySelector('.modal-header');
    expect(component.className).toBe('modal-header');
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(toggle.mock.calls.length).toBe(1);
  });

  test('should render custom class', () => {
    const { container } = render(ModalHeader, { class: 'boogie' });

    const component = container.querySelector('.modal-header');
    expect(component.className).toBe('boogie modal-header');
  });
});
