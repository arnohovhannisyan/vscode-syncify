(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(148)),l={title:"Add or Improve Language Support",sidebar_label:"Language Support"},i={id:"contributing/language-support",title:"Add or Improve Language Support",description:"## Where are the language files?",source:"@site/docs/contributing/language-support.md",permalink:"/vscode-syncify/docs/contributing/language-support",editUrl:"https://github.com/arnohovhannisyan/syncify-docs/edit/master/docs/contributing/language-support.md",lastUpdatedBy:"Arno Hovhannisyan",lastUpdatedAt:1579052719,sidebar_label:"Language Support",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/vscode-syncify/docs/contributing/prerequisites"},next:{title:"Profiles",permalink:"/vscode-syncify/docs/features/profiles"}},c=[{value:"Where are the language files?",id:"where-are-the-language-files",children:[]},{value:"How to support my language?",id:"how-to-support-my-language",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"where-are-the-language-files"},"Where are the language files?"),Object(o.b)("p",null,"All language files should be placed at the extension root folder. They should also follow the following naming scheme: ",Object(o.b)("inlineCode",{parentName:"p"},"package.nls.<language>.json")),Object(o.b)("p",null,"Currently supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"English")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"package.nls.json")," is the default localization file if your language is not supported."),Object(o.b)("h2",{id:"how-to-support-my-language"},"How to support my language?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Find your language id ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/getstarted/locales#_available-locales"}),"here")),Object(o.b)("li",{parentName:"ol"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},"package.nls.json")," and rename it to ",Object(o.b)("inlineCode",{parentName:"li"},"package.nls.<language-id>.json")),Object(o.b)("li",{parentName:"ol"},"Update the values to accommodate for your language in the new file"),Object(o.b)("li",{parentName:"ol"},"Open a Pull Request with your changes")))}p.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(l,".").concat(b)]||s[b]||g[b]||o;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);