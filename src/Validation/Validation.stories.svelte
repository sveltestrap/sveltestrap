<script context="module">
  export const meta = {
    title: 'Stories/Validation',
    parameters: {},
    argTypes: {},
    args: {}
  };
</script>

<script>
  import { Story, Source, Template } from '@storybook/addon-svelte-csf';
  import { Button, Form, FormGroup, Input } from '@sveltestrap/sveltestrap';

  let validated = false;
</script>

<Template>
  <div class="form-width">
    <FormGroup>
      <Input value="Bad value" feedback="Invalid feedback" invalid />
    </FormGroup>

    <FormGroup>
      <Input value="Correct value" feedback="Valid feedback" valid />
    </FormGroup>
  </div>
</Template>

<Story name="Basic" />

<Story name="Dynanic">
  <div class="form-width">
    <Form {validated} on:submit={(e) => e.preventDefault()}>
      <FormGroup>
        <Input feedback="This requires a value" placeholder="This requires a value" required />
      </FormGroup>
      <FormGroup>
        <Input feedback="This requires an email" placeholder="This requires an email" required type="email" />
      </FormGroup>
      <Button type="submit" on:click={() => (validated = true)}>Fake Submit</Button>
    </Form>
  </div>
</Story>
