import Accordion from './Accordion.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Accordion', () => {
  test('should render correctly', () => {
    const { container } = render(Accordion);
    const accordion = container.querySelector('.accordion');
    expect(accordion.className).toContain('accordion');
    expect(container).toMatchSnapshot();
  });
  test('should render custom class', () => {
    const { container } = render(Accordion, { class: 'squeeze' });
    const accordion = container.querySelector('.accordion');
    expect(accordion.className).toContain('squeeze');
    expect(container).toMatchSnapshot();
  });
});
