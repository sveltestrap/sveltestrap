import { render } from '@testing-library/svelte';
import { FormGroup } from './';

const TestHarness = (props) => render(FormGroup, props);

describe('FormGroup', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const group = container.querySelector('.mb-3');

    expect(group.className).toContain('mb-3');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'paint' });
    const group = container.querySelector('.mb-3');

    expect(group.className).toContain('paint');
    expect(container).toMatchSnapshot();
  });
});
