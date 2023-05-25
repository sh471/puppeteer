"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(r),f=o,m=y["".concat(i,".").concat(f)]||y[f]||u[f]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},62976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={sidebar_label:"ConsoleMessageType"},s="ConsoleMessageType type",i={unversionedId:"api/puppeteer.consolemessagetype",id:"version-20.4.0/api/puppeteer.consolemessagetype",title:"ConsoleMessageType type",description:"The supported types for console messages.",source:"@site/versioned_docs/version-20.4.0/api/puppeteer.consolemessagetype.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessagetype",permalink:"/api/puppeteer.consolemessagetype",draft:!1,tags:[],version:"20.4.0",frontMatter:{sidebar_label:"ConsoleMessageType"},sidebar:"api",previous:{title:"ConsoleMessageLocation",permalink:"/api/puppeteer.consolemessagelocation"},next:{title:"ContinueRequestOverrides",permalink:"/api/puppeteer.continuerequestoverrides"}},l={},c=[{value:"Signature:",id:"signature",level:4}],u={toc:c};function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"consolemessagetype-type"}),"ConsoleMessageType type"),(0,n.kt)("p",null,"The supported types for console messages."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export type ConsoleMessageType =\n  | 'log'\n  | 'debug'\n  | 'info'\n  | 'error'\n  | 'warning'\n  | 'dir'\n  | 'dirxml'\n  | 'table'\n  | 'trace'\n  | 'clear'\n  | 'startGroup'\n  | 'startGroupCollapsed'\n  | 'endGroup'\n  | 'assert'\n  | 'profile'\n  | 'profileEnd'\n  | 'count'\n  | 'timeEnd'\n  | 'verbose';\n")))}y.isMDXComponent=!0}}]);