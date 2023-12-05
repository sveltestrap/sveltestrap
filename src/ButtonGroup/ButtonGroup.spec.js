import { render } from '@testing-library/svelte';
import { ButtonGroup } from './';

const TestHarness = (props) => render(ButtonGroup, props);

describe('ButtonGroup', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const group = container.querySelector('.btn-group');

    expect(group.className).toBe('btn-group');
    expect(container).toMatchSnapshot();
  });

  test('should render specified size', () => {
    const { container } = TestHarness({ size: 'sm' });
    const group = container.querySelector('.btn-group');

    expect(group.className).toBe('btn-group-sm btn-group');
    expect(container).toMatchSnapshot();
  });

  test('should render vertical', () => {
    const { container } = TestHarness({ vertical: true });
    const group = container.querySelector('.btn-group-vertical');

    expect(group.className).toBe('btn-group-vertical');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const group = container.querySelector('.btn-group');

    expect(group.className).toBe('boogie btn-group');
    expect(container).toMatchSnapshot();
  });
});
