import Icon from './Icon.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Icon', () => {
  test('should render correctly', () => {
    const { container } = render(Icon, { name: 'globe' });
    const component = container.querySelector('.bi-globe');
    expect(component.className).toBe('bi-globe');
  });

  test('should render custom class', () => {
    const { container } = render(Icon, {
      class: 'text-dark',
      name: 'book'
    });

    const component = container.querySelector('.bi-book');
    expect(component.className).toBe('text-dark bi-book');
  });
});
