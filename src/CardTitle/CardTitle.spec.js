import { render } from '@testing-library/svelte';
import { CardTitle } from './';

const TestHarness = (props) => render(CardTitle, props);

describe('CardTitle', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const title = container.querySelector('.card-title');

    expect(title.className).toBe('card-title');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const title = container.querySelector('.card-title');

    expect(title.className).toBe('boogie card-title');
    expect(container).toMatchSnapshot();
  });
});
