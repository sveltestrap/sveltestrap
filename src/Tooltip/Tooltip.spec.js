import { render } from '@testing-library/svelte';
import { Button } from '../Button';
import { Tooltip } from './';

const renderTooltip = (props) => {
  const { container } = render(Tooltip, { props });
  return container;
};
const renderButton = (props) => {
  const { container } = render(Button, { props });
  container.id = 'btn';
  return container;
};

beforeEach(() => {
  renderButton({ content: 'Hello' });
});

const TOOLTIP_POSTION_CLASS = {
  top: 'bs-tooltip-top',
  bottom: 'bs-tooltip-bottom',
  left: 'bs-tooltip-start',
  right: 'bs-tooltip-end'
};

describe('Tooltip', () => {
  it('should render text and default placement(top)', () => {
    const containerTooltip = renderTooltip({
      content: 'Hello world!',
      target: 'btn',
      isOpen: true
    });
    const tooltip = containerTooltip.querySelector('.tooltip');
    const tooltipInner = containerTooltip.querySelector('.tooltip-inner');

    expect(tooltip.className.includes(TOOLTIP_POSTION_CLASS.top)).toBeTruthy();
    expect(tooltipInner.innerHTML).toBe('Hello world!');
  });

  it('should render text and left placement', () => {
    const containerTooltip = renderTooltip({
      content: 'Hello world!',
      placement: 'left',
      target: 'btn',
      isOpen: true
    });
    const tooltip = containerTooltip.querySelector('.tooltip');
    const tooltipInner = containerTooltip.querySelector('.tooltip-inner');

    expect(tooltip.className.includes(TOOLTIP_POSTION_CLASS.left)).toBeTruthy();
    expect(tooltipInner.innerHTML).toBe('Hello world!');
  });

  it('should throw error when there is no target', () => {
    try {
      renderTooltip();
    } catch (error) {
      expect(error.message).toBe('Need target!');
    }
  });
});
