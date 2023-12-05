import { render } from '@testing-library/svelte';
import { ButtonToolbar } from './';

const TestHarness = (props) => render(ButtonToolbar, props);

describe('ButtonToolbar', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const toolbar = container.querySelector('.btn-toolbar');

    expect(toolbar.className).toBe('btn-toolbar');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const toolbar = container.querySelector('.btn-toolbar');

    expect(toolbar.className).toBe('boogie btn-toolbar');
    expect(container).toMatchSnapshot();
  });
});
