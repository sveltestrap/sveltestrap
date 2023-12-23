<script context="module">
  import InputGroup from './InputGroup.svelte';

  export const meta = {
    title: 'Stories/InputGroup',
    component: InputGroup,
    parameters: {
      controls: {
        exclude: /^(default)$/g
      }
    },
    argTypes: {
      class: {
        className: 'string',
        table: { disable: true }
      },
      size: {
        control: {
          type: 'select'
        },
        options: ['sm', '', 'lg']
      },
      'default ': {
        description: 'This is the default content slot.',
        table: {
          category: 'slots',
          type: {
            summary: 'any'
          },
          defaultValue: {
            summary: 'empty'
          }
        }
      }
    },
    args: {
      size: ''
    }
  };
</script>

<script>
  import { Story, Source, Template } from '@storybook/addon-svelte-csf';
  import { InputGroupText, Input } from '@sveltestrap/sveltestrap';
</script>

<Template let:args>
  <div class="form-width">
    <InputGroup {...args}>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
  </div>
</Template>

<Story name="Basic" />

<Story name="Groups">
  <div class="form-width">
    <InputGroup>
      <InputGroupText>
        <Input addon type="checkbox" aria-label="Checkbox for following text input" />
      </InputGroupText>

      <Input placeholder="Check it out" />
    </InputGroup>
    <br />
    <InputGroup>
      <Input placeholder="placeholder email" />
      <InputGroupText>@example.com</InputGroupText>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>$</InputGroupText>
      <InputGroupText>$</InputGroupText>
      <Input placeholder="Dolla dolla billz yo!" />
      <InputGroupText>$</InputGroupText>
      <InputGroupText>$</InputGroupText>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>$</InputGroupText>
      <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
      <InputGroupText>.00</InputGroupText>
    </InputGroup>
  </div>
</Story>

<Story name="Size">
  <div class="form-width">
    <div>
      <InputGroup size="lg">
        <InputGroupText>@lg</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>@default</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupText>@sm</InputGroupText>
        <Input />
      </InputGroup>
    </div>
  </div>
</Story>
