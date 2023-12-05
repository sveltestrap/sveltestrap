import { render } from '@testing-library/svelte';
import { Offcanvas } from './';

const TestHarness = (props) => render(Offcanvas, props);

describe('Offcanvas', () => {
  test('should render correctly', async () => {
    const { container } = TestHarness();
    const component = container.querySelector('.offcanvas');

    expect(component.className).toBe('offcanvas offcanvas-start');
    expect(component.getAttribute('aria-hidden')).toBe('true');
    expect(component.hasAttribute('aria-modal')).toBe(false);
    expect(component.hasAttribute('role')).toBe(false);
    expect(container).toMatchSnapshot();
  });

  test('should render placement correctly', () => {
    const { container } = TestHarness({ placement: 'end' });
    const component = container.querySelector('.offcanvas');

    expect(component.className).toBe('offcanvas offcanvas-end');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.offcanvas');

    expect(component.className).toBe('offcanvas offcanvas-start boogie');
    expect(container).toMatchSnapshot();
  });

  test('should render responsive variations', () => {
    const { container } = TestHarness({ sm: true });
    const component = container.querySelector('.offcanvas-sm');

    expect(component.className).toBe('offcanvas-sm offcanvas-start');
    expect(container).toMatchSnapshot();
  });

  test('should be open', () => {
    const { container } = TestHarness({ isOpen: true });
    const component = container.querySelector('.offcanvas');

    expect(component.className).toBe('offcanvas show offcanvas-start');
    expect(component.hasAttribute('aria-hidden')).toBe(false);
    expect(component.getAttribute('aria-modal')).toBe('true');
    expect(component.getAttribute('role')).toBe('dialog');
    expect(container).toMatchSnapshot();
  });
});
