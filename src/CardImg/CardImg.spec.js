import { render } from '@testing-library/svelte';
import { CardImg } from './';

const TestHarness = (props) =>
  render(CardImg, {
    src: 'http://example.com/example.png',
    ...props
  });

describe('CardImg', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const image = container.querySelector('.card-img');

    expect(image.className).toBe('card-img');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const image = container.querySelector('.card-img');

    expect(image.className).toBe('boogie card-img');
    expect(container).toMatchSnapshot();
  });

  test('should render prop top', () => {
    const { container } = TestHarness({ top: true });
    const image = container.querySelector('.card-img-top');

    expect(image.className).toContain('card-img-top');
    expect(container).toMatchSnapshot();
  });

  test('should render prop bottom', () => {
    const { container } = TestHarness({ bottom: true });
    const image = container.querySelector('.card-img-bottom');

    expect(image.className).toContain('card-img-bottom');
    expect(container).toMatchSnapshot();
  });

  test('should render src', () => {
    const { container, getByAltText } = TestHarness({
      src: 'http://example.com/example.png',
      alt: 'perfect picture'
    });
    const image = getByAltText('perfect picture');

    expect(image.src).toBe('http://example.com/example.png');
    expect(container).toMatchSnapshot();
  });
});
