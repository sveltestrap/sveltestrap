import { render } from '@testing-library/svelte';
import { ListGroupItem } from './';

const TestHarness = (props) => render(ListGroupItem, props);

describe('ListGroupItem', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const item = container.querySelector('li.list-group-item');

    expect(item.className).toBe('list-group-item');
    expect(container).toMatchSnapshot();
  });

  test('should render action', () => {
    const { container } = TestHarness({ action: true });
    const item = container.querySelector('.list-group-item');

    expect(item.className).toBe('list-group-item list-group-item-action');
    expect(container).toMatchSnapshot();
  });

  test('should render action if button', () => {
    const { container } = TestHarness({ tag: 'button' });
    const item = container.querySelector('button.list-group-item');

    expect(item.className).toBe('list-group-item list-group-item-action');
    expect(container).toMatchSnapshot();
  });

  test('should render a if href', () => {
    const { container } = TestHarness({ href: 'http://www.example.com' });
    const item = container.querySelector('a.list-group-item');

    expect(item.className).toBe('list-group-item');
    expect(container).toMatchSnapshot();
  });

  test('should render color', () => {
    const { container } = TestHarness({ color: 'primary' });
    const item = container.querySelector('.list-group-item');

    expect(item.className).toBe('list-group-item list-group-item-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const item = container.querySelector('.list-group-item');

    expect(item.className).toBe('boogie list-group-item');
    expect(container).toMatchSnapshot();
  });
});
