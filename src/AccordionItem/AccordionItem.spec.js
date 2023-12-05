import Accordion from '../Accordion/Accordion.spec.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('AccordionItem', () => {
  test('should render correctly', () => {
    const { container } = render(Accordion);
    const accordionitem = container.querySelector('.accordion-item');
    expect(accordionitem.className).toContain('accordion-item');
  });
  test('should render custom class', () => {
    const { container } = render(Accordion);
    const accordionitem = container.querySelector('.accordion-item');
    expect(accordionitem.className).toContain('peek-a-boo');
  });
});
