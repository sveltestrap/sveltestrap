import { render } from '@testing-library/svelte';
import { Figure } from './';

const TestHarness = (props) => render(Figure, props);

describe('Figure', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const figure = container.querySelector('figure');

    expect(figure.className).toBe('figure');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const figure = container.querySelector('figure');

    expect(figure.className).toBe('figure boogie');
    expect(container).toMatchSnapshot();
  });

  test('should render caption', () => {
    const { container } = TestHarness({
      caption: 'I want to put on my my my my my boogie shoes'
    });
    const figure = container.querySelector('figure > figcaption');

    expect(figure.className).toBe('figure-caption');
    expect(figure.textContent).toBe('I want to put on my my my my my boogie shoes');
    expect(container).toMatchSnapshot();
  });
});
