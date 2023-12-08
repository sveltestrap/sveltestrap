<script context="module">
  import Button from './Button.svelte';

  export const meta = {
    title: "Stories/Buttons",
    component: Button,
    parameters: {},
    argTypes: {
      class: {
        className: 'string'
      },
      children: {
        control: ''
      },
      active: {
        control: 'boolean'
      },
      block: {
        control: 'boolean'
      },
      disabled: {
        control: 'boolean'
      },
      close: {
        control: 'boolean'
      },
      outline: {
        control: 'boolean'
      },
      href: {
        control: 'string'
      },
      value: {
        control: 'string'
      },
      inner: {
        control: false,
        table: {
          disable: true
        }
      },
      color: {
        control: {
          type: 'select'
        },
        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark'
        ]
      },
      size: {
        control: {
          type: 'select'
        },
        options: ['sm', 'md', 'lg']
      }
    },
    args: {
      class: '',
      active: false,
      block: false,
      children: undefined,
      close: false,
      color: 'secondary',
      disabled: false,
      href: undefined,
      inner: undefined,
      outline: false,
      size: null,
      value: ''
    }
  }
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';

  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];

  const sizes = [
    'sm',
    'md',
    'lg'
  ];
</script>

<Template let:args>
  <Button {...args} on:click></Button>
</Template>

<Story name="Colors" args={{ color: 'primary' }}>
  {#each colors as color}
    <Button {color}>{color}</Button>
  {/each}
</Story>

<Story name="Sizes" args={{ size: 'md' }}>
  {#each sizes as size}
    <Button {size} color="primary">Button {size}</Button>
  {/each}
</Story>

<Story name="Basic" args={{ size: 'md', color: 'primary', children: 'Button' }} />
