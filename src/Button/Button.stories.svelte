<script context="module">
  import Button from './Button.svelte';

  export const meta = {
    title: 'Stories/Buttons',
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
        control: ''
      },
      value: {
        control: ''
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
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
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
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { ButtonGroup, ButtonToolbar } from '@sveltestrap/sveltestrap';

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  const sizesMap = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large'
  };
</script>

<Template let:args>
  <Button {...args} on:click></Button>
</Template>

<Story name="Basic" args={{ size: 'md', color: 'primary', children: 'Button' }} />

<Story name="Colors" args={{ color: 'primary' }}>
  <div class="horizontal capitalize">
    {#each colors as color}
      <Button class="capitalize" {color}>{color}</Button>
    {/each}
  </div>
</Story>

<Story name="Outlines" args={{ color: 'primary' }}>
  <div class="horizontal">
    {#each colors as color}
      <Button class="capitalize" outline {color}>{color}</Button>
    {/each}
  </div>
</Story>

<Story name="Sizes" args={{ size: 'md' }}>
  <div class="horizontal">
    {#each Object.keys(sizesMap) as size}
      <Button {size} color="primary">{sizesMap[size]}</Button>
    {/each}
  </div>
</Story>

<Story name="Groups">
  <ButtonGroup>
    <Button color="primary" active>Alpha</Button>
    <Button color="primary">Bravo</Button>
    <Button color="primary">Charlie</Button>
  </ButtonGroup>
</Story>

<Story name="Toolbar">
  <ButtonToolbar>
    <Button color="primary">File</Button>
    <Button color="primary">Edit</Button>
    <Button color="primary">View</Button>
  </ButtonToolbar>
</Story>
