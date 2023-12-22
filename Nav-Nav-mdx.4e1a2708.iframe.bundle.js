/*! For license information please see Nav-Nav-mdx.4e1a2708.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sveltestrap_sveltestrap=self.webpackChunk_sveltestrap_sveltestrap||[]).push([[3377],{5519:function(n,e,o){"use strict";o.d(e,{NF:function(){return a},Zo:function(){return d},ah:function(){return i},pC:function(){return r}});var t=o(959);const r=t.createContext({});function a(n){return function(e){const o=i(e.components);return t.createElement(n,{...e,allComponents:o})}}function i(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const s={};function d({components:n,children:e,disableParentContext:o}){let a;return a=o?"function"==typeof n?n({}):n||s:i(n),t.createElement(r.Provider,{value:a},e)}},6346:function(n,e,o){"use strict";o.r(e),o(959);var t=o(1527),r=o(5519),a=o(4167),i=o(5677);function s(n){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h_,{title:"Components/Nav"}),"\n",(0,t.jsxs)(e.h1,{id:"nav-bootstrap-nav",children:["Nav ",(0,t.jsx)("small",{class:"bootstrap-docs",children:(0,t.jsx)(e.a,{href:"https://getbootstrap.com/docs/5.3/components/navs-tabs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Nav"})})]}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"<Nav>"})," component is a responsive navigation component that can be customized to appear as tabs, links, pills, and more."]}),"\n",(0,t.jsx)(a.Xz,{children:(0,t.jsx)(a.oG,{of:i.Basic})}),"\n",(0,t.jsx)(a.ZX,{of:i.Basic}),"\n",(0,t.jsx)(e.h2,{id:"tabs",children:"Tabs"}),"\n",(0,t.jsx)(a.Xz,{withSource:"none",children:(0,t.jsx)(a.oG,{of:i.Tabs})}),"\n",(0,t.jsx)(a.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import {\n    Nav,\n    NavItem,\n    Dropdown,\n    DropdownItem,\n    DropdownToggle,\n    DropdownMenu,\n    NavLink\n  } from \'@sveltestrap/sveltestrap\';\n\n  let isOpen = false;\n<\/script>\n\n<Nav tabs>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>\n    <DropdownToggle nav caret>Dropdown</DropdownToggle>\n    <DropdownMenu>\n      <DropdownItem header>Header</DropdownItem>\n      <DropdownItem disabled>Action</DropdownItem>\n      <DropdownItem>Another Action</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem>Another Action</DropdownItem>\n    </DropdownMenu>\n  </Dropdown>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>\n'}),"\n",(0,t.jsx)(e.h2,{id:"pills",children:"Pills"}),"\n",(0,t.jsx)(a.Xz,{withSource:"none",children:(0,t.jsx)(a.oG,{of:i.Pills})}),"\n",(0,t.jsx)(a.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import {\n    Nav,\n    NavItem,\n    Dropdown,\n    DropdownItem,\n    DropdownToggle,\n    DropdownMenu,\n    NavLink\n  } from \'@sveltestrap/sveltestrap\';\n\n  let isOpen = false;\n<\/script>\n\n<Nav pills>\n  <NavItem>\n    <NavLink href="#" active>Link</NavLink>\n  </NavItem>\n  <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>\n    <DropdownToggle nav caret>Dropdown</DropdownToggle>\n    <DropdownMenu>\n      <DropdownItem header>Header</DropdownItem>\n      <DropdownItem disabled>Action</DropdownItem>\n      <DropdownItem>Another Action</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem>Another Action</DropdownItem>\n    </DropdownMenu>\n  </Dropdown>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>\n'}),"\n",(0,t.jsx)(e.h2,{id:"underline",children:"Underline"}),"\n",(0,t.jsx)(a.Xz,{withSource:"none",children:(0,t.jsx)(a.oG,{of:i.Underline})}),"\n",(0,t.jsx)(a.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import {\n    Nav,\n    NavItem,\n    Dropdown,\n    DropdownItem,\n    DropdownToggle,\n    DropdownMenu,\n    NavLink\n  } from \'@sveltestrap/sveltestrap\';\n\n  let isOpen = false;\n<\/script>\n\n<Nav underline>\n  <NavItem>\n    <NavLink href="#" active>Link</NavLink>\n  </NavItem>\n  <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>\n    <DropdownToggle nav caret>Dropdown</DropdownToggle>\n    <DropdownMenu>\n      <DropdownItem header>Header</DropdownItem>\n      <DropdownItem disabled>Action</DropdownItem>\n      <DropdownItem>Another Action</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem>Another Action</DropdownItem>\n    </DropdownMenu>\n  </Dropdown>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>\n'}),"\n",(0,t.jsx)(e.h2,{id:"vertical",children:"Vertical"}),"\n",(0,t.jsx)(a.Xz,{withSource:"none",children:(0,t.jsx)(a.oG,{of:i.Vertical})}),"\n",(0,t.jsx)(a.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import {\n    Nav,\n    NavItem,\n    NavLink\n  } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<p>List Based</p>\n\n<Nav vertical>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>\n\n<hr />\n\n<p>Link based</p>\n\n<Nav vertical>\n  <NavLink href="#">Link</NavLink>\n  <NavLink href="#">Link</NavLink>\n  <NavLink href="#">Another Link</NavLink>\n  <NavLink disabled href="#">Disabled Link</NavLink>\n</Nav>\n'})]})}e.default=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(s,n)})):s(n)}},8039:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=8039,n.exports=e},3354:function(n,e,o){"use strict";var t=o(959),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(n,e,o){var t,a={},p=null,v=null;for(t in void 0!==o&&(p=""+o),void 0!==e.key&&(p=""+e.key),void 0!==e.ref&&(v=e.ref),e)i.call(e,t)&&!d.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===a[t]&&(a[t]=e[t]);return{$$typeof:r,type:n,key:p,ref:v,props:a,_owner:s.current}}e.Fragment=a,e.jsx=p,e.jsxs=p},1527:function(n,e,o){"use strict";n.exports=o(3354)}}]);