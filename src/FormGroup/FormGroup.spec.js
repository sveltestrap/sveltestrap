import { render } from '@testing-library/svelte';
import { FormGroup } from './';

const TestHarness = (props) => render(FormGroup, props);

describe('FormGroup', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'paint' });
    expect(container).toMatchSnapshot();
  });
});
