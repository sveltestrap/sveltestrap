# Code Notes

This pattern is used to allow testing of Svelte slots:

```jsx
{#if content}
  {content}
{:else}
  <slot />
{/if}
```

Svelte componenent constructors do not support slots, so this adds a fake 'content' prop to allow. More info here:
https://github.com/testing-library/svelte-testing-library/issues/48
