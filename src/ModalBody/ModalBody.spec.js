import { render } from '@testing-library/svelte';
import { ModalBody } from './';

const TestHarness = (props) => render(ModalBody, props);

describe('ModalBody', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const body = container.querySelector('.modal-body');

    expect(body.className).toBe('modal-body');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const body = container.querySelector('.modal-body');

    expect(body.className).toBe('boogie modal-body');
    expect(container).toMatchSnapshot();
  });
});
