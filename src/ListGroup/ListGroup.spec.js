import { render } from '@testing-library/svelte';
import { ListGroup } from './';

const TestHarness = (props) => render(ListGroup, props);

describe('ListGroup', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const group = container.querySelector('ul.list-group');

    expect(group.className).toBe('list-group');
    expect(container).toMatchSnapshot();
  });

  test('should render flush', () => {
    const { container } = TestHarness({ flush: true });
    const group = container.querySelector('.list-group');

    expect(group.className).toBe('list-group list-group-flush');
    expect(container).toMatchSnapshot();
  });

  test('should render horizontal', () => {
    const { container } = TestHarness({ horizontal: true });
    const group = container.querySelector('.list-group');

    expect(group.className).toBe('list-group list-group-horizontal');
    expect(container).toMatchSnapshot();
  });

  test('should render numbered', () => {
    const { container } = TestHarness({ numbered: true });
    const group = container.querySelector('ol.list-group');

    expect(group.className).toBe('list-group list-group-numbered');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const group = container.querySelector('.list-group');

    expect(group.className).toBe('boogie list-group');
    expect(container).toMatchSnapshot();
  });
});
