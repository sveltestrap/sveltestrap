import { conditionallyUpdateScrollbar } from './utils';

describe('conditionallyUpdateScrollbar', () => {
  let scrollbarGutter;
  let spies;

  beforeAll(() => {
    const getComputedStyle = window.getComputedStyle.bind(window);

    spies = [
      // jsdom has no layout: report a 15px scrollbar on the measuring element
      vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(15),
      vi
        .spyOn(window, 'getComputedStyle')
        .mockImplementation((element, ...rest) =>
          element === document.documentElement ? { scrollbarGutter } : getComputedStyle(element, ...rest)
        )
    ];
  });

  afterEach(() => {
    document.body.style.removeProperty('padding-right');
  });

  afterAll(() => {
    spies.forEach((spy) => spy.mockRestore());
  });

  test('should pad the body by the scrollbar width', () => {
    scrollbarGutter = 'auto';
    conditionallyUpdateScrollbar();

    expect(document.body.style.paddingRight).toBe('15px');
  });

  test.each(['stable', 'stable both-edges'])('should not pad the body with scrollbar-gutter: %s', (value) => {
    scrollbarGutter = value;
    conditionallyUpdateScrollbar();

    expect(document.body.style.paddingRight).toBe('');
  });
});
