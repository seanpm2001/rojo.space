"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[2711],{9331:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});s(6540);var a=s(8774),t=s(1312),i=s(1003),c=s(5764),n=s(1107),l=s(4848);function h(e){let{year:r,posts:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:s.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(a.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function o(e){let{years:r}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},r)))})})})}function d(e){let{archive:r}=e;const s=(0,t.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,t.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const s=r.metadata.date.split("-")[0],a=e.get(s)??[];return e.set(s,[r,...a])}),new Map);return Array.from(r,(e=>{let[r,s]=e;return{year:r,posts:s}}))}(r.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:s,description:a}),(0,l.jsxs)(c.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.A,{as:"h1",className:"hero__title",children:s}),(0,l.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(o,{years:h})})]})]})}}}]);