![Unit Tests](https://github.com/Sveltestrap/sveltestrap/actions/workflows/unit.yml/badge.svg)
![Integration Tests](https://github.com/Sveltestrap/sveltestrap/actions/workflows/integration.yml/badge.svg)
[![license](https://img.shields.io/badge/license-MIT-%23bada55&color=7289da)](https://github.com/sveltestrap/sveltestrap/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@sveltestrap/sveltestrap?logo=npm&color=cb3837&label=Latest)](https://www.npmjs.com/package/@sveltestrap/sveltestrap)

## Bootstrap 5 Components for Svelte 4+

Sveltestrap is a library designed to simplify the integration of [Bootstrap 5](https://getbootstrap.com) components into your [Svelte](https://svelte.dev) applications. It eliminates the need for Bootstrap component classes, the inclusion of Bootstrap's JavaScript, and reliance on jQuery.

This open-source software is freely available under the permissive MIT license. It draws inspiration from the [reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page) library for [React](https://react.dev/).

Please note that Sveltestrap <u>**does not directly embed Bootstrap style**</u>. To use Bootstrap themes effectively, you must include Bootstrap 5 CSS using one of the methods outlined below.

**Note**
If you looking for Svelte 3.x support, you can use the original [sveltestrap](https://github.com/bestguy/sveltestrap) package.

### Join the Community
[![Discord](https://img.shields.io/discord/1186498806460710973?label=Sveltestrap&logo=discord&color=7289da)](https://discord.gg/VS9T72ucaU)

---

## Install

```bash
# npm
> npm install svelte @sveltestrap/sveltestrap

# pnpm
> pnpm install svelte @sveltestrap/sveltestrap

# yarn
> yarn add svelte @sveltestrap/sveltestrap
```

## Bootstrap CSS

It's essential to note that Bootstrap 5 components do not come with Bootstrap styles preloaded, so you'll need to add the stylesheet manually. Here's how you can add them:

1. Add to your apps static `index.html` file
```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  />
</head>
```

2. Add to your main `App.svelte` file
```html
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>
```

3. Import the styles directly in your CSS bundle

```html
<style>
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
</style>
```

4. Use the provided [Styles](/?path=/docs/components-styles--docs) component

```html
<script>
  import { Styles } from '@sveltestrap/sveltestrap';
</script>

<Styles />
```

Then use Sveltestrap components in your svelte component:

```html
<script>
  import { Button, Col, Row } from '@sveltestrap/sveltestrap';
</script>

<Row>
  <Col>
    <Button color="primary" outline>Hello World!</Button>
  </Col>
</Row>
```

## Bootstrap Icons

If you want to use the [Icon component](https://sveltestrap.js.org/?path=/story/components--icon),
you also must include a link to Bootstrap Icon CSS, for example:

Include it in your app's `App.svelte`:

```html
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
</svelte:head>
```

or you can include it in your app's `index.html`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>
```

or the [Styles](https://sveltestrap.js.org/?path=/story/components--styles) component includes the Bootstrap Icon CSS by default:

```html
<script>
  import { Styles } from '@sveltestrap/sveltestrap';
</script>

<Styles />
```

## Using Sapper

If you are using Sveltestrap with Sapper, it's recommended you import the component source directly.
Note that this issue does not affect SvelteKit.

```html
<script>
  import { Button, Col, Row } from '@sveltestrap/sveltestrap/src';
</script>

<Row>
  <Col>
    <Button color="primary" outline>Hello World!</Button>
  </Col>
</Row>
```

If you prefer the `@sveltestrap/sveltestrap` import, you can move the package to `devDependencies` block in your `package.json` so that sapper will parse the es bundle

```json
"devDependencies": {
  "@sveltestrap/sveltestrap": "*.*.*",
  ...
},
```

## Sponsors
[![avatar](https://images.weserv.nl/?url=https://opensense.s3.amazonaws.com/logo-horizontal-white-colored-emblem.svg?v=4&h=60&w=260&fit=cover&maxage=5d)](https://www.opensense.com?utm_source=github)

## Maintainers
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/1918732?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/dysfunc)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/405608?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/bestguy)

## Contributors
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/145370889?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/msmauric)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/40482274?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/eddie0329)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/15244006?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/BlackFenix2)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/41120635?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/frederikhors)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55523823?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/thomatha)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/13287984?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/mohe2015)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/305993?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/daytonlowell)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/in/29110?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/apps/dependabot)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/322311?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/benmccann)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/20725046?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/Renerick)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/28020151?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/rornic)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/26409015?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/DaniAcu)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/8082642?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/ladeiko)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/8957069?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/kaipaysen)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/140316503?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/dym-sh)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/1150472?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/GorbulasDev)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/552629?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/lovasoa)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/34311027?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/geoffreymugnier)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/342922?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/coyotte508)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/28934442?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/javajudt)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/50879193?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/demetrius-mp)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/47675451?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/deshartman)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/3946014?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/OJFord)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/26901342?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/mopeneko)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/9532377?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/baileyherbert)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/191226?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/ondrap)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/6368283?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/brocococonut)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/15998415?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/lgirma)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/4997633?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/grantyap)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/23123008?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/33KK)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/28984165?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/frantp)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/3984125?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/gryckelynck)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/6155705?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/davidroeca)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/562969?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/IAL32)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/65456722?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/Florian-Schoenherr)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/1134341?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/newbyca)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/60277151?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/ubersan)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/8332043?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/farskid)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/5259918?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/masrlinu)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/1515160?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/thecodejack)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/918405?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/nextinterfaces)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/38461562?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/jlith)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/385770?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/larryosborn)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/560312?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/TheBosZ)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/8826710?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/infanf)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/766828?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/RoryDuncan)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/11891837?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/splimter)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/2003039?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/glominashvili)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/16706735?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/urispmts)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/6674275?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/sebastienwarin)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/69360379?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/Inqnuam)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/1667261?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/lachlancollins)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/43024885?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/vostrnad)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/24857799?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/x64v)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/42283663?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/hutchisr)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/8121611?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/valmarv)
[![avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/1449602?v=4&h=48&w=48&fit=cover&mask=circle&maxage=5d)](https://github.com/StagnantIce)
