import { render } from '@testing-library/svelte';
import { Icon } from './';

const TestHarness = (props) => render(Icon, props);

describe('Icon', () => {
  test('should render correctly', () => {
    const { container } = TestHarness({ name: 'globe' });
    const component = container.querySelector('.bi-globe');

    expect(component.className).toBe('bi-globe');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({
      class: 'text-dark',
      name: 'book'
    });
    const component = container.querySelector('.bi-book');

    expect(component.className).toBe('text-dark bi-book');
    expect(container).toMatchSnapshot();
  });
});
