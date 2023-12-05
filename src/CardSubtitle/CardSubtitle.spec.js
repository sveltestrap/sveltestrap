import { render } from '@testing-library/svelte';
import { CardSubtitle } from './';

const TestHarness = (props) => render(CardSubtitle, props);

describe('CardSubtitle', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const subtitle = container.querySelector('.card-subtitle');

    expect(subtitle.className).toBe('card-subtitle');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const subtitle = container.querySelector('.card-subtitle');

    expect(subtitle.className).toBe('boogie card-subtitle');
    expect(container).toMatchSnapshot();
  });
});
