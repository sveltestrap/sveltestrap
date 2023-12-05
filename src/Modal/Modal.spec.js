import { render, fireEvent } from '@testing-library/svelte';
import { Modal } from './';

const TestHarness = (props) => render(Modal, props);

describe('Modal', () => {
  test.skip('should close when escape is pressed', async () => {
    const toggle = vi.fn();
    const { component } = TestHarness({ toggle, isOpen: true });
    await new Promise((resolve) => component.$on('open', resolve));
    await fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle).toHaveBeenCalled();
  });

  test.skip('should not reopen when escape is pressed twice', async () => {
    const toggle = vi.fn();
    const { component } = TestHarness({ toggle, isOpen: true });
    await new Promise((resolve) => component.$on('open', resolve));
    await Promise.all([fireEvent.keyDown(document, { key: 'Escape' }), fireEvent.keyDown(document, { key: 'Escape' })]);
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
