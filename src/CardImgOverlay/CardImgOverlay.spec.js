import { render } from '@testing-library/svelte';
import { CardImgOverlay } from './';

const TestHarness = (props) => render(CardImgOverlay, props);

describe('CardImgOverlay', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const component = container.querySelector('.card-img-overlay');

    expect(component.className).toBe('card-img-overlay');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.card-img-overlay');

    expect(component.className).toBe('boogie card-img-overlay');
    expect(container).toMatchSnapshot();
  });
});
