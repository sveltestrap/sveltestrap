import { fireEvent, render } from '@testing-library/svelte';
import { OffcanvasHeader } from './';

const TestHarness = (props) => render(OffcanvasHeader, props);

describe('OffcanvasHeader', () => {
  test('should render correctly', () => {
    const { container } = TestHarness({ content: 'Zap' });
    const component = container.querySelector('.offcanvas-header');

    expect(component.className).toBe('offcanvas-header');

    const title = container.querySelector('.offcanvas-title');

    expect(title.innerHTML).toBe('Zap');
    expect(container.querySelector('button')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should render close if toggle specified', () => {
    const toggle = vi.fn();
    const { container } = TestHarness({ toggle });
    const component = container.querySelector('.offcanvas-header');

    expect(component.className).toBe('offcanvas-header');

    const button = container.querySelector('button');
    fireEvent.click(button);

    expect(toggle.mock.calls.length).toBe(1);
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.offcanvas-header');

    expect(component.className).toBe('boogie offcanvas-header');
    expect(container).toMatchSnapshot();
  });
});
