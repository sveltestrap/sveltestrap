import { render } from '@testing-library/svelte';
import { CardLink } from './';

const TestHarness = (props) => render(CardLink, props);

describe('CardLink', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const component = container.querySelector('.card-link');

    expect(component.className).toBe('card-link');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const component = container.querySelector('.card-link');

    expect(component.className).toBe('boogie card-link');
    expect(container).toMatchSnapshot();
  });

  test('should render link with href', () => {
    const { container } = TestHarness({ href: 'http://example.com/' });
    const link = container.querySelector('a');

    expect(link.href).toBe('http://example.com/');
    expect(container).toMatchSnapshot();
  });
});
