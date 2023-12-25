import { writable } from 'svelte/store';

export const colorMode = writable(getInitialColorMode());

colorMode.subscribe((mode) => useColorMode(mode));

function getInitialColorMode() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return currentTheme === 'dark' || (currentTheme === 'auto' && prefersDarkMode) ? 'dark' : 'light';
}

export function useColorMode(element, mode) {
  let target = element;

  if (arguments.length === 1) {
    target = document.documentElement;
    mode = element;
    colorMode.update(() => mode);
  }

  target.setAttribute('data-bs-theme', mode);
}

export function toggleColorMode(element) {
  const target = element || document.documentElement;
  const currentMode = target.getAttribute('data-bs-theme');
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  if (!element) {
    colorMode.update(() => newMode);
  }

  target.setAttribute('data-bs-theme', newMode);
}
