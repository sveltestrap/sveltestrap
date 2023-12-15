<script context="module">
  import Styles from './Styles.svelte';

  export const meta = {
    title: 'Stories/Styles',
    component: Styles
  };
</script>

<script>
  import { Story } from '@storybook/addon-svelte-csf';
  import {
    Button,
    Container,
    Icon,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from '@sveltestrap/sveltestrap';

  let theme = 'light';
</script>

<Story name="Basic">
  <Styles />

  <Button color="primary">
    Nice! <Icon name="emoji-smile-fill" />
  </Button>
</Story>

<Story name="Theme">
  <Styles {theme} />

  <div class="horizontal">
    <Dropdown isOpen={true}>
      <DropdownToggle caret>Menu</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <Button color="primary" outline active={theme === 'light'} on:click={() => (theme = 'light')}>
      light <Icon name="sun-fill" />
    </Button>
    <Button color="primary" outline active={theme === 'dark'} on:click={() => (theme = 'dark')}>
      dark <Icon name="moon-stars-fill" />
    </Button>
    <Button color="primary" outline active={theme === 'auto'} on:click={() => (theme = 'auto')}>
      auto <Icon name="circle-half" />
    </Button>
  </div>

  <br /><br /><br /><br />
</Story>
