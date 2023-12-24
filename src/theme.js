import { writable } from 'svelte/store';

export const colorMode = writable(getInitialColorMode());

function getInitialColorMode() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return currentTheme === 'dark' || (currentTheme === 'auto' && prefersDarkMode) ? 'dark' : 'light';
}

export function toggleColorMode() {
  colorMode.update((currentMode) => {
    const newMode = currentMode === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-bs-theme', newMode);

    return newMode;
  });
}
