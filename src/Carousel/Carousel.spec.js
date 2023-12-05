import { render } from '@testing-library/svelte';
import { Carousel } from './';

const TestHarness = (props) => render(Carousel, props);

describe('Carousel', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const carousel = container.querySelector('.carousel');

    expect(carousel.className).toContain('carousel');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'squeeze' });
    const carousel = container.querySelector('.carousel');

    expect(carousel.className).toContain('squeeze');
    expect(container).toMatchSnapshot();
  });
});
