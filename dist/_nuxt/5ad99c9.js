(window.webpackJsonp=window.webpackJsonp||[]).push([[27,20],{369:function(n,e,t){var map={"./brand-1.png":370,"./brand-10.png":371,"./brand-11.png":372,"./brand-12.png":373,"./brand-13.png":374,"./brand-14.png":375,"./brand-15.png":376,"./brand-16.png":377,"./brand-17.png":378,"./brand-18.png":379,"./brand-19.png":380,"./brand-2.png":381,"./brand-20.png":382,"./brand-21.png":383,"./brand-22.png":384,"./brand-3.png":385,"./brand-4.png":386,"./brand-5.png":387,"./brand-6.png":388,"./brand-7.png":389,"./brand-8.png":390,"./brand-9.png":391};function r(n){var e=d(n);return t(e)}function d(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=d,n.exports=r,r.id=369},370:function(n,e,t){n.exports=t.p+"img/brand-1.a846ba2.png"},371:function(n,e,t){n.exports=t.p+"img/brand-10.dc45779.png"},372:function(n,e,t){n.exports=t.p+"img/brand-11.8cf170c.png"},373:function(n,e,t){n.exports=t.p+"img/brand-12.3299bfa.png"},374:function(n,e,t){n.exports=t.p+"img/brand-13.36a74d4.png"},375:function(n,e,t){n.exports=t.p+"img/brand-14.267b08a.png"},376:function(n,e,t){n.exports=t.p+"img/brand-15.2570e26.png"},377:function(n,e,t){n.exports=t.p+"img/brand-16.fac07ef.png"},378:function(n,e,t){n.exports=t.p+"img/brand-17.a4598d5.png"},379:function(n,e,t){n.exports=t.p+"img/brand-18.4fb7838.png"},380:function(n,e,t){n.exports=t.p+"img/brand-19.59f19ec.png"},381:function(n,e,t){n.exports=t.p+"img/brand-2.32832a5.png"},382:function(n,e,t){n.exports=t.p+"img/brand-20.298acde.png"},383:function(n,e,t){n.exports=t.p+"img/brand-21.e8e8727.png"},384:function(n,e,t){n.exports=t.p+"img/brand-22.05a9b14.png"},385:function(n,e,t){n.exports=t.p+"img/brand-3.48cee2d.png"},386:function(n,e,t){n.exports=t.p+"img/brand-4.28cc093.png"},387:function(n,e,t){n.exports=t.p+"img/brand-5.70ebd42.png"},388:function(n,e,t){n.exports=t.p+"img/brand-6.a90da74.png"},389:function(n,e,t){n.exports=t.p+"img/brand-7.29106be.png"},390:function(n,e,t){n.exports=t.p+"img/brand-8.8d3c6e9.png"},391:function(n,e,t){n.exports=t.p+"img/brand-9.24af3f4.png"},425:function(n,e,t){"use strict";t.r(e);var r={name:"BrandsComponent",props:{component:{type:String,default:String}},data:function(){return{brands:[{id:1,image:"brand-1.png",url:"#",showIn:["g-clientes"]},{id:2,image:"brand-2.png",url:"#",showIn:["inicio","mensajeria"]},{id:3,image:"brand-3.png",url:"#",showIn:["inicio","g-clientes","mensajeria"]},{id:4,image:"brand-4.png",url:"#",showIn:["inicio"]},{id:5,image:"brand-5.png",url:"#",showIn:["inicio","mensajeria"]},{id:6,image:"brand-6.png",url:"#",showIn:["inicio","g-clientes"]},{id:7,image:"brand-7.png",url:"#",showIn:["inicio","mensajeria"]},{id:8,image:"brand-8.png",url:"#",showIn:["mensajeria"]},{id:9,image:"brand-9.png",url:"#",showIn:["mensajeria"]},{id:10,image:"brand-10.png",url:"#",showIn:["g-clientes"]},{id:11,image:"brand-11.png",url:"#",showIn:["mensajeria"]},{id:12,image:"brand-12.png",url:"#",showIn:["inicio","g-clientes","mensajeria"]},{id:13,image:"brand-13.png",url:"#",showIn:["g-clientes"]},{id:14,image:"brand-14.png",url:"#",showIn:["g-clientes"]},{id:15,image:"brand-15.png",url:"#",showIn:["mensajeria"]},{id:16,image:"brand-16.png",url:"#",showIn:["g-clientes"]},{id:17,image:"brand-17.png",url:"#",showIn:["inicio","g-clientes"]},{id:18,image:"brand-18.png",url:"#",showIn:["g-clientes"]},{id:19,image:"brand-19.png",url:"#",showIn:["inicio","mensajeria"]},{id:20,image:"brand-20.png",url:"#",showIn:["inicio","g-clientes","mensajeria"]},{id:21,image:"brand-21.png",url:"#",showIn:["inicio","g-clientes"]},{id:22,image:"brand-22.png",url:"#",showIn:["inicio","mensajeria"]}],swiperOptions:{slidesPerView:2,spaceBetween:30,loop:!0,infinite:!0,autoplay:{delay:2e3},pagination:{el:".swiper-pagination",dynamicBullets:!1},breakpoints:{550:{slidesPerView:3},768:{slidesPerView:4},1200:{slidesPerView:5}}}}},methods:{onSwiperRedied:function(n){console.log("Swiper redied!",n)},onSwiperClickSlide:function(n,e){console.log("Swiper click slide!",e)}}},d=t(58),component=Object(d.a)(r,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"brand-active py-3"},[r("client-only",[r("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:n.swiperOptions},on:{ready:n.onSwiperRedied,clickSlide:n.onSwiperClickSlide}},n._l(n.brands,(function(e){return r("swiper-slide",{directives:[{name:"show",rawName:"v-show",value:e.showIn.includes(n.component),expression:"item.showIn.includes(component)"}],key:e.id},[r("div",{staticClass:"brand-wrapper swiper-slide wow fadeInUp",attrs:{"data-wow-delay":".3s","data-swiper-autoplay":"1000"}},[r("a",{attrs:{href:e.url}},[r("img",{staticClass:"img-fluid",attrs:{src:t(369)("./"+e.image),alt:"img"}})])])])})),1)],1)],1)}),[],!1,null,"a88bffee",null);e.default=component.exports},474:function(n,e,t){var content=t(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(53).default)("3df9e58e",content,!0,{sourceMap:!1})},559:function(n,e,t){"use strict";t(474)},560:function(n,e,t){var r=t(52)(!1);r.push([n.i,".bg-brands[data-v-9defd5a2]{background-color:#f7f7f7!important}.title-1[data-v-9defd5a2]{font-size:4rem;line-height:.9;color:#7a54db;font-weight:700;line-height:1}.title-2[data-v-9defd5a2]{color:#7a54db;line-height:.9;font-size:3.865rem;padding-bottom:5px!important}@media (max-width:1250px){.title-1[data-v-9defd5a2]{font-size:3rem}.title-2[data-v-9defd5a2]{font-size:2.9rem}}@media (max-width:910px){.title-1[data-v-9defd5a2]{font-size:2rem}.title-2[data-v-9defd5a2]{font-size:1.93rem}}@media (max-width:480px){.title-1[data-v-9defd5a2]{font-size:1rem}.title-2[data-v-9defd5a2]{font-size:.97rem}}@media (max-width:290px){.title-1[data-v-9defd5a2]{font-size:1.5rem}.title-2[data-v-9defd5a2]{font-size:1.4rem}}",""]),n.exports=r},675:function(n,e,t){"use strict";t.r(e);var r={name:"ClientsComponent",components:{Brands:t(425).default},data:function(){return{data:{title1:"ELLOS YA EST??N HACIENDO",title2:"MARKETING RELACIONAL"}}}},d=(t(559),t(58)),component=Object(d.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"row mb-4"},[t("div",{staticClass:"col"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 text-center mb-5"},[t("h2",{staticClass:"display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light"},[n._v(n._s(n.data.title1))]),n._v(" "),t("h1",{staticClass:"display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black"},[n._v(n._s(n.data.title2))])])]),n._v(" "),t("div",{staticClass:"row bg-brands mb-5"},[t("div",{staticClass:"col-12 col-md-7 mx-auto"},[t("brands",{attrs:{component:"g-clientes"}})],1)])])])}),[],!1,null,"9defd5a2",null);e.default=component.exports}}]);