import OffcanvasHeader from './OffcanvasHeader.svelte';
import { fireEvent, render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('OffcanvasHeader', () => {
  test('should render correctly', () => {
    const { container } = render(OffcanvasHeader, {
      children: 'Zap'
    });
    const component = container.querySelector('.offcanvas-header');
    expect(component.className).toBe('offcanvas-header');
    const title = container.querySelector('.offcanvas-title');
    expect(title.innerHTML).toBe('Zap');
    expect(container.querySelector('button')).toBeNull();
  });

  test('should render close if toggle specified', () => {
    const toggle = vi.fn();
    const { container } = render(OffcanvasHeader, { toggle });
    const component = container.querySelector('.offcanvas-header');
    expect(component.className).toBe('offcanvas-header');
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(toggle.mock.calls.length).toBe(1);
  });

  test('should render custom class', () => {
    const { container } = render(OffcanvasHeader, {
      class: 'boogie'
    });

    const component = container.querySelector('.offcanvas-header');
    expect(component.className).toBe('boogie offcanvas-header');
  });
});
