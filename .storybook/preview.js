import './storybook.css';
import theme from './theme';

export default {
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Sveltestrap', 'Layout', 'Content', 'Form', 'Components'],
      }
    },
    grid: false,
    docs: {
      theme,
      inlineStories: true
    },
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};
