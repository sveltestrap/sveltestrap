import { render } from '@testing-library/svelte';
import { CarouselCaption } from './';

const TestHarness = (props) => render(CarouselCaption, props);

describe('CarouselCaption', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const caption = container.querySelector('.carousel-caption');

    expect(caption.className).toContain('carousel-caption');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'horse' });
    const caption = container.querySelector('.carousel-caption');

    expect(caption.className).toContain('horse');
    expect(container).toMatchSnapshot();
  });
});
