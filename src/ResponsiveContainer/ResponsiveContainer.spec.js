import { render } from '@testing-library/svelte';
import { ResponsiveContainer } from './';

const TestHarness = (props) => render(ResponsiveContainer, props);

describe('ResponsiveContainer', () => {
  test('should render correctly', () => {
    const { container } = TestHarness({ responsive: true });
    const responsivecontainer = container.querySelector('.table-responsive');

    expect(responsivecontainer.className).toContain('table-responsive');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({
      responsive: true,
      class: 'kittens'
    });
    const responsivecontainer = container.querySelector('.table-responsive');

    expect(responsivecontainer.className).toContain('kittens');
    expect(container).toMatchSnapshot();
  });

  test('should render responsive size', () => {
    const { container } = TestHarness({ responsive: 'lg' });
    const responsivecontainer = container.querySelector('.table-responsive-lg');

    expect(responsivecontainer.className).toContain('table-responsive-lg');
    expect(container).toMatchSnapshot();
  });
});
