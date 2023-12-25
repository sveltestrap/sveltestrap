<script>
  import { colorMode, toggleColorMode } from './theme';

  let currentColorMode = $colorMode;

  colorMode.subscribe((value) => {
    currentColorMode = value;
  });
</script>

<slot {currentColorMode} {toggleColorMode} />
