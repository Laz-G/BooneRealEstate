(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{7218:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return r(3364)}])},3364:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(5893),i=(r(7294),r(4298)),o=r.n(i),a=r(6983),c=r(8548);function u(){return c.p&&(0,t.jsxs)("div",{children:[(0,t.jsx)(o(),{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,t.jsx)(a.nh,{})]})}},8548:function(e,n,r){"use strict";r.d(n,{p:function(){return d}});var t=r(6983),i=r(5893),o=r(259),a=r(7294),c=r(4051),u=r.n(c);function s(e,n,r,t,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void r(s)}c.done?n(u):Promise.resolve(u).then(t,i)}function l(e){var n=e.inputId,r=(0,a.useState)(null),t=r[0],c=r[1],l=(0,o.xX)().executeRecaptcha;(0,a.useEffect)((function(){if(t&&l){var e=t.closest("form");null===e||void 0===e||e.addEventListener("submit",function(){var n,r=(n=u().mark((function n(r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),r.stopPropagation(),n.next=4,l("submit");case 4:t.value=n.sent,null===e||void 0===e||e.submit();case 6:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function a(e){s(o,t,i,a,c,"next",e)}function c(e){s(o,t,i,a,c,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}())}}),[t,l,n]);var f=(0,a.useCallback)((function(e){c(e)}),[]);return(0,i.jsx)("input",{id:"recaptcha-token",name:"recaptcha-token",type:"hidden",ref:f})}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=(0,t.fZ)({projects:[{id:"eKabpdN7JB6uckJED15URF",token:"Hyr3tdKBo8dpJQlL5hIITwRpGEJo12lg8Y3zasUweb5HDXBg4UjHFTz5a3GGGMTMfx3nQMecj9I5l2pUmw"}],preview:!1});d.registerComponent((function(e){var n=e.apiKey,r=e.showInEditor,c=e.inputId,u=(0,a.useContext)(t.y1);return(0,i.jsx)(i.Fragment,{children:u?r?(0,i.jsxs)("div",{children:["Verifying recaptcha - ",n]}):(0,i.jsx)(i.Fragment,{}):n&&(0,i.jsx)(o.pm,{reCaptchaKey:n,children:(0,i.jsx)(l,{inputId:c})})})}),{name:"ReCaptcha",props:{apiKey:"string",showInEditor:"boolean",inputId:"string"}}),d.registerComponent((function(e){var n=e.config,r=e.showInEditor,o=(0,a.useContext)(t.y1);return(0,a.useEffect)((function(){if(!o){var e=new URL(window.location.href).searchParams;Array.from(e.entries()).forEach((function(e){var r=p(e,2),t=r[0],i=r[1],o=n&&n[t]||t,a=document.querySelector("#".concat(o));a&&(a.value=i)}))}}),[n,o]),(0,i.jsx)(i.Fragment,{children:o?r&&(0,i.jsx)("div",{children:"URL parser placeholder"}):(0,i.jsx)(i.Fragment,{})})}),{name:"URLParser",props:{config:"object",showInEditor:"boolean"}}),d.registerComponent((function(e){var n=e.object,r=e.redirectUrl,t=e.errorRedirectURL;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{name:"objectType",type:"hidden",value:n}),r&&(0,i.jsx)("input",{name:"redirectUrl",type:"hidden",value:r}),t&&(0,i.jsx)("input",{name:"errorRedirectURL",type:"hidden",value:t})]})}),{name:"Web2Any",props:{object:"string",redirectUrl:"string",errorRedirectURL:"string"}}),d.registerComponent((function(e){var n=e.className,r=e.children,t=(0,a.useState)(null),o=t[0],c=t[1],u=(0,a.useCallback)((function(e){c(e)}),[]);return(0,a.useEffect)((function(){if(o){var e,n=o.closest("form");null===(e=o.querySelector("a"))||void 0===e||e.addEventListener("click",(function(e){null===n||void 0===n||n.reset()}))}}),[o]),(0,i.jsx)("div",{className:n,ref:u,children:r})}),{name:"ResetLink",props:{children:"slot"}})},4298:function(e,n,r){e.exports=r(3573)}},function(e){e.O(0,[774,126,888,179],(function(){return n=7218,e(e.s=n);var n}));var n=e.O();_N_E=n}]);