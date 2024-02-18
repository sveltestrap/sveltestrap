/*! For license information please see Popover-Popover-mdx.3336ebec.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sveltestrap_sveltestrap=self.webpackChunk_sveltestrap_sveltestrap||[]).push([[5167,4388],{5519:function(t,e,o){"use strict";o.d(e,{NF:function(){return i},Zo:function(){return l},ah:function(){return s},pC:function(){return r}});var n=o(959);const r=n.createContext({});function i(t){return function(e){const o=s(e.components);return n.createElement(t,{...e,allComponents:o})}}function s(t){const e=n.useContext(r);return n.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const c={};function l({components:t,children:e,disableParentContext:o}){let i;return i=o?"function"==typeof t?t({}):t||c:s(t),n.createElement(r.Provider,{value:i},e)}},508:function(t,e,o){"use strict";o.r(e),o.d(e,{Basic:function(){return R},Dismissible:function(){return A},OutsideClick:function(){return M},Placement:function(){return N},Theming:function(){return V},Triggers:function(){return F}});var n=o(579),r=(o(206),o(593)),i=o(3290),s=o(7545);function c(t,e,o){const n=t.slice();return n[3]=e[o],n[5]=o,n}function l(t){let e,o,r=t[6].placement+"";return{c(){e=(0,n.fLW)("Show on "),o=(0,n.fLW)(r)},m(t,r){(0,n.$Tr)(t,e,r),(0,n.$Tr)(t,o,r)},p(t,e){64&e&&r!==(r=t[6].placement+"")&&(0,n.rTO)(o,r)},d(t){t&&((0,n.ogt)(e),(0,n.ogt)(o))}}}function a(t){let e;return{c(){e=(0,n.fLW)("This is a Popover on the top of the trigger.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function p(t){let e,o;const i=[t[6],{target:"btn-top-basic"},{style:"dark"===t[6].theme?"color: #fff;":""}];let s={$$slots:{default:[a]},$$scope:{ctx:t}};for(let t=0;t<i.length;t+=1)s=(0,n.f0i)(s,i[t]);return e=new r.Z({props:s}),{c(){(0,n.YCL)(e.$$.fragment)},m(t,r){(0,n.yef)(e,t,r),o=!0},p(t,o){const r=64&o?(0,n.LoY)(i,[(0,n.gCg)(t[6]),i[1],{style:"dark"===t[6].theme?"color: #fff;":""}]):{};128&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){o||((0,n.Ui)(e.$$.fragment,t),o=!0)},o(t){(0,n.etI)(e.$$.fragment,t),o=!1},d(t){(0,n.vpE)(e,t)}}}function d(t){let e,o,r,i,c=t[6];e=new s.zx({props:{color:"primary",id:"btn-top-basic",$$slots:{default:[l]},$$scope:{ctx:t}}});let a=p(t);return{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),a.c(),r=(0,n.cSb)()},m(t,s){(0,n.yef)(e,t,s),(0,n.$Tr)(t,o,s),a.m(t,s),(0,n.$Tr)(t,r,s),i=!0},p(t,o){const i={};192&o&&(i.$$scope={dirty:o,ctx:t}),e.$set(i),64&o&&(0,n.N8)(c,c=t[6])?((0,n.dvw)(),(0,n.etI)(a,1,1,n.ZTd),(0,n.gbL)(),a=p(t),a.c(),(0,n.Ui)(a,1),a.m(r.parentNode,r)):a.p(t,o)},i(t){i||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(a),i=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(a),i=!1},d(t){t&&((0,n.ogt)(o),(0,n.ogt)(r)),(0,n.vpE)(e,t),a.d(t)}}}function g(t){let e,o,r=t[3]+"";return{c(){e=(0,n.fLW)("Show on "),o=(0,n.fLW)(r)},m(t,r){(0,n.$Tr)(t,e,r),(0,n.$Tr)(t,o,r)},p:n.ZTd,d(t){t&&((0,n.ogt)(e),(0,n.ogt)(o))}}}function $(t){let e,o,r,i=t[3]+"";return{c(){e=(0,n.fLW)("This is a Popover on the "),o=(0,n.fLW)(i),r=(0,n.fLW)(" of the trigger.\n      ")},m(t,i){(0,n.$Tr)(t,e,i),(0,n.$Tr)(t,o,i),(0,n.$Tr)(t,r,i)},p:n.ZTd,d(t){t&&((0,n.ogt)(e),(0,n.ogt)(o),(0,n.ogt)(r))}}}function m(t){let e,o,i,c;return e=new s.zx({props:{color:t[1][t[5]],id:"btn-"+t[3],$$slots:{default:[g]},$$scope:{ctx:t}}}),i=new r.Z({props:{target:"btn-"+t[3],placement:t[3],title:"Popover "+t[3],$$slots:{default:[$]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(i.$$.fragment)},m(t,r){(0,n.yef)(e,t,r),(0,n.$Tr)(t,o,r),(0,n.yef)(i,t,r),c=!0},p(t,o){const n={};128&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const r={};128&o&&(r.$$scope={dirty:o,ctx:t}),i.$set(r)},i(t){c||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(i.$$.fragment,t),c=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(i.$$.fragment,t),c=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(i,t)}}}function u(t){let e,o,r=(0,n.NXn)(t[0]),i=[];for(let e=0;e<r.length;e+=1)i[e]=m(c(t,r,e));const s=t=>(0,n.etI)(i[t],1,1,(()=>{i[t]=null}));return{c(){e=(0,n.bGB)("div");for(let t=0;t<i.length;t+=1)i[t].c();(0,n.Ljt)(e,"class","horizontal")},m(t,r){(0,n.$Tr)(t,e,r);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null);o=!0},p(t,o){if(3&o){let l;for(r=(0,n.NXn)(t[0]),l=0;l<r.length;l+=1){const s=c(t,r,l);i[l]?(i[l].p(s,o),(0,n.Ui)(i[l],1)):(i[l]=m(s),i[l].c(),(0,n.Ui)(i[l],1),i[l].m(e,null))}for((0,n.dvw)(),l=r.length;l<i.length;l+=1)s(l);(0,n.gbL)()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)(0,n.Ui)(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)(0,n.etI)(i[t]);o=!1},d(t){t&&(0,n.ogt)(e),(0,n.RMB)(i,t)}}}function f(t){let e;return{c(){e=(0,n.fLW)("Click me")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function h(t){let e;return{c(){e=(0,n.fLW)("This is a Popover with click as the trigger.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function v(t){let e;return{c(){e=(0,n.fLW)("Hover me")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function b(t){let e;return{c(){e=(0,n.fLW)("This is a Popover with hover as the trigger.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function y(t){let e;return{c(){e=(0,n.fLW)("Focus me")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function k(t){let e;return{c(){e=(0,n.fLW)("This is a Popover with focus as the trigger.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function x(t){let e,o,i,c,l,a,p,d,g,$,m,u,x,P,w,T;return i=new s.zx({props:{color:"primary",id:"btn-trigger-click",$$slots:{default:[f]},$$scope:{ctx:t}}}),l=new r.Z({props:{trigger:"click",placement:"top",target:"btn-trigger-click",title:"Popover on click",$$slots:{default:[h]},$$scope:{ctx:t}}}),d=new s.zx({props:{color:"warning",id:"btn-trigger-hover",$$slots:{default:[v]},$$scope:{ctx:t}}}),$=new r.Z({props:{trigger:"hover",placement:"right",target:"btn-trigger-hover",title:"Popover with hover",$$slots:{default:[b]},$$scope:{ctx:t}}}),x=new s.zx({props:{color:"danger",id:"btn-trigger-focus",$$slots:{default:[y]},$$scope:{ctx:t}}}),w=new r.Z({props:{trigger:"focus",placement:"bottom",target:"btn-trigger-focus",title:"Popover with focus",$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){e=(0,n.bGB)("div"),o=(0,n.bGB)("div"),(0,n.YCL)(i.$$.fragment),c=(0,n.DhX)(),(0,n.YCL)(l.$$.fragment),a=(0,n.DhX)(),p=(0,n.bGB)("div"),(0,n.YCL)(d.$$.fragment),g=(0,n.DhX)(),(0,n.YCL)($.$$.fragment),m=(0,n.DhX)(),u=(0,n.bGB)("div"),(0,n.YCL)(x.$$.fragment),P=(0,n.DhX)(),(0,n.YCL)(w.$$.fragment),(0,n.Ljt)(e,"class","horizontal")},m(t,r){(0,n.$Tr)(t,e,r),(0,n.R3I)(e,o),(0,n.yef)(i,o,null),(0,n.R3I)(o,c),(0,n.yef)(l,o,null),(0,n.R3I)(e,a),(0,n.R3I)(e,p),(0,n.yef)(d,p,null),(0,n.R3I)(p,g),(0,n.yef)($,p,null),(0,n.R3I)(e,m),(0,n.R3I)(e,u),(0,n.yef)(x,u,null),(0,n.R3I)(u,P),(0,n.yef)(w,u,null),T=!0},p(t,e){const o={};128&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o);const n={};128&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n);const r={};128&e&&(r.$$scope={dirty:e,ctx:t}),d.$set(r);const s={};128&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const c={};128&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c);const a={};128&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a)},i(t){T||((0,n.Ui)(i.$$.fragment,t),(0,n.Ui)(l.$$.fragment,t),(0,n.Ui)(d.$$.fragment,t),(0,n.Ui)($.$$.fragment,t),(0,n.Ui)(x.$$.fragment,t),(0,n.Ui)(w.$$.fragment,t),T=!0)},o(t){(0,n.etI)(i.$$.fragment,t),(0,n.etI)(l.$$.fragment,t),(0,n.etI)(d.$$.fragment,t),(0,n.etI)($.$$.fragment,t),(0,n.etI)(x.$$.fragment,t),(0,n.etI)(w.$$.fragment,t),T=!1},d(t){t&&(0,n.ogt)(e),(0,n.vpE)(i),(0,n.vpE)(l),(0,n.vpE)(d),(0,n.vpE)($),(0,n.vpE)(x),(0,n.vpE)(w)}}}function P(t){let e;return{c(){e=(0,n.fLW)("Click me")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function w(t){let e;return{c(){e=(0,n.fLW)("This Popover is dismissesed when any click occurs.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function T(t){let e;return{c(){e=(0,n.bGB)("div"),e.innerHTML="<i>Hello</i> <b>World!</b>",(0,n.Ljt)(e,"slot","title")},m(t,o){(0,n.$Tr)(t,e,o)},p:n.ZTd,d(t){t&&(0,n.ogt)(e)}}}function C(t){let e,o,i,c;return e=new s.zx({props:{color:"primary",id:"btn-dismissible",$$slots:{default:[P]},$$scope:{ctx:t}}}),i=new r.Z({props:{placement:"right",target:"btn-dismissible",dismissible:!0,$$slots:{title:[T],default:[w]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(i.$$.fragment)},m(t,r){(0,n.yef)(e,t,r),(0,n.$Tr)(t,o,r),(0,n.yef)(i,t,r),c=!0},p(t,o){const n={};128&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const r={};128&o&&(r.$$scope={dirty:o,ctx:t}),i.$set(r)},i(t){c||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(i.$$.fragment,t),c=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(i.$$.fragment,t),c=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(i,t)}}}function L(t){let e;return{c(){e=(0,n.fLW)("Click me")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function B(t){let e;return{c(){e=(0,n.fLW)("You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function j(t){let e;return{c(){e=(0,n.bGB)("div"),e.innerHTML="<i>Hello</i> <b>World!</b>",(0,n.Ljt)(e,"slot","title")},m(t,o){(0,n.$Tr)(t,e,o)},p:n.ZTd,d(t){t&&(0,n.ogt)(e)}}}function O(t){let e,o,i,c;return e=new s.zx({props:{color:"primary",id:"btn-outside-click",$$slots:{default:[L]},$$scope:{ctx:t}}}),i=new r.Z({props:{placement:"right",target:"btn-outside-click",hideOnOutsideClick:!0,$$slots:{title:[j],default:[B]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(i.$$.fragment)},m(t,r){(0,n.yef)(e,t,r),(0,n.$Tr)(t,o,r),(0,n.yef)(i,t,r),c=!0},p(t,o){const n={};128&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const r={};128&o&&(r.$$scope={dirty:o,ctx:t}),i.$set(r)},i(t){c||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(i.$$.fragment,t),c=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(i.$$.fragment,t),c=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(i,t)}}}function I(t){let e;return{c(){e=(0,n.fLW)("Show dark theme")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function D(t){let e;return{c(){e=(0,n.fLW)("Show light theme")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function W(t){let e;return{c(){e=(0,n.fLW)("You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function Y(t){let e;return{c(){e=(0,n.bGB)("div"),e.innerHTML="<i>Hello</i> <b>World!</b>",(0,n.Ljt)(e,"slot","title")},m(t,o){(0,n.$Tr)(t,e,o)},p:n.ZTd,d(t){t&&(0,n.ogt)(e)}}}function E(t){let e;return{c(){e=(0,n.fLW)("You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function U(t){let e;return{c(){e=(0,n.bGB)("div"),e.innerHTML="<i>Hello</i> <b>World!</b>",(0,n.Ljt)(e,"slot","title"),(0,n.czc)(e,"color","#fff")},m(t,o){(0,n.$Tr)(t,e,o)},p:n.ZTd,d(t){t&&(0,n.ogt)(e)}}}function S(t){let e,o,i,c,l,a,p,d,g;return o=new s.zx({props:{color:"dark",id:"btn-dark-theme",$$slots:{default:[I]},$$scope:{ctx:t}}}),c=new s.zx({props:{color:"light",id:"btn-light-theme",$$slots:{default:[D]},$$scope:{ctx:t}}}),a=new r.Z({props:{theme:"light",placement:"right",target:"btn-light-theme",hideOnOutsideClick:!0,$$slots:{title:[Y],default:[W]},$$scope:{ctx:t}}}),d=new r.Z({props:{theme:"dark",placement:"right",target:"btn-dark-theme",hideOnOutsideClick:!0,$$slots:{title:[U],default:[E]},$$scope:{ctx:t}}}),{c(){e=(0,n.bGB)("div"),(0,n.YCL)(o.$$.fragment),i=(0,n.DhX)(),(0,n.YCL)(c.$$.fragment),l=(0,n.DhX)(),(0,n.YCL)(a.$$.fragment),p=(0,n.DhX)(),(0,n.YCL)(d.$$.fragment),(0,n.Ljt)(e,"class","horizontal gap-lg")},m(t,r){(0,n.$Tr)(t,e,r),(0,n.yef)(o,e,null),(0,n.R3I)(e,i),(0,n.yef)(c,e,null),(0,n.$Tr)(t,l,r),(0,n.yef)(a,t,r),(0,n.$Tr)(t,p,r),(0,n.yef)(d,t,r),g=!0},p(t,e){const n={};128&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};128&e&&(r.$$scope={dirty:e,ctx:t}),c.$set(r);const i={};128&e&&(i.$$scope={dirty:e,ctx:t}),a.$set(i);const s={};128&e&&(s.$$scope={dirty:e,ctx:t}),d.$set(s)},i(t){g||((0,n.Ui)(o.$$.fragment,t),(0,n.Ui)(c.$$.fragment,t),(0,n.Ui)(a.$$.fragment,t),(0,n.Ui)(d.$$.fragment,t),g=!0)},o(t){(0,n.etI)(o.$$.fragment,t),(0,n.etI)(c.$$.fragment,t),(0,n.etI)(a.$$.fragment,t),(0,n.etI)(d.$$.fragment,t),g=!1},d(t){t&&((0,n.ogt)(e),(0,n.ogt)(l),(0,n.ogt)(p)),(0,n.vpE)(o),(0,n.vpE)(c),(0,n.vpE)(a,t),(0,n.vpE)(d,t)}}}function X(t){let e,o,r,s,c,l,a,p,g,$,m,f;return e=new i.oG({props:{name:"Basic",source:t[2],$$slots:{default:[d,({args:t})=>({6:t}),({args:t})=>t?64:0]},$$scope:{ctx:t}}}),r=new i.oG({props:{name:"Placement",$$slots:{default:[u]},$$scope:{ctx:t}}}),c=new i.oG({props:{name:"Triggers",$$slots:{default:[x]},$$scope:{ctx:t}}}),a=new i.oG({props:{name:"Dismissible",$$slots:{default:[C]},$$scope:{ctx:t}}}),g=new i.oG({props:{name:"OutsideClick",$$slots:{default:[O]},$$scope:{ctx:t}}}),m=new i.oG({props:{name:"Theming",$$slots:{default:[S]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(r.$$.fragment),s=(0,n.DhX)(),(0,n.YCL)(c.$$.fragment),l=(0,n.DhX)(),(0,n.YCL)(a.$$.fragment),p=(0,n.DhX)(),(0,n.YCL)(g.$$.fragment),$=(0,n.DhX)(),(0,n.YCL)(m.$$.fragment)},m(t,i){(0,n.yef)(e,t,i),(0,n.$Tr)(t,o,i),(0,n.yef)(r,t,i),(0,n.$Tr)(t,s,i),(0,n.yef)(c,t,i),(0,n.$Tr)(t,l,i),(0,n.yef)(a,t,i),(0,n.$Tr)(t,p,i),(0,n.yef)(g,t,i),(0,n.$Tr)(t,$,i),(0,n.yef)(m,t,i),f=!0},p(t,[o]){const n={};192&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const i={};128&o&&(i.$$scope={dirty:o,ctx:t}),r.$set(i);const s={};128&o&&(s.$$scope={dirty:o,ctx:t}),c.$set(s);const l={};128&o&&(l.$$scope={dirty:o,ctx:t}),a.$set(l);const p={};128&o&&(p.$$scope={dirty:o,ctx:t}),g.$set(p);const d={};128&o&&(d.$$scope={dirty:o,ctx:t}),m.$set(d)},i(t){f||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(r.$$.fragment,t),(0,n.Ui)(c.$$.fragment,t),(0,n.Ui)(a.$$.fragment,t),(0,n.Ui)(g.$$.fragment,t),(0,n.Ui)(m.$$.fragment,t),f=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(r.$$.fragment,t),(0,n.etI)(c.$$.fragment,t),(0,n.etI)(a.$$.fragment,t),(0,n.etI)(g.$$.fragment,t),(0,n.etI)(m.$$.fragment,t),f=!1},d(t){t&&((0,n.ogt)(o),(0,n.ogt)(s),(0,n.ogt)(l),(0,n.ogt)(p),(0,n.ogt)($)),(0,n.vpE)(e,t),(0,n.vpE)(r,t),(0,n.vpE)(c,t),(0,n.vpE)(a,t),(0,n.vpE)(g,t),(0,n.vpE)(m,t)}}}const _={title:"Stories/Popovers",component:r.Z,parameters:{controls:{exclude:/^(default)$/g}},argTypes:{animation:{control:"boolean"},children:{control:""},class:{control:!1,table:{disable:!0}},container:{control:!1,table:{disable:!0}},dismissible:{control:"boolean"},hideOnOutsideClick:{control:"boolean"},isOpen:{control:"boolean"},placement:{control:{type:"select"},options:["top","left","right","bottom"]},target:{control:!1,table:{disable:!0}},theme:{control:{type:"select"},options:["dark","light","auto"],description:"The theme style to apply.",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}},title:{control:""},trigger:{control:{type:"select"},options:["click","hover","focus"]},"title ":{description:"This slot is used for provided a custom title.",table:{category:"slots",type:{summary:"any"},defaultValue:{summary:"empty"}}},"default ":{description:"This is the default content slot.",table:{category:"slots",type:{summary:"any"},defaultValue:{summary:"empty"}}}},args:{animation:!0,children:"",container:void 0,dismissible:!1,hideOnOutsideClick:!1,isOpen:!1,placement:"top",theme:null,title:"Popover",trigger:"click"}};function H(t){return[["top","right","left","bottom"],["primary","success","danger","warning"],'<Button color="primary" id="btn-top-basic">Show on top</Button>\n\n<Popover\n  target="btn-top-basic"\n  placement="top"\n  title="Popover Top">\n  This is a Popover on the top of the trigger.\n</Popover>']}class z extends n.f_C{constructor(t){super(),(0,n.S1n)(this,t,H,X,n.N8,{})}}const{default:G}=o(6909),Z=G(z,{meta:{title:"Stories/Popovers"},stories:{Basic:{name:"Basic",template:!1,source:"<Button color=\"primary\" id=\"btn-top-basic\">Show on {args.placement}</Button>\n{#key args}\n  <Popover {...args} target=\"btn-top-basic\" style={args.theme === 'dark' ? 'color: #fff;' : ''}\n    >This is a Popover on the top of the trigger.</Popover\n  >\n{/key}",hasArgs:!0},Placement:{name:"Placement",template:!1,source:'<div class="horizontal">\n  {#each placements as placement, index}\n    <Button color={colors[index]} id="btn-{placement}">Show on {placement}</Button>\n\n    <Popover target="btn-{placement}" {placement} title="Popover {placement}">\n      This is a Popover on the {placement} of the trigger.\n    </Popover>\n  {/each}\n</div>',hasArgs:!1},Triggers:{name:"Triggers",template:!1,source:'<div class="horizontal">\n  <div>\n    <Button color="primary" id="btn-trigger-click">Click me</Button>\n    <Popover trigger="click" placement="top" target="btn-trigger-click" title="Popover on click">\n      This is a Popover with click as the trigger.\n    </Popover>\n  </div>\n  <div>\n    <Button color="warning" id="btn-trigger-hover">Hover me</Button>\n    <Popover trigger="hover" placement="right" target="btn-trigger-hover" title="Popover with hover">\n      This is a Popover with hover as the trigger.\n    </Popover>\n  </div>\n  <div>\n    <Button color="danger" id="btn-trigger-focus">Focus me</Button>\n    <Popover trigger="focus" placement="bottom" target="btn-trigger-focus" title="Popover with focus">\n      This is a Popover with focus as the trigger.\n    </Popover>\n  </div>\n</div>',hasArgs:!1},Dismissible:{name:"Dismissible",template:!1,source:'<Button color="primary" id="btn-dismissible">Click me</Button>\n\n<Popover placement="right" target="btn-dismissible" dismissible>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  This Popover is dismissesed when any click occurs.\n</Popover>',hasArgs:!1},OutsideClick:{name:"OutsideClick",template:!1,source:'<Button color="primary" id="btn-outside-click">Click me</Button>\n\n<Popover placement="right" target="btn-outside-click" hideOnOutsideClick>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.\n</Popover>',hasArgs:!1},Theming:{name:"Theming",template:!1,source:'<div class="horizontal gap-lg">\n  <Button color="dark" id="btn-dark-theme">Show dark theme</Button>\n  <Button color="light" id="btn-light-theme">Show light theme</Button>\n</div>\n\n<Popover theme="light" placement="right" target="btn-light-theme" hideOnOutsideClick>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.\n</Popover>\n\n<Popover theme="dark" placement="right" target="btn-dark-theme" hideOnOutsideClick>\n  <div slot="title" style="color: #fff;">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.\n</Popover>',hasArgs:!1}},allocatedIds:["default","Story","Button"]},_);e.default=Z.meta;const R=Z.stories.Basic,N=Z.stories.Placement,F=Z.stories.Triggers,A=Z.stories.Dismissible,M=Z.stories.OutsideClick,V=Z.stories.Theming},481:function(t,e,o){"use strict";o.r(e),o(959);var n=o(1527),r=o(5519),i=o(2541),s=o(508);function c(t){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2"},(0,r.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h_,{title:"Components/Popovers"}),"\n",(0,n.jsxs)(e.h1,{id:"popovers-bootstrap-popovers",children:["Popovers ",(0,n.jsx)("small",{class:"bootstrap-docs",children:(0,n.jsx)(e.a,{href:"https://getbootstrap.com/docs/4.0/components/popovers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Popovers"})})]}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"<Popover>"})," component is designed to enhance user interaction by providing context-specific information or actions without disrupting the overall user experience."]}),"\n",(0,n.jsx)(i.Xz,{children:(0,n.jsx)(i.oG,{of:s.Basic})}),"\n",(0,n.jsx)("div",{id:"popover-controls",children:(0,n.jsx)(i.ZX,{of:s.Basic})}),"\n",(0,n.jsx)(e.h2,{id:"placement",children:"Placement"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:s.Placement})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:"\n<script lang=\"ts\">\n  import { Button, Popover } from '@sveltestrap/sveltestrap';\n\n  const placements: string[] = ['top', 'right', 'left', 'bottom'];\n  const colors: string[] = ['primary', 'success', 'danger', 'warning'];\n<\/script>\n\n{#each placements as placement, index}\n  <Button color={colors[index]} id=\"btn-{placement}\">Show on {placement}</Button>\n\n  <Popover\n    target=\"btn-{placement}\"\n    {placement}\n    title=\"Popover {placement}\"\n  >\n    This is a Popover on the {placement} of the trigger.\n  </Popover>\n{/each}\n"}),"\n",(0,n.jsx)(e.h2,{id:"triggers",children:"Triggers"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:s.Triggers})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Popover } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<div>\n  <Button color="primary" id="btn-trigger-click">Click me</Button>\n  <Popover\n    trigger="click"\n    placement="top"\n    target="btn-trigger-click"\n    title="Popover on click"\n  >\n    This is a Popover with click as the trigger.\n  </Popover>\n</div>\n\n<div>\n  <Button color="warning" id="btn-trigger-hover">Hover me</Button>\n  <Popover\n    trigger="hover"\n    placement="right"\n    target="btn-trigger-hover"\n    title="Popover with hover"\n  >\n    This is a Popover with hover as the trigger.\n  </Popover>\n</div>\n\n<div>\n  <Button color="danger" id="btn-trigger-focus">Focus me</Button>\n  <Popover\n    trigger="focus"\n    placement="bottom"\n    target="btn-trigger-focus"\n    title="Popover with focus"\n  >\n    This is a Popover with focus as the trigger.\n  </Popover>\n</div>\n'}),"\n",(0,n.jsx)(e.h2,{id:"dismissible",children:"Dismissible"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:s.Dismissible})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Popover } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Button color="primary" id="btn-dismissible">Click me</Button>\n\n<Popover placement="right" target="btn-dismissible" dismissible>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  This Popover is dismissesed when any click occurs.\n</Popover>\n'}),"\n",(0,n.jsx)(e.h2,{id:"outside-click",children:"Outside Click"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:s.OutsideClick})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Popover } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Button color="primary" id="btn-outside-click">Click me</Button>\n\n<Popover placement="right" target="btn-outside-click" hideOnOutsideClick>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.\n</Popover>\n'}),"\n",(0,n.jsx)(e.h2,{id:"theming",children:"Theming"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:s.Theming})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Popover } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Button color="dark" id="btn-dark-theme">Show dark theme</Button>\n<Button color="light" id="btn-light-theme">Show light theme</Button>\n\n<Popover theme="light" placement="right" target="btn-light-theme" hideOnOutsideClick>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.\n</Popover>\n\n<Popover theme="dark" placement="right" target="btn-dark-theme" hideOnOutsideClick>\n  <div slot="title">\n    <i>Hello</i> <b>World!</b>\n  </div>\n  You can click inside this Popover and it will not dismiss. Dismissal will only occur if the click is outside of the popover.\n</Popover>\n'})]})}e.default=function(t={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(c,t)})):c(t)}},8039:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=8039,t.exports=e},3354:function(t,e,o){"use strict";var n=o(959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,o){var n,i={},a=null,p=null;for(n in void 0!==o&&(a=""+o),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(p=e.ref),e)s.call(e,n)&&!l.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:r,type:t,key:a,ref:p,props:i,_owner:c.current}}e.Fragment=i,e.jsx=a,e.jsxs=a},1527:function(t,e,o){"use strict";t.exports=o(3354)}}]);