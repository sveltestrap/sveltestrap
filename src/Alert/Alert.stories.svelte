<script context="module">
  import Alert from './Alert.svelte';

  export const meta = {
    title: "Stories/Alert",
    component: Alert,
    parameters: {},
    argTypes: {
      class: {
        control: false,
        table: {
          disable: true
        }
      },
      children: {
        control: ''
      },
      closeClassName: {
        control: false,
        table: {
          disable: true
        }
      },
      closeAriaLabel: {
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
      dismissible: {
        control: 'boolean'
      },
      fade: {
        control: 'boolean'
      },
      heading: {
        control: ''
      },
      isOpen: {
        control: 'boolean'
      },
      toggle: {
        control:  false,
        table: {
          disable: true
        }
      },
      transition: {
        control:  false,
        table: {
          disable: true
        }
      }
    },
    args: {
      class: '',
      children: undefined,
      color: 'success',
      closeClassName: '',
      closeAriaLabel: 'Close',
      dismissible: false,
      fade: true,
      heading: '',
      isOpen: true
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
</script>

<Template let:args>
  <Alert {...args} on:click></Alert>
</Template>

<Story name="Basic" args={{ children: "Hello, I'm a warning message.", color: "warning" }} />

<Story name="Colors">
  {#each colors as color}
    <Alert {color}>
      <h4 class="alert-heading text-capitalize">{color}</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <a href="#todo" class="alert-link">
        Also, alert-links are colored to match
      </a>
      .
    </Alert>
  {/each}
</Story>
