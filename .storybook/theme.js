import { create } from '@storybook/theming';
import packageJSON from '../package.json';

export default create({
  base: 'dark',
  brandUrl: 'https://github.com/sveltestrap/sveltestrap',
  brandTitle: `<span class="d-flex align-items-center justify-content-center" style="display: flex; align-items: center; color: #ae81ff; font-weight: 400; letter-spacing: 0.1rem;">
      <img src="https://avatars.githubusercontent.com/u/152808666?s=200&v=4" height="32" />
      <div style="position: relative;">
        SVELTESTRAP
        <small style="position: absolute; right: -38px; top: 0;">${packageJSON.version}</small>
      </div>
    </span>`,
  fontBase: 'Rubik, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: "'ui-monospace', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Courier New', monospace",
  colorSecondary: '#0087ff',
  appBg: '#1c2128',
  appContentBg: '#202833',
  appPreviewBg: '#202833',
  appBorderColor: '#0c2128',
  textColor: '#d0d0d0'
});
