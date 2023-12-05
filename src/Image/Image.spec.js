import { render } from '@testing-library/svelte';
import { Image } from './';

const TestHarness = (props) => render(Image, props);

describe('Image', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const image = container.querySelector('img');

    expect(image).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  test('should be figure', () => {
    const { container } = TestHarness({ figure: true });
    const image = container.querySelector('img');

    expect(image.className).toBe('figure-img');
    expect(container).toMatchSnapshot();
  });

  test('should be fluid', () => {
    const { container } = TestHarness({ fluid: true });
    const image = container.querySelector('img');

    expect(image.className).toBe('img-fluid');
    expect(container).toMatchSnapshot();
  });

  test('should be thumbnail', () => {
    const { container } = TestHarness({ thumbnail: true });
    const image = container.querySelector('img');

    expect(image.className).toBe('img-thumbnail');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const image = container.querySelector('img');

    expect(image.className).toBe('boogie');
    expect(container).toMatchSnapshot();
  });

  test.todo('should render correctly inside Figure'); // TODO when slots/context easier to test
});
