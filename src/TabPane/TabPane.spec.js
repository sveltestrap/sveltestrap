import { fireEvent, render } from '@testing-library/svelte';
import { tick } from 'svelte';
import TabsActive from '../../tests/fixtures/TabsActive.svelte';

const activePane = (container) => container.querySelector('.tab-pane.active').textContent.trim();
const activeTab = (container) => container.querySelector('.nav-link.active').textContent.trim();

describe('TabPane', () => {
  test('should activate the pane marked active on mount', () => {
    const { container } = render(TabsActive, { selected: 'b' });

    expect(activePane(container)).toBe('Pane B');
    expect(activeTab(container)).toBe('Tab B');
  });

  test('should follow changes to the active prop', async () => {
    const { container, component } = render(TabsActive);
    const onTab = vi.fn();
    component.$on('tab', onTab);

    component.$set({ selected: 'c' });
    await tick();

    expect(activePane(container)).toBe('Pane C');
    expect(activeTab(container)).toBe('Tab C');
    expect(container.querySelectorAll('.tab-pane.active')).toHaveLength(1);
    expect(onTab).toHaveBeenCalledTimes(1);
    expect(onTab.mock.calls[0][0].detail).toBe('c');
  });

  test('should still switch on click while another pane has active set', async () => {
    const { container, getByText } = render(TabsActive, { selected: 'a' });

    await fireEvent.click(getByText('Tab B'));

    expect(activePane(container)).toBe('Pane B');
    expect(activeTab(container)).toBe('Tab B');
  });
});
