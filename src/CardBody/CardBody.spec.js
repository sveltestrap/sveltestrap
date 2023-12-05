import { render, cleanup } from '@testing-library/svelte';
import { CardBody } from './';

beforeEach(cleanup);

const TestHarness = (props) => render(CardBody, props);

describe('CardBody', () => {
  test('should render correctly', () => {
    const { container } = TestHarness();
    const body = container.querySelector('.card-body');

    expect(body.className).toBe('card-body');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container } = TestHarness({ class: 'boogie' });
    const body = container.querySelector('.card-body');

    expect(body.className).toBe('boogie card-body');
    expect(container).toMatchSnapshot();
  });
});
