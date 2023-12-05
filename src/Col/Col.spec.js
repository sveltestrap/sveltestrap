import { render } from '@testing-library/svelte';
import { Col } from './';

const TestHarness = (props) => render(Col, props);

describe('Col', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const col = container.querySelector('.col');

    expect(col.className).toBe('col');
    expect(container).toMatchSnapshot();
  });

  test('should render correct sizes', () => {
    const { container } = TestHarness({
      class: 'test',
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    });
    const col = container.querySelector('.test');

    expect(col.className).toBe('col-1 col-sm-2 col-md-3 col-lg-4 col-xl-5 test');
    expect(container).toMatchSnapshot();
  });

  test('should render correct sizes with objects', () => {
    const { container } = TestHarness({
      class: 'test',
      md: {
        size: 1,
        pull: 2,
        push: 3,
        offset: 4
      }
    });

    const col = container.querySelector('.test');

    expect(col.className).toBe('col-md-1 push-md-3 pull-md-2 offset-md-4 test');
    expect(container).toMatchSnapshot();
  });

  test('should render correct order number with objects', () => {
    const { container } = TestHarness({
      class: 'test',
      md: {
        size: 1,
        pull: 2,
        push: 3,
        offset: 4,
        order: 1
      }
    });
    const col = container.querySelector('.test');

    expect(col.className).toBe('col-md-1 push-md-3 pull-md-2 offset-md-4 order-md-1 test');
    expect(container).toMatchSnapshot();
  });

  test('should render correct order string with objects', () => {
    const { container } = TestHarness({
      class: 'test',
      md: {
        size: 1,
        pull: 2,
        push: 3,
        offset: 4,
        order: 'first'
      }
    });
    const col = container.querySelector('.test');

    expect(col.className).toBe('col-md-1 push-md-3 pull-md-2 offset-md-4 order-md-first test');
    expect(container).toMatchSnapshot();
  });
});
