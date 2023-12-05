import { render } from '@testing-library/svelte';
import { CardText } from './';

const TestHarness = (props) => render(CardText, props);

describe('CardText', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const text = container.querySelector('.card-text');

    expect(text.className).toBe('card-text');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const text = container.querySelector('.card-text');

    expect(text.className).toBe('boogie card-text');
    expect(container).toMatchSnapshot();
  });
});
