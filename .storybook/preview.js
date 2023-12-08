import './storybook.css';
import theme from './theme';

export const parameters = {
  actions: {
    argTypesRegex: '^on.*'
  },
  options: {
    storySort: {
      method: 'alphabetical'
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
};
