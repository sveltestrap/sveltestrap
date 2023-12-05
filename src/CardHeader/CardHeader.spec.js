import { render } from '@testing-library/svelte';
import { CardHeader } from './';

const TestHarness = (props) => render(CardHeader, props);

describe('CardHeader', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const header = container.querySelector('.card-header');

    expect(header.className).toBe('card-header');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const header = container.querySelector('.card-header');

    expect(header.className).toBe('boogie card-header');
  });
});
