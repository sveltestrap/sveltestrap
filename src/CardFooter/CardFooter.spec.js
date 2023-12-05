import { render } from '@testing-library/svelte';
import { CardFooter } from './';

const TestHarness = (props) => render(CardFooter, props);

describe('CardFooter', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const footer = container.querySelector('.card-footer');

    expect(footer.className).toBe('card-footer');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const footer = container.querySelector('.card-footer');

    expect(footer.className).toBe('boogie card-footer');
    expect(container).toMatchSnapshot();
  });
});
