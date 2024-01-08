import { writable } from 'svelte/store';

export const colorMode = writable(getInitialColorMode());

colorMode.subscribe((mode) => useColorMode(mode));

function getInitialColorMode() {
  const currentTheme = globalThis.document?.documentElement.getAttribute('data-bs-theme') || 'light';
  const prefersDarkMode =
    typeof globalThis.window?.matchMedia === 'function'
      ? globalThis.window?.matchMedia('(prefers-color-scheme: dark)').matches
      : false;

  return currentTheme === 'dark' || (currentTheme === 'auto' && prefersDarkMode) ? 'dark' : 'light';
}

export function useColorMode(element, mode) {
  let target = element;

  if (arguments.length === 1) {
    target = globalThis.document?.documentElement;

    if (!target) {
      return;
    }

    mode = element;
    colorMode.update(() => mode);
  }

  target.setAttribute('data-bs-theme', mode);
}

export function toggleColorMode(element) {
  const target = element || globalThis.document?.documentElement;

  if (!target) {
    return;
  }

  const currentMode = target.getAttribute('data-bs-theme');
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  if (!element) {
    colorMode.update(() => newMode);
  }

  target.setAttribute('data-bs-theme', newMode);
}
