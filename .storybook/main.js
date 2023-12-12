import path from 'path';
import preprocess from 'svelte-preprocess';

export default {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-svelte-csf'
  ],
  core: {
     builder: {
      name: 'webpack5',
       options: {
        lazyCompilation: true
      }
    }
  },
  framework: {
    name: '@storybook/svelte-webpack5',
    options: {
      preprocess: preprocess({
        tsconfigFile: './tsconfig.json',
        transpileOnly: true
      }),
      onwarn: (warning, handler) => {
        if (
          warning.code === 'a11y-missing-content' ||
          warning.code === 'a11y-no-noninteractive-tabindex' ||
          warning.code === 'a11y-click-events-have-key-events' ||
          warning.code === 'a11y-no-static-element-interactions'
        ) {
          return;
        }

        handler(warning);
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config, { configType }) => {
    config.optimization = {
      minimize: configType === 'PRODUCTION'
    };

    config.resolve = {
      alias: {
        '@sveltestrap/sveltestrap': path.resolve(__dirname, '../src/')
      },
      extensions: [...config.resolve.extensions, '.svelte', '.ts']
    };

    return config;
  }
};
