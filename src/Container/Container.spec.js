import { render } from '@testing-library/svelte';
import { Container } from './';

const TestHarness = (props) => render(Container, props);

describe('Container', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const component = container.querySelector('.container');

    expect(component.className).toBe('container');
    expect(container).toMatchSnapshot();
  });

  test('should render fluid', () => {
    const { container } = TestHarness({ fluid: true });
    const component = container.querySelector('.container-fluid');

    expect(component.className).toBe('container-fluid');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.container');

    expect(component.className).toBe('boogie container');
    expect(container).toMatchSnapshot();
  });
});
