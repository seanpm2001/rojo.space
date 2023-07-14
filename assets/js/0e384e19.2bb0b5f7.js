"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[9671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return o?r.createElement(h,l(l({ref:t},u),{},{components:o})):r.createElement(h,l({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},59881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={title:"Introduction",slug:"/",sidebar_position:1},l=void 0,i={unversionedId:"intro",id:"intro",title:"Introduction",description:"Welcome! Rojo is a project management tool designed to get professional resources in the hands of Roblox developers. Here, we'll teach you how to get started with Rojo.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/v7/",draft:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",slug:"/",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Help!",permalink:"/docs/v7/help"}},s={},p=[{value:"Why Rojo?",id:"why-rojo",level:2},{value:"Tools",id:"tools",level:3},{value:"Rojo at RDC 2019",id:"rojo-at-rdc-2019",level:3},{value:"External Text Editors",id:"external-text-editors",level:3},{value:"Version Control",id:"version-control",level:3},{value:"TypeScript",id:"typescript",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome! Rojo is a project management tool designed to get professional resources in the hands of Roblox developers. Here, we'll teach you how to get started with Rojo."),(0,a.kt)("p",null,"This documentation is a continual work in progress. If you find any issues, please file an issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/rojo.space/issues"},"the Rojo website issue tracker"),"!"),(0,a.kt)("p",null,"New to Rojo? Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/v7/getting-started/installation"},"Installation"),"."),(0,a.kt)("h2",{id:"why-rojo"},"Why Rojo?"),(0,a.kt)("p",null,"Adding a tool like Rojo to your Roblox workflow can be daunting, but it comes with some key advantages."),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("p",null,"There are decades of excellent tools available that operate on files. With Rojo, it's possible to take advantage of any of them!"),(0,a.kt)("p",null,"Popular tools that are tailored towards Roblox or Lua in general:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kampfkarren/selene"},"Selene"),", a static analysis tool to help you write better Lua"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/JohnnyMorganz/StyLua"},"StyLua"),", a formatter that helps keep your code in a consistent style"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/UpliftGames/wally"},"Wally"),", a package manager for Roblox projects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/UpliftGames/moonwave"},"Moonwave"),", a documentation generator for Lua projects")),(0,a.kt)("h3",{id:"rojo-at-rdc-2019"},"Rojo at RDC 2019"),(0,a.kt)("p",null,"Nathan Riemer (Kampfkarren) gave a talk at RDC 2019 talking about some of the benefits of using a tool like Rojo."),(0,a.kt)("iframe",{style:{margin:"0 auto",maxWidth:"100%"},width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/czlvzEyhaBc",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h3",{id:"external-text-editors"},"External Text Editors"),(0,a.kt)("p",null,"Rojo opens the door to use the absolute best text editors in the world and their rich plugin ecosystems."),(0,a.kt)("p",null,"Some very popular editors include ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.sublimetext.com"},"Sublime Text"),"."),(0,a.kt)("p",null,"These advanced text editors have features like multi-cursor editing, go-to symbol, multi-file regex find and replace, bookmarks and much more."),(0,a.kt)("p",null,"Many Rojo VS Code users also use extensions like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=AmaranthineCodices.vscode-rbxlua"},"vscode-rbxlua")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Kampfkarren.roblox-lua-autofills"},"Roblox Lua Autocompletes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tabnine.com"},"TabNine"))),(0,a.kt)("h3",{id:"version-control"},"Version Control"),(0,a.kt)("p",null,"By building your game (or just the scripts) as individual files on the filesystem, it becomes easy to start using professional-grade version control tools like ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),"."),(0,a.kt)("p",null,"Hundreds of thousands of companies and individual developers use Git to version their software projects. With Rojo, Roblox developers can take advantage of the best collaboration tool around."),(0,a.kt)("p",null,"Using a repository hosting service like GitHub or GitLab brings powerful features to Roblox developers like code reviews and issue tracking that professional engineers can't live without."),(0,a.kt)("h3",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"TypeScript enables static type safety, which helps prevent typos and adds unparalleled autocompletion. It also brings features like arrow functions, object destructuring, functional programming methods, and more!"),(0,a.kt)("p",null,"With Rojo, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://roblox-ts.com"},"roblox-ts")," to compile TypeScript to Lua and take advantage of a huge ecosystem of TypeScript tooling."),(0,a.kt)("p",null,"It's also possible to use other languages that compile to Lua like ",(0,a.kt)("a",{parentName:"p",href:"https://moonscript.org"},"MoonScript")," and ",(0,a.kt)("a",{parentName:"p",href:"https://haxe.org"},"Haxe"),"."))}d.isMDXComponent=!0}}]);