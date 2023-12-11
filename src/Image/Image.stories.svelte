<script context="module">
  import { Image as Images } from './Image.svelte';

  export const meta = {
    title: 'Stories/Images',
    component: Image,
    parameters: {},
    argTypes: {
      class: {
        control: false,
        table: {
          disable: true
        }
      },
      alt: {
        control: 'text'
      },
      figure: {
        control: 'boolean'
      },
      fluid: {
        control: 'boolean'
      },
      thumbnail: {
        control: 'boolean'
      },
      src: {
        control: false,
        table: {
          disable: true
        }
      }
    },
    args: {
      alt: '',
      fluid: false,
      thumbnail: false
    }
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { Image, Figure } from 'sveltestrap';

  const thumbnails = [
    'https://picsum.photos/100/100?random=1',
    'https://picsum.photos/100/100?random=2',
    'https://picsum.photos/100/100?random=3'
  ];
</script>

<Template let:args>
  {#if args.figure}
    <Figure caption="This is a figure caption">
      <Image {...args} />
    </Figure>
  {:else}
    <Image {...args} />
  {/if}
</Template>

<Story
  name="Basic"
  args={{
    alt: '',
    fluid: false,
    thumbnail: false,
    figure: false,
    src: 'https://picsum.photos/id/123/2000/400.jpg'
  }}
/>

<Story
  name="Fluid"
  args={{ fluid: true, alt: 'This is a fluid Image', src: 'https://picsum.photos/id/123/2000/400.jpg' }}
/>

<Story name="Thumbnail">
  <div class="horizontal">
    {#each thumbnails as thumbnail}
      <Image thumbnail alt="This is a thumbnail Image" src={thumbnail} />
    {/each}
  </div>
</Story>

<Story name="Figures">
  <Figure caption="I believe this is a cow needing a haircut">
    <Image fluid alt="Landscape" src="https://picsum.photos/id/200/800/600" />
  </Figure>
</Story>
