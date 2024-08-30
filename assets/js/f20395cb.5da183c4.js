"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[7377],{2180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var o=n(4848),r=n(8453),a=n(1470),s=n(9365),l=n(8774);const i={sidebar_position:1},u="Installation",c={id:"getting-started/installation",title:"Installation",description:"There are two supported ways to install Rojo:",source:"@site/versioned_docs/version-v0.5/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/v0.5/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v0.5/getting-started/installation.mdx",tags:[],version:"v0.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Help!",permalink:"/docs/v0.5/help"},next:{title:"Creating a New Game",permalink:"/docs/v0.5/getting-started/new-game"}},d={},h=[{value:"Installing the Server",id:"installing-the-server",level:2},{value:"Installing the Plugin",id:"installing-the-plugin",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"There are two supported ways to install Rojo:"}),"\n",(0,o.jsxs)(a.A,{groupId:"installation-kind",children:[(0,o.jsxs)(s.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsxs)(t.p,{children:["If you use Visual Studio Code, you can install ",(0,o.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo",children:"the Rojo VS Code extension"}),", which allows for both halves of Rojo to work within Visual Studio Code, with a nifty UI to sync files and start/stop the Rojo server!"]}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The VS Code extension does not add ",(0,o.jsx)(t.code,{children:"rojo"})," to your system PATH. In order to use Rojo from the terminal, you'll need to install the CLI separately."]})})]}),(0,o.jsxs)(s.A,{value:"cli",label:"CLI",children:[(0,o.jsx)(t.p,{children:"Rojo has two pieces that need to be installed:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The Server"}),"\n",(0,o.jsx)(t.li,{children:"The Roblox Studio plugin"}),"\n"]}),(0,o.jsx)(t.h2,{id:"installing-the-server",children:"Installing the Server"}),(0,o.jsxs)(a.A,{children:[(0,o.jsxs)(s.A,{value:"foreman",label:"With Foreman",default:!0,children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/rojo-rbx/foreman",children:"Foreman"})," is a toolchain manager that is useful for managing tools like Rojo for Roblox projects."]}),(0,o.jsxs)(t.p,{children:["To install from the latest stable release channel of Rojo 6, add an entry to the ",(0,o.jsx)(t.code,{children:"[tools]"})," section of your ",(0,o.jsx)(t.code,{children:"foreman.toml"}),":"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-toml",children:'[tools]\nrojo = { source = "rojo-rbx/rojo", version = "0.5" }\n'})})]}),(0,o.jsxs)(s.A,{value:"github",label:"From GitHub",children:[(0,o.jsxs)(t.p,{children:["There are pre-built binaries available for Windows, macOS, and Linux from Rojo's ",(0,o.jsx)(t.a,{href:"https://github.com/LPGhatguy/rojo/releases",children:"GitHub Releases page"}),"."]}),(0,o.jsxs)(t.p,{children:["The Rojo CLI must be run from the command line, like ",(0,o.jsx)(t.code,{children:"cmd.exe"})," on Windows or ",(0,o.jsx)(t.code,{children:"Terminal.app"})," on macOS. It's recommended that you put the Rojo CLI executable on your system ",(0,o.jsx)(t.code,{children:"PATH"})," to make this easier."]})]}),(0,o.jsxs)(s.A,{value:"crates",label:"From crates.io",children:[(0,o.jsxs)(t.p,{children:["It's also possible to install Rojo releases using ",(0,o.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),". This will compile Rojo from source and install it on your machine."]}),(0,o.jsx)(t.p,{children:"To install Rojo 0.5, use:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"cargo install rojo --version ^0.5\n"})})]})]}),(0,o.jsx)(t.h2,{id:"installing-the-plugin",children:"Installing the Plugin"}),(0,o.jsxs)(a.A,{children:[(0,o.jsxs)(s.A,{value:"github",label:"From GitHub",children:[(0,o.jsx)(t.p,{children:"The Rojo plugin is available from Rojo's GitHub Releases page."}),(0,o.jsx)(l.A,{className:"button button--primary button--extra-margin",to:"https://github.com/rojo-rbx/rojo/releases",children:"Rojo GitHub Releases"}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Rojo has a separate plugin for each major version. Make sure you install the correct one!"})}),(0,o.jsxs)(t.p,{children:["Download the attached ",(0,o.jsx)(t.code,{children:"rbxm"})," file and put it into your Roblox Studio plugins folder. You can find that folder by pressing ",(0,o.jsx)(t.strong,{children:"Plugins Folder"})," from your Plugins toolbar in Roblox Studio:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"&#39;Plugins Folder&#39; button in Roblox Studio",src:n(1937).A+"",width:"655",height:"179"})})]}),(0,o.jsxs)(s.A,{value:"roblox",label:"From Roblox.com",children:[(0,o.jsx)(t.p,{children:"The Rojo plugin can be installed from Roblox.com."}),(0,o.jsx)(l.A,{className:"button button--primary button--extra-margin",to:"https://www.roblox.com/library/1997686364/",children:"Rojo 0.5 Plugin on Roblox.com"}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Rojo has a separate plugin for each major version. Make sure you install the correct one!"})}),(0,o.jsx)(t.p,{children:"Press the 'Install' button on the plugin page to add it to Roblox Studio."})]})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var o=n(8215);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(6540),r=n(8215),a=n(3104),s=n(6347),l=n(205),i=n(7485),u=n(1682),c=n(9466);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),j=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==o&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1937:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/plugins-folder-in-studio-cb565553f78b7e4b38fe60a6669bbca0.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);