/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6,23,33,34],{346:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return c})),n.d(t,"__rest",(function(){return l})),n.d(t,"__decorate",(function(){return d})),n.d(t,"__param",(function(){return f})),n.d(t,"__metadata",(function(){return v})),n.d(t,"__awaiter",(function(){return m})),n.d(t,"__generator",(function(){return _})),n.d(t,"__exportStar",(function(){return h})),n.d(t,"__values",(function(){return y})),n.d(t,"__read",(function(){return w})),n.d(t,"__spread",(function(){return C})),n.d(t,"__spreadArrays",(function(){return x})),n.d(t,"__await",(function(){return S})),n.d(t,"__asyncGenerator",(function(){return E})),n.d(t,"__asyncDelegator",(function(){return O})),n.d(t,"__asyncValues",(function(){return A})),n.d(t,"__makeTemplateObject",(function(){return k})),n.d(t,"__importStar",(function(){return L})),n.d(t,"__importDefault",(function(){return j}));var r=function(e,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},r(e,b)};function o(e,b){function t(){this.constructor=e}r(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}var c=function(){return c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e},c.apply(this,arguments)};function l(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function d(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c}function f(e,t){return function(n,r){t(n,r,e)}}function v(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function m(e,t,n,r){return new(n||(n=Promise))((function(o,c){function l(e){try{f(r.next(e))}catch(e){c(e)}}function d(e){try{f(r.throw(e))}catch(e){c(e)}}function f(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(l,d)}f((r=r.apply(e,t||[])).next())}))}function _(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function h(e,t){for(var p in e)t.hasOwnProperty(p)||(t[p]=e[p])}function y(e){var t="function"==typeof Symbol&&e[Symbol.iterator],i=0;return t?t.call(e):{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}}}function w(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function C(){for(var e=[],i=0;i<arguments.length;i++)e=e.concat(w(arguments[i]));return e}function x(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t}function S(e){return this instanceof S?(this.v=e,this):new S(e)}function E(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=n.apply(e,t||[]),q=[];return i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i;function r(e){g[e]&&(i[e]=function(t){return new Promise((function(a,b){q.push([e,t,a,b])>1||o(e,t)}))})}function o(e,t){try{(n=g[e](t)).value instanceof S?Promise.resolve(n.value.v).then(c,l):d(q[0][2],n)}catch(e){d(q[0][3],e)}var n}function c(e){o("next",e)}function l(e){o("throw",e)}function d(e,t){e(t),q.shift(),q.length&&o(q[0][0],q[0][1])}}function O(e){var i,p;return i={},t("next"),t("throw",(function(e){throw e})),t("return"),i[Symbol.iterator]=function(){return this},i;function t(t,n){i[t]=e[t]?function(r){return(p=!p)?{value:S(e[t](r)),done:"return"===t}:n?n(r):r}:n}}function A(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,t=e[Symbol.asyncIterator];return t?t.call(e):(e=y(e),i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i);function n(t){i[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(n=e[t](n)).done,n.value)}))}}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function L(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}},347:function(e,t,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("da054a32",content,!0,{sourceMap:!1})},352:function(e,t,n){e.exports=n.p+"img/web_logo.fb17817.png"},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(346).__importDefault(n(354));t.default=r.default},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(346),o=r.__importDefault(n(9));t.default=o.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var e=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var t=e,n=t.threshold,r=t.hideScrollUp,o=e.getScrollTop(),c=o>n,l=(o>=e.lastScrollTop||!r)&&c;e.lastScrollTop=o,e.isFixed!==l&&(e.isFixed=l,e.$emit("change",e.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(e){var t,n=this.$slots.default;if(!n||!r.__spreadArrays(n)[0])return e();var o=r.__spreadArrays(n)[0],c=e(o.tag,o.data,o.children||o.text);return c.data=c.data||{class:""},"string"==typeof c.data.class&&(c.data.class=c.data.class.split(" ")),Array.isArray(c.data.class)&&(c.data.class=r.__spreadArrays(c.data.class).reduce((function(a,b){var e;return r.__assign(r.__assign({},a),((e={})[b]=!0,e))}),{})),c.data.class=r.__assign(r.__assign({},c.data.class),((t={})[this.headerClass]=!0,t[this.fixedClass]=!!this.isFixed,t)),c.data.class=Object.entries(c.data.class).map((function(e){var t=e[0];return e[1]?t:null})).filter((function(e){return e})).join(" "),c}})},355:function(e,t,n){"use strict";n(347)},356:function(e,t,n){var r=n(52)(!1);r.push([e.i,".navbar[data-v-b9765dae]{display:inherit;padding:0}.transparent-header[data-v-b9765dae]{background-color:rgba(0,0,30,.9450980392)}.navbar.vue-fixed-header--isFixed[data-v-b9765dae]{position:fixed;left:0;top:0;width:100%;background-color:#00001e}",""]),e.exports=r},360:function(e,t,n){"use strict";n.r(t);var r=n(353),o={name:"FrontHeader",components:{FixedHeader:n.n(r).a},props:{bgSolid:{type:Boolean,default:!1}},data:function(){return{menuOption:{menuShow:!1,menuSearch:!1,homeDropdown:!1,serviceDropdown:!1,projectDropdown:!1,blogDropdown:!1,aboutDropdown:!1}}}},c=(n(355),n(58)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("fixed-header",{attrs:{threshold:150}},[r("div",{staticClass:"transparent-header navbar",class:[e.bgSolid?"bg-solid":""]},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header-space py-3"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-xl-2 col-lg-3 col-md-3 col-8 order-1 order-xl-1"},[r("div",{staticClass:"header-logo"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(352),alt:"logo-img"}})])],1)]),e._v(" "),r("div",{staticClass:"col-xl-6 col-lg-1 col-md-2 col-4 order-3 order-xl-2"},[r("div",{staticClass:"main-menu d-none d-xl-block"},[r("nav",{attrs:{id:"mobile-menu"}},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[e._v("Inicio")])],1),e._v(" "),r("li",{staticClass:"menu-item-has-children"},[r("NuxtLink",{attrs:{to:e.$route.path}},[e._v("Servicios")]),e._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("NuxtLink",{attrs:{to:"/gestion-clientes"}},[e._v("Gestión de clientes")])],1),e._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/mensajeria-masiva"}},[e._v("Mensajería masiva")])],1),e._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/pagina-construccion"}},[e._v("Habeas Data")])],1)])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/pagina-construccion"}},[e._v("#LaxAcademy")])],1)])])]),e._v(" "),r("div",{staticClass:"d-block d-xl-none text-end"},[r("div",{staticClass:"menu-bar"},[r("button",{staticClass:"bars",on:{click:function(t){e.menuOption.menuShow=!e.menuOption.menuShow}}},[r("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1)])])]),e._v(" "),r("div",{staticClass:"\n                col-xl-4 col-lg-8 col-md-7\n                d-none d-md-block\n                order-2 order-xl-3\n              "},[r("div",{staticClass:"header-right text-end"},[r("div",{staticClass:"header-social",staticStyle:{width:"14rem"}},[r("a",{attrs:{href:"https://www.linkedin.com/company/laxdatalovers/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),e._v(" "),r("a",{attrs:{href:"https://www.instagram.com/laxdatalovers/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),e._v(" "),r("a",{attrs:{href:"https://twitter.com/laxdatalovers",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e._v(" "),r("a",{attrs:{href:"https://www.youtube.com/channel/UCUSBKqZ2RnCXWnDSAZdNcrg",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)]),e._v(" "),r("div",{staticClass:"header-btn"},[r("a",{staticClass:"theme-btn theme-btn-small",attrs:{href:"https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C",target:"_blank"}},[e._v("\n                    Contáctanos\n                  ")])])])])])])])])]),e._v(" "),r("div",{staticClass:"fix"},[r("div",{staticClass:"side-mobile-menu",class:[!0===e.menuOption.menuShow?"active":""]},[r("button",{staticClass:"close-mobile-menu",on:{click:function(t){e.menuOption.menuShow=!e.menuOption.menuShow}}},[r("font-awesome-icon",{attrs:{icon:["fa","circle-xmark"]}})],1),e._v(" "),r("div",{staticClass:"side-info-content sidebar-menu mm-menu"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[e._v("Inicio")])],1),e._v(" "),r("li",{staticClass:"menu-item-has-children has-droupdown",class:[!0===e.menuOption.serviceDropdown?"active":""]},[r("a",{on:{click:function(t){e.menuOption.serviceDropdown=!e.menuOption.serviceDropdown}}},[e._v("Servicios")]),e._v(" "),r("ul",{staticClass:"sub-menu",class:[!0===e.menuOption.serviceDropdown?"active":""]},[r("li",[r("NuxtLink",{attrs:{to:"/gestion-clientes"}},[e._v("Gestión de clientes")])],1),e._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/mensajeria-masiva"}},[e._v("Mensajería masiva")])],1)])])])]),e._v(" "),r("div",{staticClass:"contact-infos mb-30"},[r("div",{staticClass:"contact-list mb-30"},[r("ul",[r("li",[r("font-awesome-icon",{attrs:{icon:["fa","envelope"]}}),e._v(" "),r("a",{attrs:{href:"mailto:hablemos@lax.agency"}},[e._v("hablemos@lax.agency")])],1),e._v(" "),r("li",[r("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}}),e._v(" "),r("a",{attrs:{href:"https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C"}},[e._v("+57 3153551845")])],1)]),e._v(" "),r("div",{staticClass:"sidebar__menu--social"},[r("a",{attrs:{href:"https://www.instagram.com/laxdatalovers/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),e._v(" "),r("a",{attrs:{href:"https://www.linkedin.com/company/laxdatalovers/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),e._v(" "),r("a",{attrs:{href:"https://www.instagram.com/laxdatalovers/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e._v(" "),r("a",{attrs:{href:"https://www.linkedin.com/company/laxdatalovers/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)])])])])]),e._v(" "),r("div",{staticClass:"body-overlay",class:[!0===e.menuOption.menuShow?"active":""]}),e._v(" "),r("div",{staticClass:"search-wrap",class:[!0===e.menuOption.menuSearch?"active":""]},[r("div",{staticClass:"search-inner"},[r("i",{staticClass:"search-close",attrs:{id:"search-close"},on:{click:function(t){e.menuOption.menuSearch=!e.menuOption.menuSearch}}},[r("font-awesome-icon",{attrs:{icon:["fa","circle-xmark"]}})],1),e._v(" "),e._m(0)])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"search-cell"},[t("form",{attrs:{method:"get"}},[t("div",{staticClass:"search-field-holder"},[t("input",{staticClass:"main-search-input",attrs:{type:"search",placeholder:"Buscar ..."}})])])])}],!1,null,"b9765dae",null);t.default=component.exports},506:function(e,t,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("3382465a",content,!0,{sourceMap:!1})},507:function(e,t,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("4db5b7be",content,!0,{sourceMap:!1})},581:function(e,t,n){e.exports=n.p+"img/banner_data_tratment.28c2642.png"},582:function(e,t,n){"use strict";n(506)},583:function(e,t,n){var r=n(52)(!1);r.push([e.i,".img-banner[data-v-25c45bd8]{width:100%}",""]),e.exports=r},584:function(e,t,n){e.exports=n.p+"img/picture_footer.6b3f30c.png"},585:function(e,t,n){"use strict";n(507)},586:function(e,t,n){var r=n(52)(!1);r.push([e.i,".container-text[data-v-182753aa]{padding-left:9rem;padding-right:9rem}.title[data-v-182753aa]{color:#f64ea9;text-align:center;margin-top:3rem;margin-bottom:2rem;font-size:2.5rem}.text[data-v-182753aa]{color:#000;font-size:2rem}.text strong[data-v-182753aa]{font-weight:700}.img[data-v-182753aa]{width:18rem}@media(max-width:1024px){.title[data-v-182753aa]{margin-top:2rem;margin-bottom:1rem;font-size:2rem}.text[data-v-182753aa]{color:#000;font-size:1.5rem}.container-text[data-v-182753aa]{padding-left:5rem;padding-right:5rem}.img[data-v-182753aa]{width:14rem}}@media(max-width:600px){.title[data-v-182753aa]{font-size:1.5rem}.text[data-v-182753aa]{color:#000;font-size:1.2rem;justify-content:center}.container-text[data-v-182753aa]{padding-left:1rem;padding-right:1rem}.img[data-v-182753aa]{width:10rem}}",""]),e.exports=r},688:function(e,t,n){"use strict";n.r(t);var r=n(360),o=n(689),c=n(690),l={name:"DataTratment",components:{Banner:o.default,PointList:c.default,Header:r.default}},d=n(58),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("Header"),e._v(" "),n("Banner",{staticStyle:{"margin-top":"8rem"}}),e._v(" "),n("div",{staticClass:"container-fluid"},[n("PointList")],1)],1)}),[],!1,null,"7a7b5fd6",null);t.default=component.exports},689:function(e,t,n){"use strict";n.r(t);var r=n(581),o=n.n(r),c={name:"BannerComponent",data:function(){return{imgBanner:o.a}}},l=(n(582),n(58)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("img",{staticClass:"img-banner",attrs:{src:e.imgBanner}})])}),[],!1,null,"25c45bd8",null);t.default=component.exports},690:function(e,t,n){"use strict";n.r(t);var r=n(584),o=n.n(r),c={name:"PointList",data:function(){return{picture:o.a}}},l=(n(585),n(58)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container-text"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("div",{staticClass:"row mb-3"},[n("article",{staticClass:"col d-flex justify-content-center mt-5"},[n("img",{staticClass:"img",attrs:{src:e.picture}})])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("1. OBJETIVO")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        Establecer los criterios para la recolección, almacenamiento, uso, circulación y supresión de los datos personales tratados\n        por "),n("strong",[e._v("LAX TECH S.A.S.")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("2. ALCANCE")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        Esta política aplica para toda la información personal registrada en las bases de datos de "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v(", quien actúa\n        en calidad de responsable del tratamiento de los datos personales.\n      ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("3. OBLIGACIONES")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        Esta política es de obligatorio y estricto cumplimiento para "),n("strong",[e._v("LAX TECH S.A.S.")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("4. RESPONSABLE DEL TRATAMIENTO")]),e._v(" "),n("p",{staticClass:"text"},[n("strong",[e._v("LAX TECH S.A.S.")]),e._v(", sociedad identificada con el NIT 900.830.503-9, domiciliada en la ciudad de Sabaneta, en la dirección\n        CR 46 B 75 SUR 73 LC 3.\n      ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("5. TRATAMIENTO Y FINALIDAD")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        El tratamiento que realizará "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v(" con la información personal será la recolección, almacenamiento, uso,\n        circulación y supresión de la misma para:"),n("br"),n("br"),e._v(" "),n("ol",{staticStyle:{"margin-left":"40px"}},[n("li",[e._v("Cumplir con las obligaciones derivadas de la relación contractual con el titular de la información.")]),e._v(" "),n("li",[e._v("Realizar encuestas, estudios y/o confirmación de datos personales necesarios para la ejecución de la relación.")]),e._v(" "),n("li",[e._v("Contractual con el titular de la información.")]),e._v(" "),n("li",[e._v("Gestionar trámites (solicitudes, quejas, reclamos).")]),e._v(" "),n("li",[e._v("Ofrecer nuevos productos y servicios.")]),e._v(" "),n("li",[e._v("Realizar invitaciones a eventos o actividades.")]),e._v(" "),n("li",[e._v("Realizar campañas de fidelización.")]),e._v(" "),n("li",[e._v("\n            Efectuar evaluaciones y encuestas de satisfacción respecto de los productos y servicios ofrecidos.\n            Remitir extractos, estados de cuenta o facturas relacionadas con las obligaciones derivadas de nuestra relación\n            contractual.\n          ")]),e._v(" "),n("li",[e._v("\n            Suministrar información a cualquier tercero con quien "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v(" tenga un vínculo contractual para el\n            desarrollo de actividades de fortalecimiento comercial, red de distribución, mercadeo, investigación de mercados,\n            entre otros.\n          ")]),e._v(" "),n("li",[e._v("\n            Suministrar la información a cualquier tercero con quien "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v(" tenga relación contractual y que sea\n            necesario entregársela para el cumplimiento del objeto contratado.\n          ")])]),n("br"),e._v("\n\n        Los datos sensibles que sean recolectados podrán ser tratados con las mismas finalidades antes indicadas.\n      ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("6. DERECHOS DE LOS TITULARES")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        Los titulares de los datos personales, tendrán los siguientes derechos:"),n("br"),n("br"),e._v(" "),n("ol",{staticStyle:{"margin-left":"40px","list-style-type":"upper-roman"}},[n("li",[e._v("Acceder de forma gratuita a los datos proporcionados que hayan sido objeto de tratamiento.")]),e._v(" "),n("li",[e._v("\n            Conocer, actualizar y rectificar su información frente a datos parciales, inexactos, incompletos, fraccionados, que\n            induzcan a error, o a aquellos cuyo tratamiento esté prohibido o no haya sido autorizado.\n          ")]),e._v(" "),n("li",[e._v("Solicitar prueba de la autorización otorgada.")]),e._v(" "),n("li",[e._v("\n            Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la\n            normatividad vigente.  \n          ")]),e._v(" "),n("li",[e._v("\n            Revocar la autorización y/o solicitar la supresión del dato, siempre que no exista un deber legal o contractual que\n            impida eliminarlos.  \n          ")]),e._v(" "),n("li",[e._v("\n            Abstenerse de responder las preguntas sobre datos sensibles. Tendrá carácter facultativo las respuestas que versen\n            sobre datos sensibles o sobre datos de las niñas, niños y adolescentes.  \n          ")])]),n("br")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("7. ATENCIÓN DE PETICIONES, CONSULTAS Y RECLAMOS")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        Los derechos de los titulares de los datos personales se podrán ejercer a través de los canales o medios dispuestos por\n        "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v(" para la atención al público, la línea de atención "),n("strong",[e._v("+57 315-355-1845")]),e._v(" y el correo electrónico\n        "),n("strong",[e._v("hablemos@lax.agency")]),e._v(", para la atención de requerimientos relacionados con el tratamiento de mis datos personales y\n        el ejercicio de los derechos mencionados en esta autorización."),n("br"),n("br"),e._v("\n\n        El funcionario Sergio Arango es la persona encargada de dar trámite a las solicitudes de los titulares para hacer efectivos\n        sus derechos.\n      ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("8. PROCEDIMIENTO PARA EL EJERCICIO DEL DERECHO DE HABEAS DATA")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        En cumplimiento de las normas sobre protección de datos personales, "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v(" presenta el procedimiento y\n        requisitos mínimos para el ejercicio de los derechos de los titulares de los datos personales."),n("br"),n("br"),e._v("\n\n        Para la radicación y atención de su solicitud le solicitamos suministrar la siguiente información:"),n("br"),n("br"),e._v(" "),n("ul",{staticStyle:{"margin-left":"40px"}},[n("li",[e._v("Nombre completo y apellidos;")]),e._v(" "),n("li",[e._v("Datos de contacto (dirección física y/o electrónica y teléfonos de contacto);")]),e._v(" "),n("li",[e._v("Medios para recibir respuesta a su solicitud;")]),e._v(" "),n("li",[e._v("\n            Motivo(s) o hecho(s) que dan lugar al reclamo con una breve descripción del derecho que sea ejercer (conocer,\n            actualizar, rectificar, solicitar prueba de la autorización otorgada, revocarla, suprimir, acceder a la información); \n          ")]),e._v(" "),n("li",[e._v("Firma (si aplica) y número de identificación.")])]),n("br"),e._v("\n\n        El término máximo previsto por la ley para resolver las reclamaciones es de quince (15) días hábiles, contado a partir del\n        día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, "),n("strong",[e._v("LAX TECH S.A.S.")]),e._v("\n        informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso\n        podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término."),n("br"),n("br"),e._v("\n\n        Una vez cumplidos los términos señalados por la Ley 1581 de 2012 y las demás normas que la reglamenten o\n        complementen, el Titular al que se deniegue, total o parcialmente, el ejercicio de los derechos de acceso, actualización,\n        rectificación, supresión y revocación, podrá poner su caso en conocimiento de la Superintendencia de Industria y Comercio\n        "),n("strong",[e._v("–Delegatura para la Protección de Datos Personales-.")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("article",{staticClass:"col"},[n("h3",{staticClass:"title"},[e._v("9. VIGENCIA")]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n        La presente Política para el Tratamiento de Datos Personales rige a partir del 01 de enero de 2021. Los datos personales\n        proporcionados se conservarán mientras no se solicite su supresión por el interesado y siempre que no exista un deber\n        legal de conservarlos.\n      ")])])])}],!1,null,"182753aa",null);t.default=component.exports}}]);