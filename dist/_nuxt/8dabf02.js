(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{351:function(t,e,n){t.exports=n.p+"img/email-send.7e044df.png"},466:function(t,e,n){var content=n(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("7fe581ce",content,!0,{sourceMap:!1})},548:function(t,e,n){"use strict";n(466)},549:function(t,e,n){var o=n(52)(!1);o.push([t.i,".custom--input--form[data-v-34cbf072]{color:#fff!important;height:38px;border-radius:0!important;background-color:transparent;border-color:#f990c9!important;border-style:solid!important;border-width:0 0 2px 2px!important}.custom--input--form[data-v-34cbf072]::-moz-placeholder{color:#fff!important}.custom--input--form[data-v-34cbf072]:-ms-input-placeholder{color:#fff!important}.custom--input--form[data-v-34cbf072]::placeholder{color:#fff!important}.theme-btn[data-v-34cbf072]{background-color:#000!important}",""]),t.exports=o},666:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(6),n(3),n(7);var o=n(23),r=n(0),c=(n(70),n(22),n(11),n(38),n(1),n(85)),l=n(351),m=n.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"FormFooter",props:{pageType:{type:String,default:String}},data:function(){return{imgEmailSend:m.a,type:this.pageType,isLoading:!1,isAlert:!1,isEmailSend:!1,alertMessage:{type:"",icon:"",message:""},dataContact:{name:"",lastName:"",phoneNumber:"",email:"",nameCompany:"",position:"",pageType:"",ip:null,city:null,region:null,platform:null,isMobile:null,termsAndCondition:!1}}},methods:f(f({},Object(c.b)({actionSendDataContact:"actionSendDataContact"})),{},{resetData:function(){this.dataContact={name:"",lastName:"",phoneNumber:"",email:"",nameCompany:"",position:"",pageType:"",ip:null,city:null,region:null,platform:null,isMobile:null,termsAndCondition:!1},this.alertMessage={type:"",icon:"",message:""},this.isAlert=!1,this.isEmailSend=!1},validateData:function(data){var t=/^[a-zA-Z ]+$/;return!0!==data.termsAndCondition?{state:!1,message:"Por favor acepte los términos y condiciones."}:0===data.name.length||0===data.lastName.length||0===data.phoneNumber.length||0===data.email.length?{state:!1,message:"Por favor complete los campos requeridos."}:t.test(data.name.trim())?t.test(data.lastName.trim())?/^[0-9]+$/.test(data.phoneNumber.trim())?data.phoneNumber.trim().length<10||3!==parseInt(data.phoneNumber.trim().substring(0,1))?{state:!1,message:"Debe ingresar un celular válido, que inicie por 3 y tenga 10 números."}:/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(data.email.trim())?{state:!0,message:""}:{state:!1,message:"Debe ingresar un email valido, ejemplo: tu.email@lax.agency"}:{state:!1,message:"Debe ingresar un celular válido, sin caracteres especiales ni letras."}:{state:!1,message:"El apellido no puede contener números ni caracteres especiales."}:{state:!1,message:"El nombre no puede contener números ni caracteres especiales."}},sendDataContact:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.isLoading=!0,t.dataContact.pageType=t.pageType,(n=t.validateData(t.dataContact)).state){e.next=10;break}return t.isLoading=!1,t.alertMessage.type="error",t.alertMessage.message=n.message,t.isAlert=!0,e.abrupt("return",t.isAlert);case 10:return e.next=12,t.getDataIp();case 12:return o=e.sent,t.dataContact.pageType="pagina-web-footer",t.dataContact.ip=o.ip,t.dataContact.city=o.city,t.dataContact.region=o.region,t.dataContact.platform=o.platform,t.dataContact.isMobile=o.isMobile,e.next=21,t.actionSendDataContact(t.dataContact);case 21:if(500!==(r=e.sent).status){e.next=28;break}return t.isLoading=!1,t.alertMessage.type="error",t.alertMessage.message=String(r.data),t.isAlert=!0,e.abrupt("return",t.isAlert);case 28:if(200===r.status){e.next=34;break}return t.isLoading=!1,t.alertMessage.type="error",t.alertMessage.message=String(r.data.error),t.isAlert=!0,e.abrupt("return",t.isAlert);case 34:return t.isAlert=!0,t.alertMessage.type="success",t.alertMessage.message=String(r.data.message),t.isLoading=!1,t.isEmailSend=!0,e.abrupt("return",t.alertMessage);case 42:return e.prev=42,e.t0=e.catch(0),console.log(e.t0),t.isLoading=!1,t.alertMessage.type="error",t.alertMessage.message="Estamos presentando problemas para realizar tú solicitud. (".concat(e.t0.message,")"),t.isAlert=!0,e.abrupt("return",t.isAlert);case 50:case"end":return e.stop()}}),e,null,[[0,42]])})))()},getIp:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.ipify.org?format=json");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},getDataIp:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,m,d,f,v,C,h,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIp();case 2:return l=e.sent,e.next=5,fetch("https://ipapi.co/".concat(l.ip.trim(),"/json/"));case 5:return m=e.sent,d=(null===(n=navigator)||void 0===n||null===(o=n.userAgentData)||void 0===o?void 0:o.platform)||"No se pudo obtener esta propiedad",f=(null===(r=navigator)||void 0===r||null===(c=r.userAgentData)||void 0===c?void 0:c.mobile)||"No se pudo obtener esta propiedad",e.next=10,m.json();case 10:return v=e.sent,C=v.city,h=v.region,y=v.ip,e.abrupt("return",{city:C,region:h,ip:y,platform:d,isMobile:f});case 15:case"end":return e.stop()}}),e)})))()}})},C=(n(548),n(58)),component=Object(C.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"form-footer"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-4"},[t.isEmailSend?n("div",{staticClass:"col-12 mt-5"},[n("div",[n("div",{staticClass:"d-flex justify-content-center"},[n("img",{attrs:{src:t.imgEmailSend}})]),t._v(" "),n("div",{staticClass:"text-center text-white"},[t._v("\n            * Si no logras encontrarlo, revisa tu bandeja de spam.\n          ")]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center mt-3"},[n("button",{staticClass:"theme-btn theme-btn-small",on:{click:function(e){return e.preventDefault(),t.resetData.apply(null,arguments)}}},[t._v("\n              Enviar nuevo email\n            ")])])])]):n("div",{staticClass:"col-12 mx-auto"},[n("div",{staticClass:"kabout mb-50",attrs:{"data-aos":"zoom-out-down","data-swiper-autoplay":"10000"}},[n("div",{staticClass:"row"},[t.isAlert?n("div",{staticClass:"col-12"},[n("div",{staticClass:"alert d-flex justify-content-between align-content-center",class:"error"===t.alertMessage.type?"alert-danger":"alert-success",attrs:{role:"alert"}},[n("div",[n("font-awesome-icon",{staticClass:"bi flex-shrink-0 me-2",attrs:{icon:["fas","triangle-exclamation"]}}),t._v("\n                  "+t._s(t.alertMessage.message)+"                    \n                ")],1),t._v(" "),n("div",{staticClass:"ml-auto"},[n("font-awesome-icon",{staticClass:"bi flex-shrink-0 me-2",staticStyle:{cursor:"pointer"},attrs:{icon:["fa","circle-xmark"]},on:{click:function(e){t.isAlert=!1}}})],1)])]):t._e(),t._v(" "),n("div",{staticClass:"col-12 mt-2"},[n("form",[n("div",{staticClass:"mb-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.name,expression:"dataContact.name"}],staticClass:"\n                          form-control\n                          custom--input--form\n                          font-family-MonumentExtended-Light\n                        ",attrs:{type:"text",placeholder:"*NOMBRE"},domProps:{value:t.dataContact.name},on:{input:function(e){e.target.composing||t.$set(t.dataContact,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.lastName,expression:"dataContact.lastName"}],staticClass:"\n                          form-control\n                          custom--input--form\n                          font-family-MonumentExtended-Light\n                        ",attrs:{type:"text",placeholder:"*APELLIDO"},domProps:{value:t.dataContact.lastName},on:{input:function(e){e.target.composing||t.$set(t.dataContact,"lastName",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"mb-3 input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.phoneNumber,expression:"dataContact.phoneNumber"}],staticClass:"\n                      form-control\n                      custom--input--form\n                      font-family-MonumentExtended-Light\n                    ",attrs:{type:"tel",maxlength:"10",minlength:"10",placeholder:"*CELULAR"},domProps:{value:t.dataContact.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.dataContact,"phoneNumber",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-3 input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.email,expression:"dataContact.email"}],staticClass:"\n                      form-control\n                      custom--input--form\n                      font-family-MonumentExtended-Light\n                    ",attrs:{type:"email",placeholder:"*EMAIL"},domProps:{value:t.dataContact.email},on:{input:function(e){e.target.composing||t.$set(t.dataContact,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-3 input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.nameCompany,expression:"dataContact.nameCompany"}],staticClass:"\n                      form-control\n                      custom--input--form\n                      font-family-MonumentExtended-Light\n                    ",attrs:{type:"text",placeholder:"NOMBRE DE EMPRESA"},domProps:{value:t.dataContact.nameCompany},on:{input:function(e){e.target.composing||t.$set(t.dataContact,"nameCompany",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.position,expression:"dataContact.position"}],staticClass:"\n                      form-control\n                      custom--input--form\n                      font-family-MonumentExtended-Light\n                    ",attrs:{type:"text",placeholder:"CARGO"},domProps:{value:t.dataContact.position},on:{input:function(e){e.target.composing||t.$set(t.dataContact,"position",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-3 mt-2 form-check"},[n("p",{staticStyle:{"font-size":"15px",color:"white"}},[t._v("*Campos obligatorios")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataContact.termsAndCondition,expression:"dataContact.termsAndCondition"}],staticClass:"form-check-input",attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.dataContact.termsAndCondition)?t._i(t.dataContact.termsAndCondition,null)>-1:t.dataContact.termsAndCondition},on:{change:function(e){var n=t.dataContact.termsAndCondition,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&t.$set(t.dataContact,"termsAndCondition",n.concat([null])):c>-1&&t.$set(t.dataContact,"termsAndCondition",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.dataContact,"termsAndCondition",r)}}}),t._v(" "),n("label",{attrs:{for:"checkbox"}},[n("span",{staticStyle:{color:"white !important","font-size":"15px"}},[t._v("\n                        He leído y acepto\n                      ")]),t._v(" "),n("NuxtLink",{staticClass:"text-black",staticStyle:{"font-size":"15px"},attrs:{to:"/tratamiento-de-datos"}},[t._v(" los términos y condiciones de la política de datos.")])],1)]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center"},[n("button",{staticClass:"theme-btn theme-btn-small",on:{click:function(e){return e.preventDefault(),t.sendDataContact.apply(null,arguments)}}},[t.isLoading?n("span",[t._v("Cargando...")]):n("span",[t._v(" HABLEMOS ")])])])])])])])])])])])}),[],!1,null,"34cbf072",null);e.default=component.exports}}]);