"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_label:"ConnectionTransport"},p="ConnectionTransport interface",i={unversionedId:"api/puppeteer.connectiontransport",id:"version-20.7.2/api/puppeteer.connectiontransport",title:"ConnectionTransport interface",description:"Signature:",source:"@site/versioned_docs/version-20.7.2/api/puppeteer.connectiontransport.md",sourceDirName:"api",slug:"/api/puppeteer.connectiontransport",permalink:"/api/puppeteer.connectiontransport",draft:!1,tags:[],version:"20.7.2",frontMatter:{sidebar_label:"ConnectionTransport"},sidebar:"api",previous:{title:"Connection.url",permalink:"/api/puppeteer.connection.url"},next:{title:"ConnectionTransport.close",permalink:"/api/puppeteer.connectiontransport.close"}},c={},u=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],s={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"connectiontransport-interface"}),"ConnectionTransport interface"),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export interface ConnectionTransport\n")),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"onclose"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"() =",">"," void"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"onmessage"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"(message: string) =",">"," void"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",a({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connectiontransport.close"}),"close()")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connectiontransport.send"}),"send(message)")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))))}d.isMDXComponent=!0}}]);