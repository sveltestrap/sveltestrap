import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  expand?: boolean | string;
  horizontal?: boolean;
  isOpen?: boolean;
  navbar?: boolean;
  onEntered?: () => void;
  onEntering?: () => void;
  onExited?: () => void;
  onExiting?: () => void;
  toggler?: string;
}

export interface CollapseEvents {
  close: CustomEvent<void>;
  closing: CustomEvent<void>;
  introend: CustomEvent<void>;
  introstart: CustomEvent<void>;
  open: CustomEvent<void>;
  opening: CustomEvent<void>;
  outroend: CustomEvent<void>;
  outrostart: CustomEvent<void>;
  update: CustomEvent<boolean>;
}

export interface CollapseSlots {
  default: {};
}

export default class Collapse extends SvelteComponent<CollapseProps, CollapseEvents, CollapseSlots> {}
