<script context="module">
  import Pagination from './Pagination.svelte';

  export const meta = {
    title: 'Stories/Pagination',
    component: Pagination,
    parameters: {},
    argTypes: {
      class: {
        className: 'string',
        table: { disable: true }
      },
      listClassName: {
        control: 'text'
      },
      size: {
        control: {
          type: 'select'
        },
        options: ['', 'sm', 'lg']
      },
      ariaLabel: {
        control: 'text'
      }
    },
    args: {
      listClassName: '',
      size: '',
      ariaLabel: 'Page navigation example'
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { PaginationItem, PaginationLink } from '@sveltestrap/sveltestrap';
</script>

<Template let:args>
  <Pagination {...args}>
    <PaginationItem disabled>
      <PaginationLink first href="#" />
    </PaginationItem>
    <PaginationItem disabled>
      <PaginationLink previous href="#" />
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink next href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink last href="#" />
    </PaginationItem>
  </Pagination>
</Template>

<Story name="Basic" />

<Story name="Sizes">
  <Pagination size="lg" ariaLabel="Page navigation example">
    <PaginationItem>
      <PaginationLink first href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink previous href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink next href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink last href="#" />
    </PaginationItem>
  </Pagination>
</Story>