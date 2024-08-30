"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[0],{5866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(4848),a=n(8453),i=n(1470),r=n(9365);const s={sidebar_position:2,title:"Creating a New Game"},l=void 0,c={id:"getting-started/new-game",title:"Creating a New Game",description:"Creating the Rojo Project",source:"@site/docs/getting-started/new-game.mdx",sourceDirName:"getting-started",slug:"/getting-started/new-game",permalink:"/docs/v7/getting-started/new-game",draft:!1,unlisted:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/docs/getting-started/new-game.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating a New Game"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/docs/v7/getting-started/installation"},next:{title:"Porting an Existing Game",permalink:"/docs/v7/getting-started/existing-game"}},d={},u=[{value:"Creating the Rojo Project",id:"creating-the-rojo-project",level:2},{value:"Building Your Place",id:"building-your-place",level:2},{value:"Live-Syncing into Studio",id:"live-syncing-into-studio",level:2},{value:"Uploading Your Place",id:"uploading-your-place",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"creating-the-rojo-project",children:"Creating the Rojo Project"}),"\n",(0,o.jsx)(t.p,{children:"Rojo has a built-in command to initialize a new game project."}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsxs)(r.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsx)(t.p,{children:"Open a new empty folder in VS Code. Your editor should look like this:"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"empty VS Code project",src:n(2531).A+"",width:"611",height:"438"})}),(0,o.jsxs)(t.p,{children:["Open your VS Code Command Palette (",(0,o.jsx)(t.code,{children:"ctrl+shift+P"})," on Windows, ",(0,o.jsx)(t.code,{children:"cmd+shift+P"})," on macOS) and type ",(0,o.jsx)(t.code,{children:"Rojo: Open Menu"}),". Run the command that pops up:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo init command",src:n(1604).A+"",width:"979",height:"152"})}),(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.code,{children:"Create one now"})," from menu to initialize Rojo project"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo initialize from menu",src:n(7664).A+"",width:"694",height:"186"})}),(0,o.jsx)(t.p,{children:"Once it succeeds, you should see a bunch of new files:"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"complete rojo project",src:n(8392).A+"",width:"790",height:"684"})}),(0,o.jsx)(t.p,{children:"These are all the files you need to get started with Rojo."})]}),(0,o.jsxs)(r.A,{value:"cli",label:"CLI",children:[(0,o.jsxs)(t.p,{children:["First, open up a terminal window, like ",(0,o.jsx)(t.code,{children:"cmd.exe"})," on Windows or ",(0,o.jsx)(t.code,{children:"Terminal.app"})," on macOS. Navigate to where you'd like to store your new project and run"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"rojo init my-new-game\n"})}),(0,o.jsxs)(t.p,{children:["Rojo will create a folder named ",(0,o.jsx)(t.code,{children:"my-new-game"})," if it doesn't already exist and create everything you need to get started."]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"building-your-place",children:"Building Your Place"}),"\n",(0,o.jsx)(t.p,{children:"Now that we have a project, one thing we can do is build a Roblox place file for our project. This is a great way to get started with a project quickly with no fuss."}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsxs)(r.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsxs)(t.p,{children:["Open your VS Code Command Palette (",(0,o.jsx)(t.code,{children:"ctrl+shift+P"})," on Windows, ",(0,o.jsx)(t.code,{children:"cmd+shift+P"})," on macOS) and type ",(0,o.jsx)(t.code,{children:"Rojo: Open Menu"}),". Run the command that pops up:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo init command",src:n(1604).A+"",width:"979",height:"152"})}),(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.code,{children:"Build project"})," button."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo build from menu",src:n(9328).A+"",width:"708",height:"309"})})]}),(0,o.jsxs)(r.A,{value:"cli",label:"CLI",children:[(0,o.jsxs)(t.p,{children:["All we have to do is run ",(0,o.jsx)(t.code,{children:"rojo build"})," from inside the project's folder:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"rojo build -o build.rbxlx\n"})}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["To generate a binary place file instead, use ",(0,o.jsx)(t.code,{children:"build.rbxl"}),"."]})})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Rojo will create a file named ",(0,o.jsx)(t.code,{children:"build.rbxlx"})," that contains your new game!"]}),"\n",(0,o.jsxs)(t.p,{children:["If you open ",(0,o.jsx)(t.code,{children:"build.rbxlx"})," in Roblox Studio now, you should see a baseplate, as well as code in services like ",(0,o.jsx)(t.code,{children:"ReplicatedStorage"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"live-syncing-into-studio",children:"Live-Syncing into Studio"}),"\n",(0,o.jsx)(t.p,{children:"Building a place file is great for starting to work on a game, but for active iteration, you'll want something faster."}),"\n",(0,o.jsxs)(t.p,{children:["In Roblox Studio, make sure the Rojo plugin is installed. If you need it, check out ",(0,o.jsx)(t.a,{href:"/docs/v7/getting-started/installation",children:"the installation guide"})," to learn how to install it."]}),"\n",(0,o.jsxs)(t.p,{children:["To expose your project to the plugin, you'll need to start the ",(0,o.jsx)(t.strong,{children:"live sync server"}),"."]}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsxs)(r.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsxs)(t.p,{children:["Open your VS Code Command Palette (",(0,o.jsx)(t.code,{children:"ctrl+shift+P"})," on Windows, ",(0,o.jsx)(t.code,{children:"cmd+shift+P"})," on macOS) and type ",(0,o.jsx)(t.code,{children:"Rojo: Open Menu"}),". Run the command that pops up:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo init command",src:n(1604).A+"",width:"979",height:"152"})}),(0,o.jsx)(t.p,{children:"Click the project button from Projects in this workspace section"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo serve command",src:n(5777).A+"",width:"606",height:"243"})}),(0,o.jsx)(t.p,{children:"You should see a small popup in the bottom right corner of your screen with a few details."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo serve output",src:n(139).A+"",width:"474",height:"171"})})]}),(0,o.jsxs)(r.A,{value:"cli",label:"CLI",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"rojo serve\n"})}),(0,o.jsx)(t.p,{children:"You should see output like this in your terminal:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ rojo serve\nRojo server listening:\n  Address: localhost\n  Port:    34872\n\nVisit http://localhost:34872/ in your browser for more information\n"})})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Switch into Roblox Studio and press the ",(0,o.jsx)(t.strong,{children:"Rojo"})," plugin toolbar button. A panel should open:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Rojo plugin connection dialog",src:n(2968).A+"",width:"470",height:"287"})}),"\n",(0,o.jsxs)(t.p,{children:["Press ",(0,o.jsx)(t.strong,{children:"Connect"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"If all went well, you should now be able to change files in your project directory and watch them sync into Roblox Studio in real time!"}),"\n",(0,o.jsx)(t.p,{children:"You can also visit the URL printed by Rojo to access extra information about the running session."}),"\n",(0,o.jsx)(t.h2,{id:"uploading-your-place",children:"Uploading Your Place"}),"\n",(0,o.jsx)(t.p,{children:"Aimed at teams that want serious levels of automation, Rojo can upload places to Roblox.com automatically."}),"\n",(0,o.jsxs)(t.p,{children:["You'll need an existing game on Roblox.com as well as the ",(0,o.jsx)(t.code,{children:".ROBLOSECURITY"})," cookie of an account that has write access to that game."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"It's recommended that you set up a Roblox account dedicated to deploying your game instead of your personal account in case your security cookie is compromised."})}),"\n",(0,o.jsx)(t.p,{children:"Generating and publishing your game is as simple as:"}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsx)(r.A,{value:"vscode",label:"VS Code",default:!0,children:(0,o.jsx)(t.p,{children:"Uploading places is not yet supported in the Rojo VS Code Extension. You can publish your game using Roblox Studio or use the Rojo CLI instead."})}),(0,o.jsxs)(r.A,{value:"cli",label:"CLI",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'rojo upload --asset_id [PLACE ID] --cookie "[SECURITY COOKIE]"\n'})}),(0,o.jsxs)(t.p,{children:["If you are on Windows and have Roblox Studio installed, ",(0,o.jsx)(t.code,{children:"--cookie"})," is optional and will be pulled from your Roblox Studio session if not specified."]}),(0,o.jsxs)(t.p,{children:["An example project is available on GitHub that deploys to Roblox.com via GitHub Actions automatically: ",(0,o.jsx)(t.a,{href:"https://github.com/Roblox/desert-bus-2077",children:"Desert Bus 2077"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var o=n(8215);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(6540),a=n(8215),i=n(3104),r=n(6347),s=n(205),l=n(7485),c=n(1682),d=n(9466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[c,u]=b({queryString:n,groupId:a}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function f(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==o&&(c(t),r(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(f,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function y(e){const t=(0,j.A)();return(0,x.jsx)(S,{...e,children:u(e.children)},String(t))}},2968:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/connect-dialog-eae33ce7b1c9f10d2a5b85891f150720.png"},9328:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/build-command-761b6a9baa210b594a3624e6cbcc48c7.png"},2531:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/empty-project-0e4e7f034cfbd120d04eff0b91435d9a.png"},1604:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/init-command-d2fcc46b50b6d23786b32131dea1e0df.png"},8392:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/init-output-656bda13af34931a7797e1f6d4195dd3.png"},7664:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/png;base64,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"},5777:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/serve-command-1916b5e9c9b1083735a38ae06abdac03.png"},139:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/serve-output-8bf92a7144031516cbfbcb863bc3a29f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);