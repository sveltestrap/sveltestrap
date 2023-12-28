/*! For license information please see Welcome-mdx.d685d8ac.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sveltestrap_sveltestrap=self.webpackChunk_sveltestrap_sveltestrap||[]).push([[5340],{5519:function(e,t,s){"use strict";s.d(t,{NF:function(){return o},Zo:function(){return i},ah:function(){return l},pC:function(){return r}});var n=s(959);const r=n.createContext({});function o(e){return function(t){const s=l(t.components);return n.createElement(e,{...t,allComponents:s})}}function l(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:l(e),n.createElement(r.Provider,{value:o},t)}},7256:function(e,t,s){"use strict";s.r(t),s(959);var n=s(1527),r=s(5519),o=s(4167);function l(e){const t=Object.assign({p:"p",a:"a",img:"img",h2:"h2",strong:"strong",hr:"hr",pre:"pre",code:"code",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h_,{title:"Sveltestrap/Overview"}),"\n",(0,n.jsxs)("div",{class:"welcome-page",children:[(0,n.jsx)("div",{class:"hero",children:(0,n.jsx)("img",{src:"https://github.com/sveltestrap/sveltestrap/assets/1918732/9e00bb52-01ac-44ba-a79e-46922fcdfea6",alt:"Sveltestrap logo"})}),(0,n.jsx)("div",{class:"social",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://join.slack.com/t/sveltestrap/shared_invite/zt-28y9c8a8k-6~9UI~26Cx7pF1JKeQZPyA",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Slack-Sveltestrap-1703732139275",alt:"slack"})}),"\n",(0,n.jsx)(t.a,{href:"https://discord.gg/fvBuqxxM",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Discord-Sveltestrap-1703732139275",alt:"discord"})}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/sveltestrap/sveltestrap",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/github/stars/sveltestrap/sveltestrap?style=social",alt:"stars - sveltestrap"})}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/sveltestrap/sveltestrap",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/github/forks/sveltestrap/sveltestrap?style=social",alt:"forks - sveltestrap"})})]})}),(0,n.jsx)(t.h2,{id:"bootstrap-5-components-for-svelte-4",children:"Bootstrap 5 Components for Svelte 4+"}),(0,n.jsxs)(t.p,{children:["Sveltestrap is a library designed to simplify the integration of ",(0,n.jsx)(t.a,{href:"https://getbootstrap.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap 5"})," components into your ",(0,n.jsx)(t.a,{href:"https://svelte.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"Svelte"})," applications. It eliminates the need for Bootstrap component classes, the inclusion of Bootstrap's JavaScript, and reliance on jQuery."]}),(0,n.jsxs)(t.p,{children:["This open-source software is freely available under the permissive MIT license. It draws inspiration from the ",(0,n.jsx)(t.a,{href:"https://reactstrap.github.io/?path=/story/home-installation--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"reactstrap"})," library for ",(0,n.jsx)(t.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]}),(0,n.jsxs)(t.p,{children:["Please note that Sveltestrap ",(0,n.jsx)("u",{children:(0,n.jsx)(t.strong,{children:"does not directly embed Bootstrap style"})}),". To use Bootstrap themes effectively, you must include Bootstrap 5 CSS using one of the methods outlined below."]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),"\nIf you looking for Svelte 3.x support, you can use the original ",(0,n.jsx)(t.a,{href:"https://github.com/bestguy/sveltestrap",target:"_blank",rel:"nofollow noopener noreferrer",children:"sveltestrap"})," package."]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"install",children:"Install"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"# npm\n> npm install svelte @sveltestrap/sveltestrap\n\n# pnpm\n> pnpm install svelte @sveltestrap/sveltestrap\n\n# yarn\n> yarn add svelte @sveltestrap/sveltestrap\n"})}),(0,n.jsx)(t.h2,{id:"bootstrap-css",children:"Bootstrap CSS"}),(0,n.jsx)(t.p,{children:"It's essential to note that Bootstrap 5 components do not come with Bootstrap styles preloaded, so you'll need to add the stylesheet manually. Here's how you can add them:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Add to your apps static ",(0,n.jsx)(t.code,{children:"index.html"})," file"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<head>\n  <link\n    rel="stylesheet"\n    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"\n  />\n</head>\n'})}),(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Add to your main ",(0,n.jsx)(t.code,{children:"App.svelte"})," file"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<svelte:head>\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">\n</svelte:head>\n'})}),(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Import the styles directly in your CSS bundle"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<style>\n  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';\n</style>\n"})}),(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Use the provided ",(0,n.jsx)(t.a,{href:"/docs/components-styles--docs",children:"Styles"})," component"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  import { Styles } from '@sveltestrap/sveltestrap';\n<\/script>\n\n<Styles />\n"})}),(0,n.jsx)(t.p,{children:"Then use Sveltestrap components in your svelte component:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  import { Button, Col, Row } from '@sveltestrap/sveltestrap';\n<\/script>\n\n<Row>\n  <Col>\n    <Button color=\"primary\" outline>Hello World!</Button>\n  </Col>\n</Row>\n"})}),(0,n.jsx)(t.h2,{id:"bootstrap-icons",children:"Bootstrap Icons"}),(0,n.jsxs)(t.p,{children:["If you want to use the ",(0,n.jsx)(t.a,{href:"/docs/components-styles--docs",children:"Icon component"}),",\nyou also must include a link to Bootstrap Icon CSS, for example:"]}),(0,n.jsxs)(t.p,{children:["Include it in your app's ",(0,n.jsx)(t.code,{children:"App.svelte"}),":"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<svelte:head>\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">\n</svelte:head>\n'})}),(0,n.jsxs)(t.p,{children:["or you can include it in your app's ",(0,n.jsx)(t.code,{children:"index.html"}),":"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css"\n/>\n'})}),(0,n.jsxs)(t.p,{children:["or the ",(0,n.jsx)(t.a,{href:"https://sveltestrap.js.org/?path=/story/components--styles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Styles"})," component includes the Bootstrap Icon CSS by default:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  import { Styles } from '@sveltestrap/sveltestrap';\n<\/script>\n\n<Styles />\n"})}),(0,n.jsx)(t.h2,{id:"using-sapper",children:"Using Sapper"}),(0,n.jsx)(t.p,{children:"If you are using Sveltestrap with Sapper, it's recommended you import the component source directly.\nNote that this issue does not affect SvelteKit."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  import { Button, Col, Row } from '@sveltestrap/sveltestrap/src';\n<\/script>\n\n<Row>\n  <Col>\n    <Button color=\"primary\" outline>Hello World!</Button>\n  </Col>\n</Row>\n"})}),(0,n.jsxs)(t.p,{children:["If you prefer the ",(0,n.jsx)(t.code,{children:"@sveltestrap/sveltestrap"})," import, you can move the package to ",(0,n.jsx)(t.code,{children:"devDependencies"})," block in your ",(0,n.jsx)(t.code,{children:"package.json"})," so that sapper will parse the es bundle"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"devDependencies": {\n    "@sveltestrap/sveltestrap": "*.*.*",\n    ...\n  },\n'})})]})]})}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},8039:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8039,e.exports=t},3354:function(e,t,s){"use strict";var n=s(959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,o={},c=null,p=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:p,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},1527:function(e,t,s){"use strict";e.exports=s(3354)}}]);