import { render } from '@testing-library/svelte';
import { Card } from './';

const TestHarness = (props) => render(Card, props);

describe('Card', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const card = container.querySelector('.card');

    expect(card.className).toBe('card');
    expect(container).toMatchSnapshot();
  });

  test('should render props', () => {
    const { container } = TestHarness({
      inverse: true,
      body: true,
      color: 'primary'
    });
    const card = container.querySelector('.card');

    expect(card.className).toContain('text-white');
    expect(card.className).toContain('card-body');
    expect(card.className).toContain('bg-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const card = container.querySelector('.card');

    expect(card.className).toBe('boogie card');
    expect(container).toMatchSnapshot();
  });
});
