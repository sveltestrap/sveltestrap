<script context="module">
  import Progress from './Progress.svelte';

  export const meta = {
    title: 'Stories/Progress',
    component: Progress,
    parameters: {},
    argTypes: {
      class: {
        className: 'string',
        table: { disable: true }
      },
      bar: {
        control: 'boolean'
      },
      multi: {
        control: 'boolean'
      },
      value: {
        control: 'number'
      },
      max: {
        control: 'number'
      },
      animated: {
        control: 'boolean'
      },
      striped: {
        control: 'boolean'
      },
      color: {
        control: {
          type: 'select'
        },
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
      },
      barClassName: {
        control: 'text'
      }
    },
    args: {
      bar: false,
      multi: false,
      value: 0,
      max: 100,
      animated: false,
      striped: false,
      color: 'primary',
      barClassName: ''
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
</script>

<Template let:args>
  {#each colors as color}
    <Progress {...args} {color} value={Math.random() * 50 + 50} class="mb-2">
      {color}
    </Progress>
  {/each}
</Template>

<Story name="Basic" />

<Story name="Labels">
  <Progress value={25} class="mb-2">25%</Progress>
  <Progress value={50} class="mb-2">1/2</Progress>
  <Progress value={75} class="mb-2">You're almost there!</Progress>
  <Progress color="success" value={100} class="mb-2">You did it!</Progress>
  <Progress multi class="mb-2">
    <Progress bar value={15}>Meh</Progress>
    <Progress bar color="success" value={30}>Wow!</Progress>
    <Progress bar color="info" value={25}>Cool</Progress>
    <Progress bar color="warning" value={20}>20%</Progress>
    <Progress bar color="danger" value={5}>!!</Progress>
  </Progress>
</Story>

<Story name="Striped">
  <Progress striped value={2 * 5} class="mb-2" />
  <Progress striped color="success" value={25} class="mb-2" />
  <Progress striped color="info" value={50} class="mb-2" />
  <Progress striped color="warning" value={75} class="mb-2" />
  <Progress striped color="danger" value={100} class="mb-2" />
  <Progress multi class="mb-2">
    <Progress striped bar value={10} />
    <Progress striped bar color="success" value={30} />
    <Progress striped bar color="warning" value={20} />
    <Progress striped bar color="danger" value={20} />
  </Progress>
</Story>

<Story name="Animated">
  <Progress animated value={2 * 5} class="mb-2" />
  <Progress animated color="success" value={25} class="mb-2" />
  <Progress animated color="info" value={50} class="mb-2" />
  <Progress animated color="warning" value={75} class="mb-2" />
  <Progress animated color="danger" value={100} class="mb-2" />
  <Progress multi class="mb-2">
    <Progress animated bar value={10} />
    <Progress animated bar color="success" value={30} />
    <Progress animated bar color="warning" value={20} />
    <Progress animated bar color="danger" value={20} />
  </Progress>
</Story>

<Story name="Multi">
  <div class="progress-example">
    <div class="text-content">Plain</div>
    <Progress multi>
      <Progress bar value={15} />
      <Progress bar color="success" value={20} />
      <Progress bar color="info" value={20} />
      <Progress bar color="warning" value={20} />
      <Progress bar color="danger" value={15} />
    </Progress>
    <br />
    <div class="text-content">With Labels</div>
    <Progress multi>
      <Progress bar value={15}>Meh</Progress>
      <Progress bar color="success" value={35}>Wow!</Progress>
      <Progress bar color="warning" value={25}>25%</Progress>
      <Progress bar color="danger" value={25}>LOOK OUT!!</Progress>
    </Progress>
    <br />
    <div class="text-content">Stripes and Animations</div>
    <Progress multi>
      <Progress bar striped value={15}>Stripes</Progress>
      <Progress bar animated color="success" value={30}>Animated Stripes</Progress>
      <Progress bar color="info" value={25}>Plain</Progress>
    </Progress>
  </div>
</Story>

<Story name="Max">
  <div class="progress-example">
    <div class="text-content">1 of 5</div>
    <Progress value={1} max={5} />
    <br />
    <div class="text-content">50 of 135</div>
    <Progress value={50} max={135} />
    <br />
    <div class="text-content">75 of 111</div>
    <Progress value={75} max={111} />
    <br />
    <div class="text-content">463 of 500</div>
    <Progress value={463} max={500} />
    <br />
    <div class="text-content">Various (40) of 55</div>
    <Progress multi>
      <Progress bar value={5} max={55}>5</Progress>
      <Progress bar color="success" value={15} max={55}>15</Progress>
      <Progress bar color="warning" value={10} max={55}>10</Progress>
      <Progress bar color="danger" value={10} max={55}>10</Progress>
    </Progress>
  </div>
</Story>
