<script lang="ts">
  import classnames from '../src/utils';
  import { afterUpdate } from 'svelte';

  let className = '';
  let isAsync = false;
  export { className as class };
  export { isAsync as async };

  let classes = classnames('language-html', className);
  let _domNode: any;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/themes/prism-okaidia.min.css"
/>

<pre><code class={classes} bind:this={_domNode}><slot /></code></pre>
