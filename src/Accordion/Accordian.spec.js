import { render } from '@testing-library/svelte';
import { Accordion } from './';

const TestHarness = (props) => render(Accordion, props);

describe('Accordion', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const accordion = container.querySelector('.accordion');

    expect(accordion.className).toContain('accordion');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'squeeze' });
    const accordion = container.querySelector('.accordion');

    expect(accordion.className).toContain('squeeze');
    expect(container).toMatchSnapshot();
  });
});
