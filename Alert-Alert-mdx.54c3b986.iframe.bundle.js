/*! For license information please see Alert-Alert-mdx.54c3b986.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sveltestrap_sveltestrap=self.webpackChunk_sveltestrap_sveltestrap||[]).push([[3022,9508],{5519:function(e,t,n){"use strict";n.d(t,{NF:function(){return s},Zo:function(){return i},ah:function(){return a},pC:function(){return o}});var r=n(959);const o=r.createContext({});function s(e){return function(t){const n=a(t.components);return r.createElement(e,{...t,allComponents:n})}}function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function i({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||l:a(e),r.createElement(o.Provider,{value:s},t)}},8462:function(e,t,n){"use strict";n.r(t),n.d(t,{Basic:function(){return O},Colors:function(){return E},Controlled:function(){return D},Dismissible:function(){return _},Fade:function(){return B},Header:function(){return Y},Theming:function(){return U}});var r=n(579),o=(n(206),n(5855)),s=n(2039),a=n(5055);function l(e,t,n){const r=e.slice();return r[6]=t[n],r}function i(e){let t,n;const s=[e[9]];let a={};for(let e=0;e<s.length;e+=1)a=(0,r.f0i)(a,s[e]);return t=new o.Z({props:a}),t.$on("click",e[3]),{c(){(0,r.YCL)(t.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),n=!0},p(e,n){const o=512&n?(0,r.LoY)(s,[(0,r.gCg)(e[9])]):{};t.$set(o)},i(e){n||((0,r.Ui)(t.$$.fragment,e),n=!0)},o(e){(0,r.etI)(t.$$.fragment,e),n=!1},d(e){(0,r.vpE)(t,e)}}}function c(e){let t,n,o,s,a,l,i;return{c(){t=(0,r.bGB)("h4"),t.textContent="Heading",n=(0,r.fLW)("\n      This is the contents of a "),o=(0,r.bGB)("b"),s=(0,r.bGB)("u"),s.textContent=`${e[6]}`,a=(0,r.fLW)(" alert message. \n\n      "),l=(0,r.bGB)("a"),l.textContent="Also, links are colored to match the assigned alert color!",i=(0,r.DhX)(),(0,r.Ljt)(t,"class","alert-heading text-capitalize"),(0,r.Ljt)(l,"href","#todo"),(0,r.Ljt)(l,"class","alert-link")},m(e,c){(0,r.$Tr)(e,t,c),(0,r.$Tr)(e,n,c),(0,r.$Tr)(e,o,c),(0,r.R3I)(o,s),(0,r.$Tr)(e,a,c),(0,r.$Tr)(e,l,c),(0,r.$Tr)(e,i,c)},p:r.ZTd,d(e){e&&((0,r.ogt)(t),(0,r.ogt)(n),(0,r.ogt)(o),(0,r.ogt)(a),(0,r.ogt)(l),(0,r.ogt)(i))}}}function d(e){let t,n;return t=new o.Z({props:{color:e[6],$$slots:{default:[c]},$$scope:{ctx:e}}}),{c(){(0,r.YCL)(t.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),n=!0},p(e,n){const r={};1024&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||((0,r.Ui)(t.$$.fragment,e),n=!0)},o(e){(0,r.etI)(t.$$.fragment,e),n=!1},d(e){(0,r.vpE)(t,e)}}}function m(e){let t,n,o=(0,r.NXn)(e[1]),s=[];for(let t=0;t<o.length;t+=1)s[t]=d(l(e,o,t));const a=e=>(0,r.etI)(s[e],1,1,(()=>{s[e]=null}));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=(0,r.cSb)()},m(e,o){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,o);(0,r.$Tr)(e,t,o),n=!0},p(e,n){if(2&n){let i;for(o=(0,r.NXn)(e[1]),i=0;i<o.length;i+=1){const a=l(e,o,i);s[i]?(s[i].p(a,n),(0,r.Ui)(s[i],1)):(s[i]=d(a),s[i].c(),(0,r.Ui)(s[i],1),s[i].m(t.parentNode,t))}for((0,r.dvw)(),i=o.length;i<s.length;i+=1)a(i);(0,r.gbL)()}},i(e){if(!n){for(let e=0;e<o.length;e+=1)(0,r.Ui)(s[e]);n=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)(0,r.etI)(s[e]);n=!1},d(e){e&&(0,r.ogt)(t),(0,r.RMB)(s,e)}}}function p(e){let t;return{c(){t=(0,r.fLW)("I am a primary alert and I can be dismissed without animating!")},m(e,n){(0,r.$Tr)(e,t,n)},d(e){e&&(0,r.ogt)(t)}}}function $(e){let t,n;return t=new o.Z({props:{color:"primary",isOpen:e[0],toggle:e[4],fade:!1,$$slots:{default:[p]},$$scope:{ctx:e}}}),{c(){(0,r.YCL)(t.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),n=!0},p(e,n){const r={};1&n&&(r.isOpen=e[0]),1&n&&(r.toggle=e[4]),1024&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||((0,r.Ui)(t.$$.fragment,e),n=!0)},o(e){(0,r.etI)(t.$$.fragment,e),n=!1},d(e){(0,r.vpE)(t,e)}}}function g(e){let t;return{c(){t=(0,r.fLW)("Lorem ipsum lorem dolor sit amet.")},m(e,n){(0,r.$Tr)(e,t,n)},d(e){e&&(0,r.ogt)(t)}}}function f(e){let t,n;return t=new o.Z({props:{color:"primary",heading:"Hey here's header text",$$slots:{default:[g]},$$scope:{ctx:e}}}),{c(){(0,r.YCL)(t.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),n=!0},p(e,n){const r={};1024&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||((0,r.Ui)(t.$$.fragment,e),n=!0)},o(e){(0,r.etI)(t.$$.fragment,e),n=!1},d(e){(0,r.vpE)(t,e)}}}function h(e){let t;return{c(){t=(0,r.fLW)("I am an alert and I can be dismissed!")},m(e,n){(0,r.$Tr)(e,t,n)},d(e){e&&(0,r.ogt)(t)}}}function u(e){let t,n;return t=new o.Z({props:{color:"info",dismissible:!0,$$slots:{default:[h]},$$scope:{ctx:e}}}),{c(){(0,r.YCL)(t.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),n=!0},p(e,n){const r={};1024&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||((0,r.Ui)(t.$$.fragment,e),n=!0)},o(e){(0,r.etI)(t.$$.fragment,e),n=!1},d(e){(0,r.vpE)(t,e)}}}function y(e){let t,n,o,s,a;return{c(){t=(0,r.fLW)("I can be controlled via "),n=(0,r.bGB)("code"),n.textContent="isOpen",o=(0,r.fLW)(" and "),s=(0,r.bGB)("code"),s.textContent="toggle",a=(0,r.fLW)(".")},m(e,l){(0,r.$Tr)(e,t,l),(0,r.$Tr)(e,n,l),(0,r.$Tr)(e,o,l),(0,r.$Tr)(e,s,l),(0,r.$Tr)(e,a,l)},p:r.ZTd,d(e){e&&((0,r.ogt)(t),(0,r.ogt)(n),(0,r.ogt)(o),(0,r.ogt)(s),(0,r.ogt)(a))}}}function x(e){let t;return{c(){t=(0,r.fLW)("You can toggle me here.")},m(e,n){(0,r.$Tr)(e,t,n)},d(e){e&&(0,r.ogt)(t)}}}function b(e){let t,n,s,l;return t=new o.Z({props:{color:"primary",isOpen:e[0],toggle:e[5],$$slots:{default:[y]},$$scope:{ctx:e}}}),s=new a.zx({props:{color:"danger",$$slots:{default:[x]},$$scope:{ctx:e}}}),s.$on("click",e[2]),{c(){(0,r.YCL)(t.$$.fragment),n=(0,r.DhX)(),(0,r.YCL)(s.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),(0,r.$Tr)(e,n,o),(0,r.yef)(s,e,o),l=!0},p(e,n){const r={};1&n&&(r.isOpen=e[0]),1&n&&(r.toggle=e[5]),1024&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const o={};1024&n&&(o.$$scope={dirty:n,ctx:e}),s.$set(o)},i(e){l||((0,r.Ui)(t.$$.fragment,e),(0,r.Ui)(s.$$.fragment,e),l=!0)},o(e){(0,r.etI)(t.$$.fragment,e),(0,r.etI)(s.$$.fragment,e),l=!1},d(e){e&&(0,r.ogt)(n),(0,r.vpE)(t,e),(0,r.vpE)(s,e)}}}function T(e){let t,n,o,s;return{c(){t=(0,r.bGB)("h4"),t.textContent="Dark Theme",n=(0,r.fLW)("\n    I am a "),o=(0,r.bGB)("code"),o.textContent="dark",s=(0,r.fLW)(" themed primary alert!"),(0,r.Ljt)(t,"class","alert-heading")},m(e,a){(0,r.$Tr)(e,t,a),(0,r.$Tr)(e,n,a),(0,r.$Tr)(e,o,a),(0,r.$Tr)(e,s,a)},p:r.ZTd,d(e){e&&((0,r.ogt)(t),(0,r.ogt)(n),(0,r.ogt)(o),(0,r.ogt)(s))}}}function v(e){let t,n,o;return{c(){t=(0,r.fLW)("I am a "),n=(0,r.bGB)("code"),n.textContent="light",o=(0,r.fLW)(" themed primary alert!")},m(e,s){(0,r.$Tr)(e,t,s),(0,r.$Tr)(e,n,s),(0,r.$Tr)(e,o,s)},p:r.ZTd,d(e){e&&((0,r.ogt)(t),(0,r.ogt)(n),(0,r.ogt)(o))}}}function A(e){let t,n,s,a;return t=new o.Z({props:{theme:"dark",color:"primary",isOpen:!0,$$slots:{default:[T]},$$scope:{ctx:e}}}),s=new o.Z({props:{theme:"light",heading:"Light Theme",color:"primary",isOpen:!0,$$slots:{default:[v]},$$scope:{ctx:e}}}),{c(){(0,r.YCL)(t.$$.fragment),n=(0,r.DhX)(),(0,r.YCL)(s.$$.fragment)},m(e,o){(0,r.yef)(t,e,o),(0,r.$Tr)(e,n,o),(0,r.yef)(s,e,o),a=!0},p(e,n){const r={};1024&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const o={};1024&n&&(o.$$scope={dirty:n,ctx:e}),s.$set(o)},i(e){a||((0,r.Ui)(t.$$.fragment,e),(0,r.Ui)(s.$$.fragment,e),a=!0)},o(e){(0,r.etI)(t.$$.fragment,e),(0,r.etI)(s.$$.fragment,e),a=!1},d(e){e&&(0,r.ogt)(n),(0,r.vpE)(t,e),(0,r.vpE)(s,e)}}}function C(e){let t,n,o,a,l,c,d,p,g,h,y,x,T,v,C,j;return t=new s.YS({props:{$$slots:{default:[i,({args:e})=>({9:e}),({args:e})=>e?512:0]},$$scope:{ctx:e}}}),o=new s.oG({props:{name:"Basic",args:{children:"Hello, I'm a warning message.",color:"warning"}}}),l=new s.oG({props:{name:"Colors",$$slots:{default:[m]},$$scope:{ctx:e}}}),d=new s.oG({props:{name:"Fade",$$slots:{default:[$]},$$scope:{ctx:e}}}),g=new s.oG({props:{name:"Header",$$slots:{default:[f]},$$scope:{ctx:e}}}),y=new s.oG({props:{name:"Dismissible",$$slots:{default:[u]},$$scope:{ctx:e}}}),T=new s.oG({props:{name:"Controlled",$$slots:{default:[b]},$$scope:{ctx:e}}}),C=new s.oG({props:{name:"Theming",$$slots:{default:[A]},$$scope:{ctx:e}}}),{c(){(0,r.YCL)(t.$$.fragment),n=(0,r.DhX)(),(0,r.YCL)(o.$$.fragment),a=(0,r.DhX)(),(0,r.YCL)(l.$$.fragment),c=(0,r.DhX)(),(0,r.YCL)(d.$$.fragment),p=(0,r.DhX)(),(0,r.YCL)(g.$$.fragment),h=(0,r.DhX)(),(0,r.YCL)(y.$$.fragment),x=(0,r.DhX)(),(0,r.YCL)(T.$$.fragment),v=(0,r.DhX)(),(0,r.YCL)(C.$$.fragment)},m(e,s){(0,r.yef)(t,e,s),(0,r.$Tr)(e,n,s),(0,r.yef)(o,e,s),(0,r.$Tr)(e,a,s),(0,r.yef)(l,e,s),(0,r.$Tr)(e,c,s),(0,r.yef)(d,e,s),(0,r.$Tr)(e,p,s),(0,r.yef)(g,e,s),(0,r.$Tr)(e,h,s),(0,r.yef)(y,e,s),(0,r.$Tr)(e,x,s),(0,r.yef)(T,e,s),(0,r.$Tr)(e,v,s),(0,r.yef)(C,e,s),j=!0},p(e,[n]){const r={};1536&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const o={};1024&n&&(o.$$scope={dirty:n,ctx:e}),l.$set(o);const s={};1025&n&&(s.$$scope={dirty:n,ctx:e}),d.$set(s);const a={};1024&n&&(a.$$scope={dirty:n,ctx:e}),g.$set(a);const i={};1024&n&&(i.$$scope={dirty:n,ctx:e}),y.$set(i);const c={};1025&n&&(c.$$scope={dirty:n,ctx:e}),T.$set(c);const m={};1024&n&&(m.$$scope={dirty:n,ctx:e}),C.$set(m)},i(e){j||((0,r.Ui)(t.$$.fragment,e),(0,r.Ui)(o.$$.fragment,e),(0,r.Ui)(l.$$.fragment,e),(0,r.Ui)(d.$$.fragment,e),(0,r.Ui)(g.$$.fragment,e),(0,r.Ui)(y.$$.fragment,e),(0,r.Ui)(T.$$.fragment,e),(0,r.Ui)(C.$$.fragment,e),j=!0)},o(e){(0,r.etI)(t.$$.fragment,e),(0,r.etI)(o.$$.fragment,e),(0,r.etI)(l.$$.fragment,e),(0,r.etI)(d.$$.fragment,e),(0,r.etI)(g.$$.fragment,e),(0,r.etI)(y.$$.fragment,e),(0,r.etI)(T.$$.fragment,e),(0,r.etI)(C.$$.fragment,e),j=!1},d(e){e&&((0,r.ogt)(n),(0,r.ogt)(a),(0,r.ogt)(c),(0,r.ogt)(p),(0,r.ogt)(h),(0,r.ogt)(x),(0,r.ogt)(v)),(0,r.vpE)(t,e),(0,r.vpE)(o,e),(0,r.vpE)(l,e),(0,r.vpE)(d,e),(0,r.vpE)(g,e),(0,r.vpE)(y,e),(0,r.vpE)(T,e),(0,r.vpE)(C,e)}}}const j={title:"Stories/Alert",component:o.Z,parameters:{controls:{exclude:/^(default)$/g}},argTypes:{class:{control:!1,table:{disable:!0}},children:{control:""},closeClassName:{control:!1,table:{disable:!0}},closeAriaLabel:{control:!1,table:{disable:!0}},color:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"]},dismissible:{control:"boolean"},fade:{control:"boolean"},heading:{control:""},isOpen:{control:"boolean"},theme:{control:{type:"select"},options:["dark","light","auto"],description:"The theme style to apply.",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}},toggle:{control:!1,table:{disable:!0}},transition:{control:!1,table:{disable:!0}},"heading ":{description:"This is the slot to use for custom headings.",table:{category:"slots",type:{summary:"any"},defaultValue:{summary:"empty"}}},"default ":{description:"This is the default content slot.",table:{category:"slots",type:{summary:"any"},defaultValue:{summary:"empty"}}}},args:{class:"",children:void 0,color:"success",closeClassName:"",closeAriaLabel:"Close",dismissible:!1,fade:!0,heading:"",isOpen:!0,theme:null}};function w(e,t,n){let o=!0;return[o,["primary","secondary","success","danger","warning","info","light","dark"],()=>n(0,o=!o),function(t){r.cKT.call(this,e,t)},()=>n(0,o=!1),()=>n(0,o=!1)]}class L extends r.f_C{constructor(e){super(),(0,r.S1n)(this,e,w,C,r.N8,{})}}const{default:I}=n(5649),k=I(L,{meta:{title:"Stories/Alert"},stories:{"tpl:default":{name:"default",template:!0,source:"<Alert {...args} on:click></Alert>",hasArgs:!0},Basic:{name:"Basic",template:!1,source:"",hasArgs:!1},Colors:{name:"Colors",template:!1,source:'{#each colors as color}\n  <Alert {color}>\n    <h4 class="alert-heading text-capitalize">Heading</h4>\n    This is the contents of a&nbsp;<b><u>{color}</u></b> alert message.&nbsp;\n\n    <a href="#todo" class="alert-link">Also, links are colored to match the assigned alert color! </a>\n  </Alert>\n{/each}',hasArgs:!1},Fade:{name:"Fade",template:!1,source:'<Alert color="primary" {isOpen} toggle={() => (isOpen = false)} fade={false}>\n  I am a primary alert and I can be dismissed without animating!\n</Alert>',hasArgs:!1},Header:{name:"Header",template:!1,source:'<Alert color="primary" heading="Hey here\'s header text">Lorem ipsum lorem dolor sit amet.</Alert>',hasArgs:!1},Dismissible:{name:"Dismissible",template:!1,source:'<Alert color="info" dismissible>I am an alert and I can be dismissed!</Alert>',hasArgs:!1},Controlled:{name:"Controlled",template:!1,source:'<Alert color="primary" {isOpen} toggle={() => (isOpen = false)}>\n  I can be controlled via <code>isOpen</code> and <code>toggle</code>.\n</Alert>\n\n<Button color="danger" on:click={toggle}>You can toggle me here.</Button>',hasArgs:!1},Theming:{name:"Theming",template:!1,source:'<Alert theme="dark" color="primary" isOpen={true}>\n  <h4 class="alert-heading">Dark Theme</h4>\n  I am a&nbsp;<code>dark</code> themed primary alert!\n</Alert>\n\n<Alert theme="light" heading="Light Theme" color="primary" isOpen={true}>\n  I am a&nbsp;<code>light</code> themed primary alert!\n</Alert>',hasArgs:!1}},allocatedIds:["default","Story","Template","Button"]},j);t.default=k.meta;const O=k.stories.Basic,E=k.stories.Colors,B=k.stories.Fade,Y=k.stories.Header,_=k.stories.Dismissible,D=k.stories.Controlled,U=k.stories.Theming},4925:function(e,t,n){"use strict";n.r(t),n(959);var r=n(1527),o=n(5519),s=n(5945),a=n(8462);function l(e){const t=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h_,{title:"Components/Alerts"}),"\n",(0,r.jsxs)(t.h1,{id:"alerts-bootstrap-alerts",children:["Alerts ",(0,r.jsx)("small",{class:"bootstrap-docs",children:(0,r.jsx)(t.a,{href:"https://getbootstrap.com/docs/5.3/components/alerts/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Alerts"})})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"<Alert>"})," component provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages. You can read more about"]}),"\n",(0,r.jsx)(s.Xz,{children:(0,r.jsx)(s.oG,{of:a.Basic})}),"\n",(0,r.jsx)("div",{id:"alert-controls",children:(0,r.jsx)(s.ZX,{of:a.Basic})}),"\n",(0,r.jsx)(t.h2,{id:"colors",children:"Colors"}),"\n",(0,r.jsx)(s.Xz,{withSource:"none",children:(0,r.jsx)(s.oG,{of:a.Colors})}),"\n",(0,r.jsx)(s.Hw,{dark:!0,language:"html",code:"\n<script lang=\"ts\">\n  import { Alert } from '@sveltestrap/sveltestrap';\n  const colors = [\n    'primary',\n    'secondary',\n    'success',\n    'danger',\n    'warning',\n    'info',\n    'light',\n    'dark'\n  ];\n<\/script>\n\n{#each colors as color}\n  <Alert {color}>\n    <h4 class=\"alert-heading text-capitalize\">Heading</h4>\n   This is the contents of my alert message.\n\n    <a href=\"#todo\" class=\"alert-link\">\n      Also, alert-links are colored to match the alert color!\n    </a>\n  </Alert>\n{/each}\n"}),"\n",(0,r.jsx)(t.h2,{id:"fade",children:"Fade"}),"\n",(0,r.jsx)("p",{children:(0,r.jsxs)(t.p,{children:["You can disable the ",(0,r.jsx)("code",{children:"Alert"})," fade transition by setting the ",(0,r.jsx)("code",{children:"fade"})," prop to ",(0,r.jsx)("code",{children:"false"}),"."]})}),"\n",(0,r.jsx)(s.Xz,{withSource:"none",children:(0,r.jsx)(s.oG,{of:a.Fade})}),"\n",(0,r.jsx)(s.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Alert } from \'@sveltestrap/sveltestrap\';\n  let isOpen = true;\n  const toggle = () => {\n    visible = !visible;\n  };\n<\/script>\n\n<Alert\n  color="primary"\n  {isOpen}\n  {toggle}\n  fade={false}\n>\n  I am a primary alert and I can be dismissed without animating!\n</Alert>\n'}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(s.Xz,{withSource:"none",children:(0,r.jsx)(s.oG,{of:a.Header})}),"\n",(0,r.jsx)(s.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Alert } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Alert color="primary" heading="Hey here\'s header text">\n  Lorem ipsum lorem dolor sit amet.\n</Alert>\n'}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(s.Xz,{withSource:"none",children:(0,r.jsx)(s.oG,{of:a.Controlled})}),"\n",(0,r.jsx)(s.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Alert, Button } from \'@sveltestrap/sveltestrap\';\n  let isOpen = true;\n  const toggle = () => {\n    visible = !visible;\n  };\n<\/script>\n\n<Alert color="primary" isOpen={isOpen} toggle={() => (isOpen = false)}>\n  I can be controlled via <code>isOpen</code> and <code>toggle</code>.\n</Alert>\n\n<Button color="danger" on:click={toggle}>\n  You can toggle me here.\n</Button>\n'}),"\n",(0,r.jsx)(t.h2,{id:"dismissible",children:"Dismissible"}),"\n",(0,r.jsx)(s.Xz,{withSource:"none",children:(0,r.jsx)(s.oG,{of:a.Dismissible})}),"\n",(0,r.jsx)(s.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Alert } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Alert color="info" dismissible>\n  I am an alert and I can be dismissed!\n</Alert>\n'}),"\n",(0,r.jsx)(t.h2,{id:"theming",children:"Theming"}),"\n",(0,r.jsx)(s.Xz,{withSource:"none",children:(0,r.jsx)(s.oG,{of:a.Theming})}),"\n",(0,r.jsx)(s.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Alert } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Alert theme="dark" color="primary" isOpen={true}>\n  <h4 class="alert-heading">Dark Theme</h4>\n  I am a <code>dark</code> themed primary alert!\n</Alert>\n\n<Alert theme="light" heading="Light Theme" color="primary" isOpen={true}>\n  I am a <code>light</code> themed primary alert!\n</Alert>\n'})]})}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},8039:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8039,e.exports=t},3354:function(e,t,n){"use strict";var r=n(959),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},1527:function(e,t,n){"use strict";e.exports=n(3354)}}]);