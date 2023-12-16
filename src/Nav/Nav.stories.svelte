<script context="module">
  import Nav from './Nav.svelte';

  export const meta = {
    title: 'Stories/Nav',
    component: Nav,
    parameters: {},
    argTypes: {
      card: {
        control: 'boolean'
      },
      class: {
        control: false,
        table: {
          disable: true
        }
      },
      fill: {
        control: 'boolean'
      },
      horizontal: {
        control: ''
      },
      navbar: {
        control: 'boolean'
      },
      pills: {
        control: 'boolean'
      },
      tabs: {
        control: 'boolean'
      },
      underline: {
        control: 'boolean'
      },
      vertical: {
        control: {
          type: 'select'
        },
        options: ['', 'xs', 'sm', 'md', 'lg', 'xl']
      }
    },
    args: {
      card: false,
      class: '',
      fill: false,
      horizontal: '',
      justified: false,
      navbar: false,
      pills: false,
      tabs: false,
      underline: false,
      vertical: ''
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';

  import { NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from '@sveltestrap/sveltestrap';

  let isOpen = false;

  let basicSource = `<script lang="ts">
  import { Nav, NavItem, NavLink } from '@sveltestrap/sveltestrap';
<\/script>

<p>List Based</p>

<Nav>
  <NavItem active>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Another Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled Link</NavLink>
  </NavItem>
</Nav>

<hr />

<p>Link Based</p>

<Nav>
  <NavLink href="#" active>Link</NavLink>
  <NavLink href="#">Link</NavLink>
  <NavLink href="#">Another Link</NavLink>
  <NavLink disabled href="#">Disabled Link</NavLink>
</Nav>`;
</script>

<Story name="Basic" let:args source={basicSource}>
  <div class="nav-example">
    <p>List Based</p>

    <Nav {...args} color="dark">
      <NavItem active>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>

    <hr />

    <p>Link Based</p>

    <Nav {...args} color="dark">
      <NavLink href="#" active>Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Another Link</NavLink>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </Nav>
  </div>
</Story>

<Story name="Tabs">
  <div class="nav-example">
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>Link</NavLink>
      </NavItem>
      <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>
        <DropdownToggle nav caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>
  </div>
</Story>

<Story name="Pills">
  <div class="nav-example">
    <Nav pills>
      <NavItem>
        <NavLink href="#" active>Link</NavLink>
      </NavItem>
      <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>
        <DropdownToggle nav caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>
  </div>
</Story>

<Story name="Underline">
  <div class="nav-example">
    <Nav underline>
      <NavItem>
        <NavLink href="#" active>Link</NavLink>
      </NavItem>
      <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>
        <DropdownToggle nav caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>
  </div>
</Story>

<Story name="Vertical">
  <div class="nav-example">
    <p>List Based</p>

    <Nav vertical>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>

    <hr />

    <p>Link based</p>

    <Nav vertical>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Another Link</NavLink>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </Nav>
  </div>
</Story>
