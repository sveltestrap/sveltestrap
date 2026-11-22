<script>
  import { colorMode, toggleColorMode } from './helpers.js';

  let currentColorMode = $colorMode;

  colorMode.subscribe((value) => {
    currentColorMode = value;
  });
</script>

<slot {currentColorMode} {toggleColorMode} />
