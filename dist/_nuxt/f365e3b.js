(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{369:function(n,e,r){var map={"./brand-1.png":370,"./brand-10.png":371,"./brand-11.png":372,"./brand-12.png":373,"./brand-13.png":374,"./brand-14.png":375,"./brand-15.png":376,"./brand-16.png":377,"./brand-17.png":378,"./brand-18.png":379,"./brand-19.png":380,"./brand-2.png":381,"./brand-20.png":382,"./brand-21.png":383,"./brand-22.png":384,"./brand-3.png":385,"./brand-4.png":386,"./brand-5.png":387,"./brand-6.png":388,"./brand-7.png":389,"./brand-8.png":390,"./brand-9.png":391};function d(n){var e=o(n);return r(e)}function o(n){if(!r.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}d.keys=function(){return Object.keys(map)},d.resolve=o,n.exports=d,d.id=369},370:function(n,e,r){n.exports=r.p+"img/brand-1.a846ba2.png"},371:function(n,e,r){n.exports=r.p+"img/brand-10.dc45779.png"},372:function(n,e,r){n.exports=r.p+"img/brand-11.8cf170c.png"},373:function(n,e,r){n.exports=r.p+"img/brand-12.3299bfa.png"},374:function(n,e,r){n.exports=r.p+"img/brand-13.36a74d4.png"},375:function(n,e,r){n.exports=r.p+"img/brand-14.267b08a.png"},376:function(n,e,r){n.exports=r.p+"img/brand-15.2570e26.png"},377:function(n,e,r){n.exports=r.p+"img/brand-16.fac07ef.png"},378:function(n,e,r){n.exports=r.p+"img/brand-17.a4598d5.png"},379:function(n,e,r){n.exports=r.p+"img/brand-18.4fb7838.png"},380:function(n,e,r){n.exports=r.p+"img/brand-19.59f19ec.png"},381:function(n,e,r){n.exports=r.p+"img/brand-2.32832a5.png"},382:function(n,e,r){n.exports=r.p+"img/brand-20.298acde.png"},383:function(n,e,r){n.exports=r.p+"img/brand-21.e8e8727.png"},384:function(n,e,r){n.exports=r.p+"img/brand-22.05a9b14.png"},385:function(n,e,r){n.exports=r.p+"img/brand-3.48cee2d.png"},386:function(n,e,r){n.exports=r.p+"img/brand-4.28cc093.png"},387:function(n,e,r){n.exports=r.p+"img/brand-5.70ebd42.png"},388:function(n,e,r){n.exports=r.p+"img/brand-6.a90da74.png"},389:function(n,e,r){n.exports=r.p+"img/brand-7.29106be.png"},390:function(n,e,r){n.exports=r.p+"img/brand-8.8d3c6e9.png"},391:function(n,e,r){n.exports=r.p+"img/brand-9.24af3f4.png"},425:function(n,e,r){"use strict";r.r(e);var d={name:"BrandsComponent",props:{component:{type:String,default:String}},data:function(){return{brands:[{id:1,image:"brand-1.png",url:"#",showIn:["g-clientes"]},{id:2,image:"brand-2.png",url:"#",showIn:["inicio","mensajeria"]},{id:3,image:"brand-3.png",url:"#",showIn:["inicio","g-clientes","mensajeria"]},{id:4,image:"brand-4.png",url:"#",showIn:["inicio"]},{id:5,image:"brand-5.png",url:"#",showIn:["inicio","mensajeria"]},{id:6,image:"brand-6.png",url:"#",showIn:["inicio","g-clientes"]},{id:7,image:"brand-7.png",url:"#",showIn:["inicio","mensajeria"]},{id:8,image:"brand-8.png",url:"#",showIn:["mensajeria"]},{id:9,image:"brand-9.png",url:"#",showIn:["mensajeria"]},{id:10,image:"brand-10.png",url:"#",showIn:["g-clientes"]},{id:11,image:"brand-11.png",url:"#",showIn:["mensajeria"]},{id:12,image:"brand-12.png",url:"#",showIn:["inicio","g-clientes","mensajeria"]},{id:13,image:"brand-13.png",url:"#",showIn:["g-clientes"]},{id:14,image:"brand-14.png",url:"#",showIn:["g-clientes"]},{id:15,image:"brand-15.png",url:"#",showIn:["mensajeria"]},{id:16,image:"brand-16.png",url:"#",showIn:["g-clientes"]},{id:17,image:"brand-17.png",url:"#",showIn:["inicio","g-clientes"]},{id:18,image:"brand-18.png",url:"#",showIn:["g-clientes"]},{id:19,image:"brand-19.png",url:"#",showIn:["inicio","mensajeria"]},{id:20,image:"brand-20.png",url:"#",showIn:["inicio","g-clientes","mensajeria"]},{id:21,image:"brand-21.png",url:"#",showIn:["inicio","g-clientes"]},{id:22,image:"brand-22.png",url:"#",showIn:["inicio","mensajeria"]}],swiperOptions:{slidesPerView:2,spaceBetween:30,loop:!0,infinite:!0,autoplay:{delay:2e3},pagination:{el:".swiper-pagination",dynamicBullets:!1},breakpoints:{550:{slidesPerView:3},768:{slidesPerView:4},1200:{slidesPerView:5}}}}},methods:{onSwiperRedied:function(n){console.log("Swiper redied!",n)},onSwiperClickSlide:function(n,e){console.log("Swiper click slide!",e)}}},o=r(58),component=Object(o.a)(d,(function(){var n=this,e=n.$createElement,d=n._self._c||e;return d("div",{staticClass:"brand-active py-3"},[d("client-only",[d("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:n.swiperOptions},on:{ready:n.onSwiperRedied,clickSlide:n.onSwiperClickSlide}},n._l(n.brands,(function(e){return d("swiper-slide",{directives:[{name:"show",rawName:"v-show",value:e.showIn.includes(n.component),expression:"item.showIn.includes(component)"}],key:e.id},[d("div",{staticClass:"brand-wrapper swiper-slide wow fadeInUp",attrs:{"data-wow-delay":".3s","data-swiper-autoplay":"1000"}},[d("a",{attrs:{href:e.url}},[d("img",{staticClass:"img-fluid",attrs:{src:r(369)("./"+e.image),alt:"img"}})])])])})),1)],1)],1)}),[],!1,null,"a88bffee",null);e.default=component.exports}}]);