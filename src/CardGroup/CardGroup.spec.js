import { render } from '@testing-library/svelte';
import { CardGroup } from './';

const TestHarness = (props) => render(CardGroup, props);

describe('CardGroup', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const group = container.querySelector('.card-group');

    expect(group.className).toBe('card-group');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const group = container.querySelector('.card-group');

    expect(group.className).toBe('boogie card-group');
    expect(container).toMatchSnapshot();
  });
});
