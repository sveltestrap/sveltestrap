import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface FadeProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onEntering?: () => void;
  onEntered?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  toggler?: string;
}

export interface FadeEvents {
  open: CustomEvent<void>;
  opening: CustomEvent<void>;
  closing: CustomEvent<void>;
  close: CustomEvent<void>;
}

export interface FadeSlots {
  default: {};
}

export default class Fade extends SvelteComponent<FadeProps, FadeEvents, FadeSlots> {}
