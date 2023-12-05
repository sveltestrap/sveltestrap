import { render } from '@testing-library/svelte';
import { CarouselIndicators } from './';

const TestHarness = (props) => render(CarouselIndicators, props);

describe('CarouselIndicators', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const carouselindicators = container.querySelector('.carousel-indicators');

    expect(carouselindicators.className).toContain('carousel-indicators');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'around' });
    const carouselindicators = container.querySelector('.carousel-indicators');

    expect(carouselindicators.className).toContain('around');
    expect(container).toMatchSnapshot();
  });
});
