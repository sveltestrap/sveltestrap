<script context="module">
  import Offcanvas from './Offcanvas.svelte';

  export const meta = {
    title: "Stories/Offcanvas",
    component: Offcanvas,
    parameters: {},
    argTypes: {
      class: {
        className: ''
      },
      backdrop: {
        control: 'boolean'
      },
      body: {
        control: 'boolean'
      },
      fade: {
        control: 'boolean'
      },
      header: {
        control: ''
      },
      isOpen: {
        control: false,
        table: {
          disable: true
        }
      },
      keyboard: {
        control: 'boolean'
      },
      placement: {
        control: {
          type: 'select'
        },
        options: [
          'start',
          'end',
          'top',
          'bottom'
        ]
      },
      scroll: {
        control: 'boolean'
      },
      style: {
        control: ''
      },
      sm: {
        control: 'boolean'
      },
      md: {
        control: 'boolean'
      },
      lg: {
        control: 'boolean'
      },
      xl: {
        control: 'boolean'
      },
      xxl: {
        control: 'boolean'
      }
    },
    args: {
      backdrop: true,
      body: true,
      class: '',
      container: 'body',
      fade: true,
      header: 'Offcanvas',
      isOpen: false,
      keyboard: true,
      placement: 'start',
      scroll: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
      style: '',
      toggle: undefined
    }
  }
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { Button } from 'sveltestrap';

  let open = false;

  const toggle = () => {
    open = !open
  };

  const basicSource = `<Button color="danger" on:click={toggle}>Start</Button>

<Offcanvas isOpen={open} toggle={toggle} header="Start">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Offcanvas>`
</script>

<Story name="Basic" let:args source={basicSource}>
  <Button color="danger capitalize" on:click={toggle}>{args.placement}</Button>

  <Offcanvas {...args} isOpen={open} {toggle}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Offcanvas>
</Story>
