(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{741:function(t,e,o){var map={"./project-big-img.jpg":742,"./project-img-1.jpg":743,"./project-img-10.jpg":744,"./project-img-11.jpg":745,"./project-img-12.jpg":746,"./project-img-13.jpg":747,"./project-img-2.jpg":748,"./project-img-3.jpg":749,"./project-img-4.jpg":750,"./project-img-5.jpg":751,"./project-img-6.jpg":752,"./project-img-7.jpg":753,"./project-img-8.jpg":754,"./project-img-9.jpg":755};function r(t){var e=c(t);return o(e)}function c(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=741},742:function(t,e,o){t.exports=o.p+"img/project-big-img.a3ef5f2.jpg"},743:function(t,e,o){t.exports=o.p+"img/project-img-1.33ddaa7.jpg"},744:function(t,e,o){t.exports=o.p+"img/project-img-10.a7f04fd.jpg"},745:function(t,e,o){t.exports=o.p+"img/project-img-11.2002ca5.jpg"},746:function(t,e,o){t.exports=o.p+"img/project-img-12.2002ca5.jpg"},747:function(t,e,o){t.exports=o.p+"img/project-img-13.2002ca5.jpg"},748:function(t,e,o){t.exports=o.p+"img/project-img-2.33ddaa7.jpg"},749:function(t,e,o){t.exports=o.p+"img/project-img-3.33ddaa7.jpg"},750:function(t,e,o){t.exports=o.p+"img/project-img-4.33ddaa7.jpg"},751:function(t,e,o){t.exports=o.p+"img/project-img-5.a7f04fd.jpg"},752:function(t,e,o){t.exports=o.p+"img/project-img-6.a7f04fd.jpg"},753:function(t,e,o){t.exports=o.p+"img/project-img-7.a7f04fd.jpg"},754:function(t,e,o){t.exports=o.p+"img/project-img-8.a7f04fd.jpg"},755:function(t,e,o){t.exports=o.p+"img/project-img-9.a7f04fd.jpg"},815:function(t,e,o){"use strict";o.r(e);var r={name:"SwiperSlider5",data:function(){return{sectionSubTitle:"Our recent work",sectionTitle:"Work showcase",projectContent:[{id:"1",image:"project-img-1.jpg",category:"Graphic",title:"Fimlor Experience",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{id:"2",image:"project-img-2.jpg",category:"Web Design",title:"Using SWR React",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{id:"3",image:"project-img-3.jpg",category:"Web Development",title:"Incremental Static",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{id:"4",image:"project-img-4.jpg",category:"Networking",title:"Developer Decisions",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{id:"5",image:"project-img-1.jpg",category:"Web Design",title:"Process of Taking",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{id:"6",image:"project-img-2.jpg",category:"Graphic",title:"Interactive Learning",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{id:"7",image:"project-img-3.jpg",category:"Web Devolopment",title:"Refactoring CSS",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"}],swiperOptions:{slidesPerView:1,spaceBetween:30,loop:!0,infinite:!1,centeredSlides:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".project-button-next",prevEl:".project-button-prev"},breakpoints:{480:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3},1400:{slidesPerView:4}}}}},methods:{onSwiperRedied:function(t){console.log("Swiper redied!",t)},onSwiperClickSlide:function(t,e){console.log("Swiper click slide!",e)}}},c=o(58),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"project-area bg-grey pt-115 pb-400 fix"},[t._m(0),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"section-title-wrapper mb-45"},[r("h5",{staticClass:"section-subtitle mb-20"},[t._v(t._s(t.sectionSubTitle))]),t._v(" "),r("h2",{staticClass:"section-title"},[t._v(t._s(t.sectionTitle))])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"lol text-md-end"},[r("div",{staticClass:"project-button-prev slide-prev"},[r("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-left"]}})],1),t._v(" "),r("div",{staticClass:"project-button-next slide-next"},[r("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-right"]}})],1)])])])]),t._v(" "),r("div",{staticClass:"project-active"},[r("client-only",[r("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOptions},on:{ready:t.onSwiperRedied,clickSlide:t.onSwiperClickSlide}},t._l(t.projectContent,(function(e){return r("swiper-slide",{key:e.id},[r("div",{staticClass:"kproject swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:o(741)("./"+e.image),alt:"project_img"}}),t._v(" "),r("div",{staticClass:"kproject-text"},[r("div",{staticClass:"kproject-text-content"},[r("span",[t._v(t._s(e.category))]),t._v(" "),r("h5",{staticClass:"kproject-text-title"},[r("NuxtLink",{attrs:{to:e.titleUrl}},[t._v(t._s(e.title))])],1)]),t._v(" "),r("div",{staticClass:"kproject-text-icon"},[r("NuxtLink",{staticClass:"kproject-text-icon-arrow",attrs:{to:e.projectLinkUrl}},[r("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-right"]}})],1)],1)])])])})),1)],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"common-shape-wrapper wow slideInRight animated",attrs:{"data-wow-delay":"0ms","data-wow-duration":"1500ms"}},[e("div",{staticClass:"common-shape-inner"})])}],!1,null,"15aab7e3",null);e.default=component.exports}}]);