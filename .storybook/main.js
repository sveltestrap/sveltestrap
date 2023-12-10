import { mergeConfig } from 'vite';
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
    '@storybook/addon-svelte-csf',
    '@storybook/addon-mdx-gfm'
  ],
  core: {
    builder: {
      name: '@storybook/builder-vite'
    }
  },
  framework: {
    name: '@storybook/svelte-vite',
    options: {
      preprocess: preprocess({
        typescript: {
          tsconfigFile: './tsconfig.json',
          transpileOnly: true
        }
      })
    }
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      define: {
        'process.env.NODE_ENV': JSON.stringify(
          configType === 'DEVELOPMENT' ? 'development' : 'production'
        )
      },
      resolve: {
        alias: {
          sveltestrap: path.resolve(__dirname, '../src/')
        }
      }
    });
  }
};

export default config;
