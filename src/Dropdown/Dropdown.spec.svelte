<script>
  import Dropdown from './Dropdown.svelte';
  import { DropdownMenu } from '../DropdownMenu/index.js';
  import { DropdownItem } from '../DropdownItem/index.js';
  import { DropdownToggle } from '../DropdownToggle/index.js';
</script>

<Dropdown>
  <DropdownToggle caret class="coconut">Open</DropdownToggle>
  <DropdownMenu class="cocoa">
    <DropdownItem>Alpha</DropdownItem>
  </DropdownMenu>
</Dropdown>
