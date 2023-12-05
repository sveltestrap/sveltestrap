import Offcanvas from './Offcanvas.svelte';
import { render, cleanup, waitFor } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Offcanvas', () => {
  test('should render correctly', async () => {
    const { container } = render(Offcanvas);
    const component = container.querySelector('.offcanvas');
    expect(component.className).toBe('offcanvas offcanvas-start');
    expect(component.getAttribute('aria-hidden')).toBe('true');
    expect(component.hasAttribute('aria-modal')).toBe(false);
    expect(component.hasAttribute('role')).toBe(false);
  });

  test('should render placement correctly', () => {
    const { container } = render(Offcanvas, { placement: 'end' });
    const component = container.querySelector('.offcanvas');
    expect(component.className).toBe('offcanvas offcanvas-end');
  });

  test('should render custom class', () => {
    const { container } = render(Offcanvas, { class: 'boogie' });

    const component = container.querySelector('.offcanvas');
    expect(component.className).toBe('offcanvas offcanvas-start boogie');
  });

  test('should render responsive variations', () => {
    let { container } = render(Offcanvas, { sm: true });
    const component = container.querySelector('.offcanvas-sm');
    expect(component.className).toBe('offcanvas-sm offcanvas-start');
  });

  test('should be open', () => {
    const { container } = render(Offcanvas, { isOpen: true });
    const component = container.querySelector('.offcanvas');
    expect(component.className).toBe('offcanvas show offcanvas-start');
    expect(component.hasAttribute('aria-hidden')).toBe(false);
    expect(component.getAttribute('aria-modal')).toBe('true');
    expect(component.getAttribute('role')).toBe('dialog');
  });
});
