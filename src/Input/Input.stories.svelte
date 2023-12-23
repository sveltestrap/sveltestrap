<script context="module">
  import Input from './Input.svelte';

  export const meta = {
    title: 'Stories/Inputs',
    component: Input,
    parameters: {
      controls: {
        exclude: /^(blur|change|default|focus|input|keydown|keypress|keyup)$/g
      }
    },
    argTypes: {
      class: {
        className: 'string',
        table: {
          disable: true
        }
      },
      bsSize: {
        control: {
          type: 'select'
        },
        options: ['sm', '', 'lg']
      },
      type: {
        control: {
          type: 'select'
        },
        options: [
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'number',
          'password',
          'radio',
          'range',
          'search',
          'select',
          'switch',
          'text',
          'textarea',
          'time',
          'url'
        ]
      },
      plaintext: {
        control: {
          type: 'boolean'
        },
        table: {
          disable: false
        }
      },
      size: {
        control: {
          type: 'select'
        },
        options: ['sm', 'lg'],
        table: {
          disable: true
        }
      },
      color: {
        control: 'color',
        table: {
          disable: true
        }
      },
      feedback: {
        control: 'text',
        table: {
          disable: true
        }
      },
      disabled: {
        control: 'boolean'
      },
      checked: {
        control: 'boolean',
        table: {
          disable: true
        }
      },
      files: {
        control: 'array',
        table: {
          disable: true
        }
      },
      group: {
        control: 'text',
        table: {
          disable: true
        }
      },
      inner: {
        control: 'text',
        table: {
          disable: true
        }
      },
      label: {
        control: 'text',
        table: {
          disable: true
        }
      },
      multiple: {
        control: 'boolean',
        table: {
          disable: true
        }
      },
      name: {
        control: 'text',
        table: {
          disable: true
        }
      },
      placeholder: {
        control: 'text'
      },
      readonly: {
        control: 'boolean',
        table: {
          disable: true
        }
      },
      reverse: {
        control: 'boolean'
      },
      value: {
        control: 'text'
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
      type: 'text',
      plaintext: false,
      invalid: false,
      valid: false,
      bsSize: undefined,
      disabled: false,
      placeholder: 'placeholder',
      reverse: false,
      value: ''
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { FormGroup, FormText, Label } from '@sveltestrap/sveltestrap';

  let changeValue = '';
  let focused = false;
  let inner = '';
  let inputValue = '';
  let radioGroup;

  const resize = () => {
    inner.style.height = 'auto';
    inner.style.height = 4 + inner.scrollHeight + 'px';
  };

  const changeEvent = (e) => {
    changeValue = e.target.value;
  };

  const inputEvent = (e) => {
    inputValue = e.target.value;
  };
</script>

<Template let:args>
  <div class="form-width">
    <Input {...args} />
  </div>
</Template>

<Story name="Basic" />

<Story name="Text">
  <div class="form-width">
    <div class="input-example">
      <div class="text-content">
        <Input id="plainExample" plaintext value="Some plain text/ static value" />
        <br />
        <Input placeholder="text placeholder" value="Some text value" />
        <br />
        <Input type="email" placeholder="email placeholder" />
        <br />
        <Input type="password" placeholder="password placeholder" />
        <br />
        <Input type="url" placeholder="url placeholder" />
        <br />
        <Input type="search" placeholder="search placeholder" />
        <br />
        <Input type="textarea" placeholder="textarea placeholder" />
      </div>
    </div>
  </div>
</Story>

<Story name="Numbers">
  <div class="form-width">
    <Input type="range" min={0} max={100} step={10} placeholder="range placeholder" />
    <br /><br />
    <Input type="number" placeholder="number placeholder" />
  </div>
</Story>

<Story name="DateTime">
  <div class="form-width">
    <Input type="datetime-local" placeholder="datetime placeholder" />
    <br />
    <Input type="date" placeholder="date placeholder" />
    <br />
    <Input type="time" placeholder="time placeholder" />
  </div>
</Story>

<Story name="Color">
  <Input type="color" placeholder="color placeholder" />
</Story>

<Story name="SelectRadioCheckSwitch">
  <div class="form-width">
    <div class="input-example">
      <div class="text-content">
        <Input type="select">
          {#each [1, 2, 3, 4, 5] as option}
            <option>{option}</option>
          {/each}
        </Input>
        <br />
        {#each ['eenie', 'meanie', 'minie', 'moe'] as value}
          <Input type="radio" bind:group={radioGroup} {value} label={value.charAt(0).toUpperCase() + value.slice(1)} />
        {/each}
        <br />
        <Input type="checkbox" label="Check me out" />
        <br />
        <Input type="checkbox" reverse label="Reverse Label" />
        <br />
        <Input type="switch" label="Switch me on" />
      </div>
    </div>
  </div>
</Story>

<Story name="Files">
  <div class="form-width">
    <Input type="file" name="file" id="exampleFile" />
    <FormText>
      This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new
      line.
    </FormText>
  </div>
</Story>

<Story name="Validation">
  <div class="form-width">
    <FormGroup>
      <Input value="Invalid input" invalid feedback="I could be wrong" />
    </FormGroup>

    <FormGroup>
      <Input value="Valid input" valid feedback="I could be right" />
    </FormGroup>

    <FormGroup>
      <Input value="Multiple feedback" valid feedback={['I could be black', 'I could be white']} />
    </FormGroup>
  </div>
</Story>

<Story name="Binding">
  <div class="form-width">
    <div class="input-example">
      <FormGroup>
        <Label>Type here</Label>
        <Input type="text" bind:value={inputValue} />
      </FormGroup>
      {#if inputValue}
        <p>You typed: {inputValue}</p>
      {/if}

      <FormGroup>
        <Label>This textarea resizes as you type</Label>
        <Input rows={1} type="textarea" bind:inner on:input={resize} />
      </FormGroup>
    </div>
  </div>
</Story>

<Story name="Events">
  <div class="form-width">
    <div class="input-example">
      <FormGroup>
        <Label>Type here</Label>
        <Input
          type="text"
          value={inputValue}
          on:blur={() => (focused = false)}
          on:focus={() => (focused = true)}
          on:change={changeEvent}
          on:input={inputEvent}
        />
      </FormGroup>
      {#if changeValue}
        <p>
          <code>on:change</code>
          says you typed: {changeValue}
        </p>
      {/if}
      {#if inputValue}
        <p>
          <code>on:input</code>
          says you are typing: {inputValue}
        </p>
      {/if}
      {#if !focused}
        <p>
          <code>on:blur</code>
          says you are not focused.
        </p>
      {:else}
        <p>
          <code>on:focus</code>
          says you are focused.
        </p>
      {/if}
    </div>
  </div>
</Story>
