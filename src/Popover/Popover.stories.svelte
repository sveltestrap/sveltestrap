<script context="module">
  import Popover from './Popover.svelte';

  export const meta = {
    title: 'Stories/Popovers',
    component: Popover,
    parameters: {
      controls: {
        exclude: /^(default)$/g
      }
    },
    argTypes: {
      animation: {
        control: 'boolean'
      },
      children: {
        control: ''
      },
      class: {
        control: false,
        table: {
          disable: true
        }
      },
      container: {
        control: false,
        table: {
          disable: true
        }
      },
      dismissible: {
        control: 'boolean'
      },
      hideOnOutsideClick: {
        control: 'boolean'
      },
      isOpen: {
        control: 'boolean'
      },
      placement: {
        control: {
          type: 'select'
        },
        options: ['top', 'left', 'right', 'bottom']
      },
      target: {
        control: false,
        table: {
          disable: true
        }
      },
      theme: {
        control: {
          type: 'select'
        },
        options: ['dark', 'light', 'auto'],
        description: 'The theme style to apply.',
        table: {
          type: {
            summary: 'string'
          },
          defaultValue: {
            summary: 'auto'
          }
        }
      },
      title: {
        control: ''
      },
      trigger: {
        control: {
          type: 'select'
        },
        options: ['click', 'hover', 'focus']
      },
      'title ': {
        description: 'This slot is used for provided a custom title.',
        table: {
          category: 'slots',
          type: {
            summary: 'any'
          },
          defaultValue: {
            summary: 'empty'
          }
        }
      },
      'default ': {
        description: 'This is the default content slot.',
        table: {
          category: 'slots',
          type: {
            summary: 'any'
          },
          defaultValue: {
            summary: 'empty'
          }
        }
      }
    },
    args: {
      animation: true,
      children: '',
      container: undefined,
      dismissible: false,
      hideOnOutsideClick: false,
      isOpen: false,
      placement: 'top',
      theme: null,
      title: 'Popover',
      trigger: 'click'
    }
  };
</script>

<script>
  import { Story } from '@storybook/addon-svelte-csf';
  import { Button } from '@sveltestrap/sveltestrap';

  const placements = ['top', 'right', 'left', 'bottom'];
  const colors = ['primary', 'success', 'danger', 'warning'];

  const basicSource = `<Button color="primary" id="btn-top-basic">Show on top</Button>

<Popover
  target="btn-top-basic"
  placement="top"
  title="Popover Top">
  This is a Popover on the top of the trigger.
</Popover>`;
</script>

<Story name="Basic" let:args source={basicSource}>
  <Button color="primary" id="btn-top-basic">Show on {args.placement}</Button>
  {#key args}
    <Popover {...args} target="btn-top-basic" style={args.theme === 'dark' ? 'color: #fff;' : ''}
      >This is a Popover on the top of the trigger.</Popover
    >
  {/key}
</Story>

<Story name="Placement">
  <div class="horizontal">
    {#each placements as placement, index}
      <Button color={colors[index]} id="btn-{placement}">Show on {placement}</Button>

      <Popover target="btn-{placement}" {placement} title="Popover {placement}">
        This is a Popover on the {placement} of the trigger.
      </Popover>
    {/each}
  </div>
</Story>

<Story name="Triggers">
  <div class="horizontal">
    <div>
      <Button color="primary" id="btn-trigger-click">Click me</Button>
      <Popover trigger="click" placement="top" target="btn-trigger-click" title="Popover on click">
        This is a Popover with click as the trigger.
      </Popover>
    </div>
    <div>
      <Button color="warning" id="btn-trigger-hover">Hover me</Button>
      <Popover trigger="hover" placement="right" target="btn-trigger-hover" title="Popover with hover">
        This is a Popover with hover as the trigger.
      </Popover>
    </div>
    <div>
      <Button color="danger" id="btn-trigger-focus">Focus me</Button>
      <Popover trigger="focus" placement="bottom" target="btn-trigger-focus" title="Popover with focus">
        This is a Popover with focus as the trigger.
      </Popover>
    </div>
  </div>
</Story>

<Story name="Dismissible">
  <Button color="primary" id="btn-dismissible">Click me</Button>

  <Popover placement="right" target="btn-dismissible" dismissible>
    <div slot="title">
      <i>Hello</i> <b>World!</b>
    </div>
    This Popover is dismissesed when any click occurs.
  </Popover>
</Story>

<Story name="OutsideClick">
  <Button color="primary" id="btn-outside-click">Click me</Button>

  <Popover placement="right" target="btn-outside-click" hideOnOutsideClick>
    <div slot="title">
      <i>Hello</i> <b>World!</b>
    </div>
    You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.
  </Popover>
</Story>

<Story name="Theming">
  <div class="horizontal gap-lg">
    <Button color="dark" id="btn-dark-theme">Show dark theme</Button>
    <Button color="light" id="btn-light-theme">Show light theme</Button>
  </div>

  <Popover theme="light" placement="right" target="btn-light-theme" hideOnOutsideClick>
    <div slot="title">
      <i>Hello</i> <b>World!</b>
    </div>
    You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.
  </Popover>

  <Popover theme="dark" placement="right" target="btn-dark-theme" hideOnOutsideClick>
    <div slot="title" style="color: #fff;">
      <i>Hello</i> <b>World!</b>
    </div>
    You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.
  </Popover>
</Story>
