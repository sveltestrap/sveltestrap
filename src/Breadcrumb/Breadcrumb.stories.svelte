<script context="module">
  import Breadcrumb from './Breadcrumb.svelte';

  export const meta = {
    title: 'Stories/Breadcrumbs',
    component: Breadcrumb,
    parameters: {},
    argTypes: {
      class: {
        control: ''
      },
      children: {
        control: ''
      },
      divider: {
        control: ''
      },
      listClassName: {
        control: ''
      },
      style: {
        control: ''
      }
    },
    args: {
      class: '',
      children: '',
      divider: '/',
      listClassName: '',
      style: ''
    }
  };
</script>

<script>
  import { Story } from '@storybook/addon-svelte-csf';
  import { BreadcrumbItem } from '@sveltestrap/sveltestrap';
</script>

<Story name="Basic" let:args>
  <div class="breadcrumbs-example">
    <Breadcrumb {...args}>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <a href="#home">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <a href="#home">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#library">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
</Story>

<Story name="Divider">
  <div class="breadcrumbs-example">
    <Breadcrumb divider="・">
      <BreadcrumbItem>
        <a href="#home">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#library">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb divider="⟫">
      <BreadcrumbItem>
        <a href="#home">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#library">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
</Story>
