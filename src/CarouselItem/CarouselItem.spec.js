import { render } from '@testing-library/svelte';
import { CarouselItem } from './';

const TestHarness = (props) => render(CarouselItem, props);

describe('CarouselItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const item = container.querySelector('.carousel-item');

    expect(item.className).toContain('carousel-item');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'cocoa' });
    const item = container.querySelector('.carousel-item');

    expect(item.className).toContain('cocoa');
    expect(container).toMatchSnapshot();
  });
});
