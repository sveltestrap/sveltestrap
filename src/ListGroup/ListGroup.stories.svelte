<script context="module">
  import ListGroup from './ListGroup.svelte';

  export const meta = {
    title: 'Stories/ListGroup',
    component: ListGroup,
    parameters: {},
    argTypes: {
      class: {
        className: 'string',
        table: { disable: true }
      },
      flush: {
        control: 'boolean'
      },
      horizontal: {
        control: 'boolean'
      },
      numbered: {
        control: 'boolean'
      }
    },
    args: {
      flush: false,
      horizontal: false,
      numbered: false
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { ListGroupItem } from '@sveltestrap/sveltestrap';

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
</script>

<Template let:args>
  <div class="listgroup-example">
    <div class="listgroup-item-size">
      <ListGroup {...args}>
        <ListGroupItem active>Active</ListGroupItem>
        <ListGroupItem>Bravo</ListGroupItem>
        <ListGroupItem>Charlie</ListGroupItem>
        <ListGroupItem>Delta</ListGroupItem>
        <ListGroupItem>Echo</ListGroupItem>
        <ListGroupItem disabled>Disabled</ListGroupItem>
      </ListGroup>
    </div>
  </div>
</Template>

<Story name="Basic" />

<Story name="Colors">
  <div class="listgroup-example">
    <div class="listgroup-item-size">
      <ListGroup>
        {#each colors as color}
          <ListGroupItem {color}>{color}</ListGroupItem>
        {/each}
      </ListGroup>
    </div>
  </div>
</Story>

<Story name="Actions">
  <div class="listgroup-example">
    <div class="listgroup-item-size">
      <h4 class="text-content">Anchors</h4>
      <ListGroup>
        <ListGroupItem active tag="a" href="https://svelte.dev" action>Active</ListGroupItem>
        <ListGroupItem tag="a" href="https://svelte.dev" action>Bravo</ListGroupItem>
        <ListGroupItem tag="a" href="https://svelte.dev" action>Charlie</ListGroupItem>
        <ListGroupItem tag="a" href="https://svelte.dev" action>Delta</ListGroupItem>
        <ListGroupItem disabled tag="a" href="https://svelte.dev" action>Disabled</ListGroupItem>
      </ListGroup>

      <h4 class="mt-3 text-content">Buttons</h4>
      <ListGroup>
        <ListGroupItem active tag="button" action>Active</ListGroupItem>
        <ListGroupItem tag="button" action>Bravo</ListGroupItem>
        <ListGroupItem tag="button" action>Charlie</ListGroupItem>
        <ListGroupItem tag="button" action>Delta</ListGroupItem>
        <ListGroupItem disabled tag="button" action>Disabled</ListGroupItem>
      </ListGroup>
    </div>
  </div>
</Story>

<Story name="Flush">
  <div class="listgroup-example">
    <div class="listgroup-item-size">
      <ListGroup flush>
        <ListGroupItem disabled tag="a" href="#" active>Active</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#" disabled>Disabled</ListGroupItem>
      </ListGroup>
    </div>
  </div>
</Story>

<Story name="Horizontal">
  <div class="listgroup-example">
    <div class="listgroup-item-size">
      <ListGroup horizontal>
        <ListGroupItem active>Active</ListGroupItem>
        <ListGroupItem>Lorem</ListGroupItem>
        <ListGroupItem>Ipsum</ListGroupItem>
        <ListGroupItem>Dolor</ListGroupItem>
        <ListGroupItem>Sit</ListGroupItem>
        <ListGroupItem disabled>Amet</ListGroupItem>
      </ListGroup>
    </div>
  </div>
</Story>

<Story name="Numbered">
  <div class="listgroup-example">
    <div class="listgroup-item-size">
      <ListGroup numbered>
        <ListGroupItem active>Active</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem disabled>Disabled</ListGroupItem>
      </ListGroup>
    </div>
  </div>
</Story>
