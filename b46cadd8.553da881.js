(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),i=n(9),a=(n(0),n(146)),r={id:"custom-extensions",title:"Custom Extensions"},c={id:"features/custom-extensions",title:"Custom Extensions",description:"Syncify supports syncing extensions that are not in the VSCode Marketplace.",source:"@site/docs/features/custom-extensions.md",permalink:"/vscode-syncify/docs/features/custom-extensions",sidebar:"docs",previous:{title:"Custom Files",permalink:"/vscode-syncify/docs/features/custom-files"},next:{title:"Sync Pragmas",permalink:"/vscode-syncify/docs/features/sync-pragmas"}},l=[{value:"Adding a Custom Extension",id:"adding-a-custom-extension",children:[]},{value:"Removing a Custom Extension",id:"removing-a-custom-extension",children:[]},{value:"Enabling a Custom Extension",id:"enabling-a-custom-extension",children:[]},{value:"Disabling a Custom Extension",id:"disabling-a-custom-extension",children:[]}],s={rightToc:l},b="wrapper";function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(b,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Syncify supports syncing extensions that are not in the VSCode Marketplace."),Object(a.b)("h2",{id:"adding-a-custom-extension"},"Adding a Custom Extension"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Copy the VSIX file to the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/arnohovhannisyan/vscode-syncify/wiki/Common-Terms#vsix-folder"}),Object(a.b)("inlineCode",{parentName:"a"},"vsix"))," folder")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This folder probably won't exist if this is your first custom extension, in which case you must create it yourself.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The VSIX file's name should be one of the following:"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"publisher.extName.vsix")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"publisher.extName-x.x.x.vsix")," (x.x.x is the version)")),Object(a.b)("p",{parentName:"blockquote"},"Replace ",Object(a.b)("inlineCode",{parentName:"p"},"publisher.extName")," with the extension's corresponding details.")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Upload your changes by running ",Object(a.b)("inlineCode",{parentName:"li"},"Syncify: Upload"))),Object(a.b)("h2",{id:"removing-a-custom-extension"},"Removing a Custom Extension"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure your custom extension is ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#disabling-a-custom-extension"}),"disabled")),Object(a.b)("li",{parentName:"ol"},"Navigate to the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/arnohovhannisyan/vscode-syncify/wiki/Common-Terms#vsix-folder"}),Object(a.b)("inlineCode",{parentName:"a"},"vsix"))," folder"),Object(a.b)("li",{parentName:"ol"},"Delete the VSIX file corresponding to the extension"),Object(a.b)("li",{parentName:"ol"},"Upload your changes by running ",Object(a.b)("inlineCode",{parentName:"li"},"Syncify: Upload"))),Object(a.b)("h2",{id:"enabling-a-custom-extension"},"Enabling a Custom Extension"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install its VSIX file in VSCode")),Object(a.b)("blockquote",null,Object(a.b)("ol",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ol"},"Go to the ",Object(a.b)("inlineCode",{parentName:"li"},"Extensions")," tab"),Object(a.b)("li",{parentName:"ol"},"Click the three dots on the upper right corner"),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Install from VSIX")),Object(a.b)("li",{parentName:"ol"},"Select the VSIX file"))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"Syncify: Upload")," in the command palette to upload your changes")),Object(a.b)("h2",{id:"disabling-a-custom-extension"},"Disabling a Custom Extension"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Uninstall the extension"),Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"Syncify: Upload")," in the command palette to upload your changes")))}u.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=o,d=u["".concat(r,".").concat(p)]||u[p]||m[p]||a;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);