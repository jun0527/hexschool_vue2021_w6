(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52bd0f35"],{"499c":function(e,t,a){"use strict";a.r(t);a("b0c0");var s=a("7a23"),l={class:"py-4"},o=Object(s["g"])("h2",{class:"text-center"},"填寫購買人資料",-1),c={class:"formGroup mb-3"},r=Object(s["g"])("label",{for:"email",class:"form-label"},"email",-1),n={class:"formGroup mb-3"},i=Object(s["g"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),d={class:"formGroup mb-3"},u=Object(s["g"])("label",{for:"tel",class:"form-label"},"收件人手機號碼",-1),b={class:"formGroup mb-3"},m=Object(s["g"])("label",{for:"address",class:"form-label"},"收件人地址",-1),f={class:"formGroup mb-3"},j=Object(s["g"])("label",{for:"message",class:"form-label"},"備註",-1),O=Object(s["g"])("div",{class:"fromGroup d-flex justify-content-center"},[Object(s["g"])("button",{type:"submit",class:"btn btn-primary"},"送出資料")],-1);function g(e,t,a,g,p,h){var v=Object(s["x"])("Field"),M=Object(s["x"])("Error-Message"),y=Object(s["x"])("Form"),x=Object(s["x"])("submitModal");return Object(s["s"])(),Object(s["d"])(s["a"],null,[Object(s["g"])("div",l,[o,Object(s["g"])(y,{class:"containerForm py-2",onSubmit:h.submitData},{default:Object(s["F"])((function(e){var a=e.errors;return[Object(s["g"])("div",c,[r,Object(s["g"])(v,{type:"email",name:"email",id:"email",class:["form-control",{"is-invalid":a["email"]}],rules:"required|email",modelValue:p.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.user.email=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(s["g"])(M,{name:"email",class:"invalid-feedback"})]),Object(s["g"])("div",n,[i,Object(s["g"])(v,{type:"text",name:"收件人姓名",id:"name",class:["form-control",{"is-invalid":a["收件人姓名"]}],rules:"required",modelValue:p.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.user.name=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(s["g"])(M,{name:"收件人姓名",class:"invalid-feedback"})]),Object(s["g"])("div",d,[u,Object(s["g"])(v,{type:"tel",name:"收件人手機號碼",id:"tel",class:["form-control",{"is-invalid":a["收件人手機號碼"]}],rules:h.isPhone,modelValue:p.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.user.tel=e}),modelModifiers:{trim:!0}},null,8,["class","rules","modelValue"]),Object(s["g"])(M,{name:"收件人手機號碼",class:"invalid-feedback"})]),Object(s["g"])("div",b,[m,Object(s["g"])(v,{type:"text",name:"收件人地址",id:"address",class:["form-control",{"is-invalid":a["收件人地址"]}],rules:"required",modelValue:p.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return p.user.address=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(s["g"])(M,{name:"收件人地址",class:"invalid-feedback"})]),Object(s["g"])("div",f,[j,Object(s["g"])(v,{type:"text",name:"備註",id:"message",class:"form-control",as:"textarea",modelValue:p.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return p.message=e}),modelModifiers:{trim:!0}},null,8,["modelValue"])]),O]})),_:1},8,["onSubmit"])]),Object(s["g"])(x,{ref:"submitModal",user:p.user,message:p.message},null,8,["user","message"])],64)}var p={class:"modal fade",ref:"submitModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},h={class:"modal-dialog modal-dialog-scrollable"},v={class:"modal-content"},M={class:"modal-header bg-dark"},y=Object(s["g"])("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"訂單確認",-1),x={class:"modal-body"},k=Object(s["g"])("p",null,"訂單內容：",-1),V={class:"orderContent"},w={class:"total"},A={class:"modal-footer"},D={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},C=Object(s["f"])("送出訂單");function G(e,t,a,l,o,c){return Object(s["s"])(),Object(s["d"])("div",p,[Object(s["g"])("div",h,[Object(s["g"])("div",v,[Object(s["g"])("div",M,[y,Object(s["g"])("button",{type:"button",class:"btn-close btn-close-white",onClick:t[1]||(t[1]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)})})]),Object(s["g"])("div",x,[Object(s["g"])("p",null,"收件人姓名："+Object(s["A"])(a.user.name),1),Object(s["g"])("p",null,"收件人email："+Object(s["A"])(a.user.email),1),Object(s["g"])("p",null,"收件人電話："+Object(s["A"])(a.user.tel),1),Object(s["g"])("p",null,"收件人地址："+Object(s["A"])(a.user.address),1),Object(s["g"])("p",null,"留言："+Object(s["A"])(a.message),1),k,Object(s["g"])("div",V,[(Object(s["s"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(o.cartData.carts,(function(e){return Object(s["s"])(),Object(s["d"])("p",{key:e.id},Object(s["A"])(e.product.title)+" x "+Object(s["A"])(e.qty),1)})),128)),Object(s["g"])("p",w,"總金額："+Object(s["A"])(o.cartData.final_total),1)])]),Object(s["g"])("div",A,[Object(s["g"])("button",{type:"button",class:"btn btn-secondary",onClick:t[2]||(t[2]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)})},"取消"),Object(s["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(){return c.submitOrder&&c.submitOrder.apply(c,arguments)})},[o.submitLoading?(Object(s["s"])(),Object(s["d"])("span",D)):Object(s["e"])("",!0),C])])])])],512)}a("99af");var L=a("7b17"),$=a("1940"),F=a.n($),U={data:function(){return{submitModal:{},cartData:{},submitLoading:!1}},props:["user","message"],methods:{openModal:function(){this.submitModal.show()},closeModal:function(){this.submitModal.hide()},getCartData:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartData=t.data.data)})).catch((function(e){console.dir(e)}))},submitOrder:function(){var e=this;this.submitLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/order"),a={data:{user:this.user,message:this.message}};this.$http.post(t,a).then((function(t){t.data.success?(F()("訂單送出成功！"),e.submitLoading=!1,e.$router.push("/products"),e.closeModal()):(F()("訂單送出失敗！"),e.closeModal())})).catch((function(e){console.dir(e)}))}},mounted:function(){this.submitModal=new L["a"](this.$refs.submitModal,{backdrop:"static",keyboard:!1}),this.getCartData()}};U.render=G;var q=U,S={data:function(){return{user:{name:"",email:"",tel:"",address:""},message:""}},components:{submitModal:q},methods:{isPhone:function(e){if(!e)return"收件人手機號碼 為必填";var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"收件人手機號碼 須為正確的手機號碼"},submitData:function(){this.$refs.submitModal.openModal()}}};S.render=g;t["default"]=S},b0c0:function(e,t,a){var s=a("83ab"),l=a("9bf2").f,o=Function.prototype,c=o.toString,r=/^\s*function ([^ (]*)/,n="name";s&&!(n in o)&&l(o,n,{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-52bd0f35.653c372e.js.map