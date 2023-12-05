import Accordion from '../Accordion/Accordion.spec.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('AccordionHeader', () => {
  test('should render correctly', () => {
    const { container } = render(Accordion);
    const accordionheader = container.querySelector('.accordion-header');
    expect(accordionheader.className).toContain('accordion-header');
    expect(accordionheader.textContent).toContain('Header!');
  });
});
