"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[9394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(87462),o=n(67294),r=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function j(e){const t=(0,h.Z)();return o.createElement(k,(0,a.Z)({key:String(t)},e))}},7707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),l=n(85162),i=n(39960);const s={sidebar_position:1},u="Installation",c={unversionedId:"getting-started/installation",id:"version-v6/getting-started/installation",title:"Installation",description:"There are two supported ways to install Rojo:",source:"@site/versioned_docs/version-v6/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/v6/getting-started/installation",draft:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v6/getting-started/installation.mdx",tags:[],version:"v6",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-v6/tutorialSidebar",previous:{title:"Help!",permalink:"/docs/v6/help"},next:{title:"Creating a New Game",permalink:"/docs/v6/getting-started/new-game"}},p={},m=[{value:"Installing the Server",id:"installing-the-server",level:2},{value:"Installing the Plugin",id:"installing-the-plugin",level:2}],d={toc:m},b="wrapper";function f(e){let{components:t,...s}=e;return(0,o.kt)(b,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"There are two supported ways to install Rojo:"),(0,o.kt)(r.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"If you use Visual Studio Code, you can install ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo"},"the Rojo VS Code extension"),", which allows for both halves of Rojo to work within Visual Studio Code, with a nifty UI to sync files and start/stop the Rojo server!"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The VS Code extension does not add ",(0,o.kt)("inlineCode",{parentName:"p"},"rojo")," to your system PATH. In order to use Rojo from the terminal, you'll need to install the CLI separately."))),(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"Rojo has two pieces that need to be installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Server"),(0,o.kt)("li",{parentName:"ul"},"The Roblox Studio plugin")),(0,o.kt)("h2",{id:"installing-the-server"},"Installing the Server"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"foreman",label:"With Foreman",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/foreman"},"Foreman")," is a toolchain manager that is useful for managing tools like Rojo for Roblox projects."),(0,o.kt)("p",null,"To install from the latest stable release channel of Rojo 6, add an entry to the ",(0,o.kt)("inlineCode",{parentName:"p"},"[tools]")," section of your ",(0,o.kt)("inlineCode",{parentName:"p"},"foreman.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[tools]\nrojo = { source = "rojo-rbx/rojo", version = "6" }\n'))),(0,o.kt)(l.Z,{value:"github",label:"From GitHub",mdxType:"TabItem"},(0,o.kt)("p",null,"There are pre-built binaries available for Windows, macOS, and Linux from Rojo's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/rojo/releases"},"GitHub Releases page"),"."),(0,o.kt)("p",null,"The Rojo CLI must be run from the command line, like ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd.exe")," on Windows or ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal.app")," on macOS. It's recommended that you put the Rojo CLI executable on your system ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," to make this easier.")),(0,o.kt)(l.Z,{value:"crates",label:"From crates.io",mdxType:"TabItem"},(0,o.kt)("p",null,"It's also possible to install Rojo releases using ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),". This will compile Rojo from source and install it on your machine."),(0,o.kt)("p",null,"To install Rojo 6, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install rojo --version ^6\n")))),(0,o.kt)("h2",{id:"installing-the-plugin"},"Installing the Plugin"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"Using the CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"Once you've installed the Rojo server, you can use it to install or upgrade the Rojo plugin from the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rojo plugin install\n"))),(0,o.kt)(l.Z,{value:"github",label:"From GitHub",mdxType:"TabItem"},(0,o.kt)("p",null,"The Rojo plugin is available from Rojo's GitHub Releases page."),(0,o.kt)(i.Z,{className:"button button--primary button--extra-margin",to:"https://github.com/rojo-rbx/rojo/releases",mdxType:"Link"},"Rojo GitHub Releases"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Rojo has a separate plugin for each major version. Make sure you install the correct one!")),(0,o.kt)("p",null,"Download the attached ",(0,o.kt)("inlineCode",{parentName:"p"},"rbxm")," file and put it into your Roblox Studio plugins folder. You can find that folder by pressing ",(0,o.kt)("strong",{parentName:"p"},"Plugins Folder")," from your Plugins toolbar in Roblox Studio:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&#39;Plugins Folder&#39; button in Roblox Studio",src:n(88579).Z,width:"655",height:"179"}))),(0,o.kt)(l.Z,{value:"roblox",label:"From Roblox.com",mdxType:"TabItem"},(0,o.kt)("p",null,"The Rojo plugin can be installed from Roblox.com."),(0,o.kt)(i.Z,{className:"button button--primary button--extra-margin",to:"https://www.roblox.com/library/4048317704/",mdxType:"Link"},"Rojo 6 Plugin on Roblox.com"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Rojo has a separate plugin for each major version. Make sure you install the correct one!")),(0,o.kt)("p",null,"Press the 'Install' button on the plugin page to add it to Roblox Studio."))))))}f.isMDXComponent=!0},88579:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugins-folder-in-studio-cb565553f78b7e4b38fe60a6669bbca0.png"}}]);