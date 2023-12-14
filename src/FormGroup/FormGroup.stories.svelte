<script context="module">
  import FormGroup from './FormGroup.svelte';

  export const meta = {
    title: 'Stories/FormGroup',
    component: FormGroup,
    parameters: {},
    argTypes: {
      class: {
        className: 'string',
        table: { disable: true }
      },
      className: {
        control: 'text',
        table: { disable: true }
      },
      check: {
        control: 'boolean',
        table: { disable: true }
      },
      disabled: {
        control: 'boolean'
      },
      floating: {
        control: 'boolean'
      },
      inline: {
        control: 'boolean'
      },
      label: {
        control: 'text'
      },
      row: {
        control: 'boolean'
      },
      tag: {
        control: {
          type: 'select'
        },
        options: ['div', 'fieldset'],
        table: { disable: true }
      }
    },
    args: {
      check: false,
      disabled: false,
      floating: false,
      inline: false,
      label: '',
      row: false
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { Badge, Form, Input } from '@sveltestrap/sveltestrap';
</script>

<Template let:args>
  <div class="form-width">
    <Form {...args}>
      <FormGroup {...args}>
        <Input {...args} placeholder="Enter a value" />
      </FormGroup>
    </Form>
  </div>
</Template>

<Story name="Basic" />

<Story name="Floating">
  <div class="form-width">
    <Form>
      <FormGroup floating label="Floating Label">
        <Input placeholder="Enter a value" />
      </FormGroup>

      <FormGroup floating label="Select labels always float">
        <Input type="select" placeholder="Enter a value">
          <option />
          <option value="alpha">Alpha</option>
          <option value="bravo">Bravo</option>
          <option value="charlie">Charlie</option>
        </Input>
      </FormGroup>

      <FormGroup floating>
        <Input placeholder="Enter a value" />
        <div slot="label">
          Floating Label Slot <Badge>3</Badge>
        </div>
      </FormGroup>
    </Form>
  </div>
</Story>
