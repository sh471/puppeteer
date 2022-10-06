"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={sidebar_label:"ElementHandle.$x"},o="ElementHandle.$x() method",i={unversionedId:"api/puppeteer.elementhandle._x",id:"version-18.2.1/api/puppeteer.elementhandle._x",title:"ElementHandle.$x() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-18.2.1/api/puppeteer.elementhandle._x.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle._x",permalink:"/api/puppeteer.elementhandle._x",draft:!1,tags:[],version:"18.2.1",frontMatter:{sidebar_label:"ElementHandle.$x"},sidebar:"sidebar",previous:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"},next:{title:"ElementHandle.asElement",permalink:"/api/puppeteer.elementhandle.aselement"}},m={},s=[{value:"Parameters",id:"parameters",level:2}],u={toc:s};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"elementhandlex-method"}),"ElementHandle.$x() method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,r.kt)("p",{parentName:"blockquote"},"Use ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle.__"}),"ElementHandle.$$()")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," prefix."),(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"await elementHandle.$$('xpath/' + xpathExpression)")),(0,r.kt)("p",{parentName:"blockquote"},"The method evaluates the XPath expression relative to the elementHandle. If ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".//"),", the dot will be appended automatically."),(0,r.kt)("p",{parentName:"blockquote"},"If there are no such elements, the method will resolve to an empty array.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  $x(expression: string): Promise<Array<ElementHandle<Node>>>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"expression"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Expression to ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate"}),"evaluate"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Array","<",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Node",">",">",">"))}c.isMDXComponent=!0}}]);