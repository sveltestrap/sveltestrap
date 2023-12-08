import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme,
  showToolbar: false,
  isFullscreen: false,
  toolbar: {
    hidden: true
  },
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.id.indexOf('--docs') > -1
      }
    }
  }
});
