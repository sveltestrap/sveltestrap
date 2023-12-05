import { render } from '@testing-library/svelte';
import { OffcanvasBody } from './';

const TestHarness = (props) => render(OffcanvasBody, props);

describe('OffcanvasBody', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const component = container.querySelector('.offcanvas-body');

    expect(component.className).toBe('offcanvas-body');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.offcanvas-body');

    expect(component.className).toBe('boogie offcanvas-body');
    expect(container).toMatchSnapshot();
  });
});
