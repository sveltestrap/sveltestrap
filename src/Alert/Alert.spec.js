import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/svelte';
import { Alert } from './';

const TestHarness = (props) => render(Alert, props);

describe('Alert', () => {
  test('should render with default color and text', () => {
    const { container, queryByRole } = TestHarness({ content: 'Hello world!' });
    const alert = queryByRole('alert');

    expect(alert.innerHTML.trim()).toBe('Hello world!');
    expect(alert.className).toBe('alert alert-success');
    expect(container).toMatchSnapshot();
  });

  test('should render specified color', () => {
    const { container, queryByRole } = TestHarness({
      color: 'primary',
      content: 'Hello world!'
    });

    const alert = queryByRole('alert');

    expect(alert.className).toBe('alert alert-primary');
    expect(container).toMatchSnapshot();
  });

  test('should render alert heading', () => {
    const { container } = TestHarness({
      heading: 'Hello world!'
    });

    const heading = container.querySelector('.alert-heading');

    expect(heading.textContent).toBe('Hello world!');
    expect(container).toMatchSnapshot();
  });

  test('should render custom class', () => {
    const { container, queryByRole } = TestHarness({
      color: 'danger',
      content: 'Hello world!',
      class: 'boogie'
    });

    const alert = queryByRole('alert');

    expect(alert.className).toBe('boogie alert alert-danger');
    expect(container).toMatchSnapshot();
  });

  test('should render dismissible alert', async () => {
    const { container, queryByRole, queryByLabelText } = TestHarness({
      color: 'info',
      content: 'I can be dismissed!',
      dismissible: true
    });

    const alert = queryByRole('alert');
    const closeBtn = queryByLabelText('Close');

    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe('alert alert-info alert-dismissible');
    expect(closeBtn).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    fireEvent.click(closeBtn);

    await waitForElementToBeRemoved(alert, { timeout: 10000 });

    expect(alert).not.toBeInTheDocument();
    expect(closeBtn).not.toBeInTheDocument();
  });

  test('should render a controlled alert', async () => {
    let isOpen = true;

    const toggle = vi.fn(() => {
      isOpen = false;
    });

    const { rerender, queryByRole, queryByLabelText } = TestHarness({
      color: 'info',
      content: 'I can be dismissed!',
      isOpen,
      toggle
    });

    const alert = queryByRole('alert');
    const closeBtn = queryByLabelText('Close');

    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe('alert alert-info alert-dismissible');
    expect(closeBtn).toBeInTheDocument();

    await fireEvent.click(closeBtn);

    expect(isOpen).toBe(false);
    expect(toggle).toHaveBeenCalledTimes(1);

    await rerender({ isOpen, toggle });

    expect(alert).not.toBeInTheDocument();
  });

  test('should render alert without fade', async () => {
    const { queryByRole, queryByLabelText } = TestHarness({
      color: 'info',
      content: 'I can be dismissed!',
      dismissible: true,
      fade: false
    });

    const alert = queryByRole('alert');
    const closeBtn = queryByLabelText('Close');

    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe('alert alert-info alert-dismissible');
    expect(closeBtn).toBeInTheDocument();

    await fireEvent.click(closeBtn);

    await waitForElementToBeRemoved(alert, { timeout: 10000 });

    expect(alert).not.toBeInTheDocument();
    expect(closeBtn).not.toBeInTheDocument();
  });

  test('should render themed alert', async () => {
    const { container, queryByRole } = TestHarness({
      color: 'info',
      content: 'I can be dismissed!',
      dismissible: true,
      fade: false,
      theme: 'light'
    });

    const alert = queryByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe('alert alert-info alert-dismissible');
    expect(alert.dataset.bsTheme).toBe('light');
    expect(container).toMatchSnapshot();
  });
});
