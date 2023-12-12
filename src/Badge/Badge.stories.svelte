<script context="module">
  import Badge from './Badge.svelte';

  export const meta = {
    title: "Stories/Badges",
    component: Badge,
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
      href: {
        control: ''
      },
      pill: {
        control: 'boolean'
      }
    },
    args: {
      class: '',
      children: '',
      color: 'primary',
      href: '',
      pill: false
    }
  }
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { Button } from '@sveltestrap/sveltestrap';

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

  let isOpen = true;
  let toggle = () => (isOpen = !isOpen);
</script>

<Template let:args>
  <Badge {...args} />
</Template>

<Story name="Basic" args={{ color: "primary", children: "Badge" }} />

<Story name="Colors">
  <div class="horizontal">
    {#each colors as color}
      <Badge {color}>{color}</Badge>
    {/each}
  </div>
</Story>

<Story name="Buttons">
  <div class="horizontal">
    <Button color="primary">
      Notifications
      <Badge color="dark">4</Badge>
    </Button>

    <Button color="primary" outline>
      Notifications
      <Badge color="primary">7</Badge>
    </Button>
  </div>
</Story>

<Story name="Pills">
  <div class="horizontal">
    {#each colors as color}
      <Badge pill {color}>{color}</Badge>
    {/each}
  </div>
</Story>

<Story name="Links">
  <Badge href="https://svelte.dev" color="primary">Link Badge</Badge>
</Story>

<Story name="Headings">
  <h1>Example heading <Badge color="secondary">New</Badge></h1>
  <h2>Example heading <Badge color="secondary">New</Badge></h2>
  <h3>Example heading <Badge color="secondary">New</Badge></h3>
  <h4>Example heading <Badge color="secondary">New</Badge></h4>
  <h5>Example heading <Badge color="secondary">New</Badge></h5>
  <h6>Example heading <Badge color="secondary">New</Badge></h6>
</Story>
