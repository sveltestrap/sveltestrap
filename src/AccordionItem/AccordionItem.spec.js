import { render } from '@testing-library/svelte';
import Accordion from '../Accordion/Accordion.spec.svelte';

const TestHarness = (props) => render(Accordion, props);

describe('AccordionItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const item = container.querySelector('.accordion-item');

    expect(item.className).toContain('accordion-item');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness();
    const item = container.querySelector('.accordion-item');

    expect(item.className).toContain('peek-a-boo');
    expect(container).toMatchSnapshot();
  });
});
