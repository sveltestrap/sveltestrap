import { render } from '@testing-library/svelte';
import { CardColumns } from './';

const TestHarness = (props) => render(CardColumns, props);

describe('CardColumns', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const columns = container.querySelector('.card-columns');

    expect(columns.className).toBe('card-columns');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const columns = container.querySelector('.card-columns');

    expect(columns.className).toBe('boogie card-columns');
    expect(container).toMatchSnapshot();
  });
});
