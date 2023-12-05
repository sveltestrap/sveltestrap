import { render } from '@testing-library/svelte';
import { Jumbotron } from './';

const TestHarness = (props) => render(Jumbotron, props);

describe('Jumbotron', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const jumbotron = container.querySelector('.p-5');

    expect(jumbotron.className).toContain('p-5 mb-4 bg-light rounded-3');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'cafe' });
    const jumbotron = container.querySelector('.p-5');

    expect(jumbotron.className).toContain('cafe');
    expect(container).toMatchSnapshot();
  });
});
