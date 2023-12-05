import { render } from '@testing-library/svelte';
import { CardDeck } from './';

const TestHarness = (props) => render(CardDeck, props);

describe('CardDeck', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const deck = container.querySelector('.card-deck');

    expect(deck.className).toBe('card-deck');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const deck = container.querySelector('.card-deck');

    expect(deck.className).toBe('boogie card-deck');
    expect(container).toMatchSnapshot();
  });
});
