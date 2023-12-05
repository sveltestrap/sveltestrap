import { render } from '@testing-library/svelte';
import Accordion from '../Accordion/Accordion.spec.svelte';

const TestHarness = (props) => render(Accordion, props);

describe('AccordionHeader', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const header = container.querySelector('.accordion-header');

    expect(header.className).toContain('accordion-header');
    expect(header.textContent).toContain('Header!');
    expect(container).toMatchSnapshot();
  });
});
