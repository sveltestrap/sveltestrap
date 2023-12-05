import { render } from '@testing-library/svelte';
import { ModalFooter } from './';

const TestHarness = (props) => render(ModalFooter, props);

describe('ModalFooter', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const component = container.querySelector('.modal-footer');

    expect(component.className).toBe('modal-footer');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.modal-footer');

    expect(component.className).toBe('boogie modal-footer');
    expect(container).toMatchSnapshot();
  });
});
