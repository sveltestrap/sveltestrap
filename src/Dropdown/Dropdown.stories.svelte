<script context="module">
  import Dropdown from './Dropdown.svelte';

  export const meta = {
    title: 'Stories/Dropdown',
    component: Dropdown,
    parameters: {},
    argTypes: {
      class: {
        className: 'string',
        table: { disable: true }
      },
      active: {
        control: 'boolean'
      },
      autoClose: {
        control: 'boolean'
      },
      direction: {
        control: {
          type: 'select'
        },
        options: ['down', 'up', 'left', 'right', 'start', 'end'],
        table: { disable: true }
      },
      dropup: {
        control: 'boolean'
      },
      group: {
        control: 'boolean'
      },
      inNavbar: {
        control: 'boolean',
        table: { disable: true }
      },
      isOpen: {
        control: 'boolean'
      },
      nav: {
        control: 'boolean',
        table: { disable: true }
      },
      setActiveFromChild: {
        control: 'boolean',
        table: { disable: true }
      },
      size: {
        control: {
          type: 'select'
        },
        options: ['sm', '', 'lg']
      },
      toggle: {
        control: 'boolean',
        table: { disable: true }
      }
    },
    args: {
      active: false,
      autoClose: true,
      direction: 'down',
      dropup: false,
      group: true,
      isOpen: false,
      nav: false,
      setActiveFromChild: false,
      size: '',
      toggle: false
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import {
    ButtonToolbar,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Nav,
    NavItem,
    NavLink,
    Navbar
  } from '@sveltestrap/sveltestrap';

  let isOpen = false;

  const directions = ['down', 'right', 'left', 'up', 'start', 'end'];
  const sizes = ['sm', '', 'lg'];
</script>

<Template let:args>
  <div class="dropdown-example">
    <div class="drop-height">
      <Dropdown {...args}>
        <DropdownToggle caret>Drop{args.direction}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</Template>

<Story name="Basic" />

<Story name="Alignment">
  <div class="dropdown-example">
    <div class="drop-canvas-size">
      <Dropdown>
        <DropdownToggle caret>Dropdown's menu is right-aligned</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</Story>

<Story name="Direction">
  <div class="dropdown-example">
    <div class="drop-canvas-size">
      <div class="column">
        <div class="columns">
          {#each directions as direction}
            <Dropdown class="m-3" {direction}>
              <DropdownToggle caret>Drop{direction}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          {/each}
        </div>
      </div>
    </div>
  </div>
</Story>

<Story name="Sizes">
  <div class="dropdown-example">
    <div class="drop-canvas-size">
      <div class="column">
        <div class="columns">
          {#each sizes as size}
            <Dropdown class="m-3" {size}>
              <DropdownToggle caret>Dropdown {size}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          {/each}
        </div>
      </div>
    </div>
  </div>
</Story>

<Story name="Container">
  <div class="dropdown-example">
    <div class="drop-height">
      <Dropdown {isOpen} toggle={() => (isOpen = !isOpen)}>
        <DropdownToggle tag="div" class="d-inline-block">
          <Input />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</Story>

<Story name="SetActiveFromChild">
  <div class="dropdown-example">
    <div class="drop-height">
      <Navbar color="dark" dark expand="md">
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Inactive Link</NavLink>
          </NavItem>
          <Dropdown nav setActiveFromChild>
            <DropdownToggle nav class="nav-link" caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#" active>Lancelot</DropdownItem>
              <DropdownItem href="#">Link</DropdownItem>
              <DropdownItem href="#">Secret</DropdownItem>
              <DropdownItem href="#">Chimp</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  </div>
</Story>

<Story name="AutoClose">
  <div class="dropdown-example">
    <div class="drop-height">
      <ButtonToolbar>
        <div class="columns">
          <div class="column">
            <Dropdown class="m-3" autoClose={true}>
              <DropdownToggle caret>Default</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div class="column">
            <Dropdown class="m-3" autoClose="outside">
              <DropdownToggle caret>Outside</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div class="column">
            <Dropdown class="m-3" autoClose="inside">
              <DropdownToggle caret>Inside</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div class="column">
            <Dropdown class="m-3" autoClose={false}>
              <DropdownToggle caret>Manually</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
                <DropdownItem>Menu item</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </ButtonToolbar>
    </div>
  </div>
</Story>
