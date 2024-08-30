"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[7864],{2893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(4848),a=n(8453),i=n(1470),s=n(9365);const r={sidebar_position:2,title:"Creating a New Game"},l=void 0,c={id:"getting-started/new-game",title:"Creating a New Game",description:"Creating the Rojo Project",source:"@site/versioned_docs/version-v0.5/getting-started/new-game.mdx",sourceDirName:"getting-started",slug:"/getting-started/new-game",permalink:"/docs/v0.5/getting-started/new-game",draft:!1,unlisted:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v0.5/getting-started/new-game.mdx",tags:[],version:"v0.5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating a New Game"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/v0.5/getting-started/installation"},next:{title:"Porting an Existing Game",permalink:"/docs/v0.5/getting-started/existing-game"}},d={},u=[{value:"Creating the Rojo Project",id:"creating-the-rojo-project",level:2},{value:"Building Your Place",id:"building-your-place",level:2},{value:"Live-Syncing into Studio",id:"live-syncing-into-studio",level:2},{value:"Uploading Your Place",id:"uploading-your-place",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"creating-the-rojo-project",children:"Creating the Rojo Project"}),"\n",(0,o.jsx)(t.p,{children:"Rojo has a built-in command to initialize a new game project."}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsxs)(s.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsx)(t.p,{children:"Open a new empty folder in VS Code. Your editor should look like this:"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"empty VS Code project",src:n(2531).A+"",width:"611",height:"438"})}),(0,o.jsxs)(t.p,{children:["Open your VS Code Command Palette (",(0,o.jsx)(t.code,{children:"ctrl+shift+P"})," on Windows, ",(0,o.jsx)(t.code,{children:"cmd+shift+P"})," on macOS) and type ",(0,o.jsx)(t.code,{children:"rojo init"}),". Run the command that pops up:"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo init command",src:n(1604).A+"",width:"979",height:"152"})}),(0,o.jsx)(t.p,{children:"Once it succeeds, you should see a bunch of new files:"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"complete rojo project",src:n(8392).A+"",width:"790",height:"684"})}),(0,o.jsx)(t.p,{children:"These are all the files you need to get started with Rojo."})]}),(0,o.jsxs)(s.A,{value:"cli",label:"CLI",children:[(0,o.jsxs)(t.p,{children:["First, open up a terminal window, like ",(0,o.jsx)(t.code,{children:"cmd.exe"})," on Windows or ",(0,o.jsx)(t.code,{children:"Terminal.app"})," on macOS. Navigate to where you'd like to store your new project and run"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"rojo init my-new-game\n"})}),(0,o.jsxs)(t.p,{children:["Rojo will create a folder named ",(0,o.jsx)(t.code,{children:"my-new-game"})," if it doesn't already exist and create everything you need to get started."]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"building-your-place",children:"Building Your Place"}),"\n",(0,o.jsx)(t.p,{children:"Now that we have a project, one thing we can do is build a Roblox place file for our project. This is a great way to get started with a project quickly with no fuss."}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsxs)(s.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsxs)(t.p,{children:["Open your VS Code Command Palette and type ",(0,o.jsx)(t.code,{children:"rojo build"}),". You'll be prompted to select a project, choose the default one."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo build command",src:n(9328).A+"",width:"708",height:"309"})})]}),(0,o.jsxs)(s.A,{value:"cli",label:"CLI",children:[(0,o.jsxs)(t.p,{children:["All we have to do is run ",(0,o.jsx)(t.code,{children:"rojo build"})," from inside the project's folder:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"rojo build -o build.rbxlx\n"})}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["To generate a binary place file instead, use ",(0,o.jsx)(t.code,{children:"build.rbxl"}),"."]})})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Rojo will create a file named ",(0,o.jsx)(t.code,{children:"build.rbxlx"})," that contains your new game!"]}),"\n",(0,o.jsxs)(t.p,{children:["If you open ",(0,o.jsx)(t.code,{children:"build.rbxlx"})," in Roblox Studio now, you should see a baseplate, as well as code in services like ",(0,o.jsx)(t.code,{children:"ReplicatedStorage"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"live-syncing-into-studio",children:"Live-Syncing into Studio"}),"\n",(0,o.jsx)(t.p,{children:"Building a place file is great for starting to work on a game, but for active iteration, you'll want something faster."}),"\n",(0,o.jsxs)(t.p,{children:["In Roblox Studio, make sure the Rojo plugin is installed. If you need it, check out ",(0,o.jsx)(t.a,{href:"/docs/v0.5/getting-started/installation",children:"the installation guide"})," to learn how to install it."]}),"\n",(0,o.jsxs)(t.p,{children:["To expose your project to the plugin, you'll need to start the ",(0,o.jsx)(t.strong,{children:"live sync server"}),"."]}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsxs)(s.A,{value:"vscode",label:"VS Code",default:!0,children:[(0,o.jsxs)(t.p,{children:["Open your VS Code Command Palette, type ",(0,o.jsx)(t.code,{children:"rojo serve"}),", and choose the extension's command."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo serve command",src:n(5777).A+"",width:"606",height:"243"})}),(0,o.jsx)(t.p,{children:"You should see a small popup in the bottom right corner of your screen with a few details."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"rojo serve output",src:n(139).A+"",width:"474",height:"171"})})]}),(0,o.jsxs)(s.A,{value:"cli",label:"CLI",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"rojo serve\n"})}),(0,o.jsx)(t.p,{children:"You should see output like this in your terminal:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ rojo serve\nRojo server listening:\n  Address: localhost\n  Port:    34872\n\nVisit http://localhost:34872/ in your browser for more information\n"})})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Switch into Roblox Studio and press the ",(0,o.jsx)(t.strong,{children:"Rojo"})," plugin toolbar button. A panel should open:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Rojo plugin connection dialog",src:n(2968).A+"",width:"470",height:"287"})}),"\n",(0,o.jsxs)(t.p,{children:["Press ",(0,o.jsx)(t.strong,{children:"Connect"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"If all went well, you should now be able to change files in your project directory and watch them sync into Roblox Studio in real time!"}),"\n",(0,o.jsx)(t.p,{children:"You can also visit the URL printed by Rojo to access extra information about the running session."}),"\n",(0,o.jsx)(t.h2,{id:"uploading-your-place",children:"Uploading Your Place"}),"\n",(0,o.jsx)(t.p,{children:"Aimed at teams that want serious levels of automation, Rojo can upload places to Roblox.com automatically."}),"\n",(0,o.jsxs)(t.p,{children:["You'll need an existing game on Roblox.com as well as the ",(0,o.jsx)(t.code,{children:".ROBLOSECURITY"})," cookie of an account that has write access to that game."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"It's recommended that you set up a Roblox account dedicated to deploying your game instead of your personal account in case your security cookie is compromised."})}),"\n",(0,o.jsx)(t.p,{children:"Generating and publishing your game is as simple as:"}),"\n",(0,o.jsxs)(i.A,{groupId:"installation-kind",children:[(0,o.jsx)(s.A,{value:"vscode",label:"VS Code",default:!0,children:(0,o.jsx)(t.p,{children:"Uploading places is not yet supported in the Rojo VS Code Extension. You can publish your game using Roblox Studio or use the Rojo CLI instead."})}),(0,o.jsxs)(s.A,{value:"cli",label:"CLI",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'rojo upload --asset_id [PLACE ID] --cookie "[SECURITY COOKIE]"\n'})}),(0,o.jsxs)(t.p,{children:["If you are on Windows and have Roblox Studio installed, ",(0,o.jsx)(t.code,{children:"--cookie"})," is optional and will be pulled from your Roblox Studio session if not specified."]}),(0,o.jsxs)(t.p,{children:["An example project is available on GitHub that deploys to Roblox.com via GitHub Actions automatically: ",(0,o.jsx)(t.a,{href:"https://github.com/Roblox/desert-bus-2077",children:"Desert Bus 2077"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var o=n(8215);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(6540),a=n(8215),i=n(3104),s=n(6347),r=n(205),l=n(7485),c=n(1682),d=n(9466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:a}),[g,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=r[n].value;a!==o&&(c(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(f,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function w(e){const t=(0,j.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},2968:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/connect-dialog-eae33ce7b1c9f10d2a5b85891f150720.png"},9328:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/build-command-761b6a9baa210b594a3624e6cbcc48c7.png"},2531:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/empty-project-0e4e7f034cfbd120d04eff0b91435d9a.png"},1604:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/init-command-d2fcc46b50b6d23786b32131dea1e0df.png"},8392:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/init-output-656bda13af34931a7797e1f6d4195dd3.png"},5777:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/serve-command-1916b5e9c9b1083735a38ae06abdac03.png"},139:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/serve-output-8bf92a7144031516cbfbcb863bc3a29f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);