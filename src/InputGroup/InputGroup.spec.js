import { render } from '@testing-library/svelte';
import { InputGroup } from './';

const TestHarness = (props) => render(InputGroup, props);

describe('InputGroup', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const inputgroup = container.querySelector('.input-group');

    expect(inputgroup.className).toContain('input-group');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'many' });
    const inputgroup = container.querySelector('.input-group');

    expect(inputgroup.className).toContain('many');
    expect(container).toMatchSnapshot();
  });
});
