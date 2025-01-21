import { render } from '@testing-library/svelte';
import { Button } from '../Button';
import { Popover } from './';

const renderButton = (props) => {
  const { container } = render(Button, { props });
  container.id = 'btn';
  return container;
};

const renderPopover = (props) => {
  const { container } = render(Popover, { props });
  return container;
};

const POPOVER_POSITION_CLASS = {
  top: 'bs-popover-top',
  bottom: 'bs-popover-bottom',
  left: 'bs-popover-start',
  right: 'bs-popover-end',
  auto: 'bs-popover-auto'
};

beforeEach(() => {
  renderButton({ content: 'Hello BTN' });
});

describe('Popover test', () => {
  it('should render text and default placement(top)', () => {
    const containerPopover = renderPopover({
      content: 'Hello',
      target: 'btn',
      isOpen: true
    });
    const popover = containerPopover.querySelector('.popover');
    const popoverContent = containerPopover.querySelector('.popover .popover-body');
    expect(popover.className.includes(POPOVER_POSITION_CLASS.top)).toBeTruthy();
    expect(popoverContent.innerHTML).toBe('Hello');
    expect(popover).toMatchSnapshot();
  });

  it('should render text and left placement', () => {
    const containerPopover = renderPopover({
      content: 'Hello',
      target: 'btn',
      placement: 'left',
      isOpen: true
    });
    const popover = containerPopover.querySelector('.popover');
    const popoverContent = containerPopover.querySelector('.popover .popover-body');
    expect(popover.className.includes(POPOVER_POSITION_CLASS.left)).toBeTruthy();
    expect(popoverContent.innerHTML).toBe('Hello');
    expect(popover).toMatchSnapshot();
  });

  it('should render text and auto placement', () => {
    const containerPopover = renderPopover({
      content: 'Hello',
      target: 'btn',
      placement: 'auto',
      isOpen: true
    });
    const popover = containerPopover.querySelector('.popover');
    const popoverContent = containerPopover.querySelector('.popover .popover-body');
    expect(popover.className.includes(POPOVER_POSITION_CLASS.auto)).toBeTruthy();
    expect(popoverContent.innerHTML).toBe('Hello');
    expect(popover).toMatchSnapshot();
  });

  it('should throw error when there is no target', () => {
    try {
      renderPopover();
    } catch (error) {
      expect(error.message).toBe('Need target!');
    }
  });
});
