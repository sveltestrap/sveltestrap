import { Writable } from 'svelte/store';

declare const colorMode: Writable<string>;

declare function useColorMode(element: HTMLElement | null, mode: string): void;

declare function toggleColorMode(element?: HTMLElement | null): void;

export { colorMode, useColorMode, toggleColorMode };
