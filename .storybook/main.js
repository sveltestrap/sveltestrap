import path from 'path';
import preprocess from 'svelte-preprocess';

const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-svelte-csf'
  ],
  framework: {
    name: '@storybook/svelte-webpack5',
    options: {
      preprocess: preprocess()
    }
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(({ loader }) => loader && loader.includes('svelte-loader'));
    svelteLoader.options.preprocess = preprocess({
      typescript: {
        tsconfigFile: './tsconfig.json',
        transpileOnly: true
      }
    });

    config.optimization = {
      minimize: true
    };

    config.resolve = {
      alias: {
        sveltestrap: path.resolve(__dirname, '../src/')
      },
      extensions: [...config.resolve.extensions, '.svelte', '.ts']
    };

    return config;
  }
};

export default config;
