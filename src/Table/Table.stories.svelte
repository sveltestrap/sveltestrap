<script context="module">
  import Table from './Table.svelte';

  export const meta = {
    title: 'Stories/Table',
    component: Table,
    parameters: {},
    argTypes: {
      class: {
        className: 'string',
        table: {
          disable: true
        }
      },
      size: {
        control: {
          type: 'select'
        },
        options: ['sm', 'lg']
      },
      bordered: {
        control: 'boolean'
      },
      borderless: {
        control: 'boolean'
      },
      striped: {
        control: 'boolean'
      },
      hover: {
        control: 'boolean'
      },
      responsive: {
        control: 'boolean'
      },
      rows: {
        control: 'object',
        table: {
          disable: true
        }
      }
    },
    args: {
      size: 'lg',
      bordered: false,
      borderless: false,
      striped: false,
      hover: false,
      responsive: false
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { Column } from 'sveltestrap';

  const sizes = ['sm', 'lg'];

  const ROWS = [
    {
      first: 'Rufus',
      last: 'Sarsparilla',
      email: 'rufus.sarsparilla@example.com',
      dob: new Date(1968, 6, 15)
    },
    {
      first: 'Albert',
      last: 'Armadillo',
      email: 'albert.armadillo@example.com',
      dob: new Date(1972, 7, 17)
    },
    {
      first: 'Arron',
      last: 'Douglas',
      email: 'arron.douglas@example.com',
      dob: new Date(1982, 4, 1)
    },
    {
      first: 'Reginald',
      last: 'Rhodes',
      email: 'reginald.rhodes@example.com',
      dob: new Date(1968, 8, 14)
    },
    {
      first: 'Jimmy',
      last: 'Mendoza',
      email: 'jimmy.mendoza@example.com',
      dob: new Date(1964, 1, 1)
    },
    {
      first: 'Georgia',
      last: 'Montgomery',
      email: 'georgia.montgomery@example.com',
      dob: new Date(1960, 6, 4)
    },
    {
      first: 'Serenity',
      last: 'Thomas',
      email: 'serenity.thomas@example.com',
      dob: new Date(1973, 0, 11)
    },
    {
      first: 'Tonya',
      last: 'Elliott',
      email: 'tonya.elliott@example.com',
      dob: new Date(1954, 7, 17)
    },
    {
      first: 'Maxine',
      last: 'Turner',
      email: 'maxine.turner@example.com',
      dob: new Date(1961, 8, 19)
    },
    {
      first: 'Max',
      last: 'Headroom',
      email: 'max.headroom@example.com',
      dob: new Date(1984, 6, 1)
    }
  ];
</script>

<Template let:args>
  <Table {...args}>
    <thead>
      <tr>
        {#if args.responsive}
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
          <th>Extra</th>
        {:else}
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        {/if}
      </tr>
    </thead>
    <tbody>
      <tr>
        {#if args.responsive}
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        {:else}
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        {/if}
      </tr>
      <tr>
        {#if args.responsive}
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        {:else}
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        {/if}
      </tr>
      <tr>
        {#if args.responsive}
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        {:else}
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        {/if}
      </tr>
    </tbody>
  </Table>
</Template>

<Story name="Basic" />

<Story name="Bordered" args={{ bordered: true }} />

<Story name="Borderless" args={{ borderless: true }} />

<Story name="Hover" args={{ hover: true }} />

<Story name="Striped" args={{ striped: true }} />

<Story name="Sizes" args={{ size: 'sm' }} />

<Story name="Responsive">
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
</Story>

<Story name="Columns">
  <Table rows={ROWS} let:row>
    <Column header="First Name" width="8rem">
      {row.first}
    </Column>
    <Column header="Last Name" width="8rem">
      {row.last}
    </Column>
    <Column header="Email">
      {row.email}
    </Column>
    <Column header="Birthdate" width="10rem" class="text-right">
      {row.dob.toDateString()}
    </Column>
  </Table>
</Story>