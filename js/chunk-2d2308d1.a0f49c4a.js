(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2308d1"],{ed84:function(t,c,e){"use strict";e.r(c);var o=e("7a23"),n={class:"py-4"},a=Object(o["g"])("h2",{class:"text-center"},"產品列表",-1),s={class:"productListArea row gx-4 mb-5"},d={class:"row row-cols-1 row-cols-md-3 g-4"},r={class:"card"},i={class:"card-body"},u={class:"card-title"},b={class:"card-text text-decoration-line-through mb-2"},l={class:"card-text fs-4"},g={class:"fs-6 mx-2"},p={class:"d-grid p-0 bg-white btnArea"},j={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},O=Object(o["f"])("加入購物車"),h={key:0,class:"loading"},f=Object(o["g"])("div",{class:"loadIcon spinner-border",role:"status"},[Object(o["g"])("span",{class:"visually-hidden"},"Loading...")],-1);function v(t,c,e,v,w,k){return Object(o["s"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[a,Object(o["g"])("div",s,[Object(o["g"])("div",d,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(w.products,(function(t){return Object(o["s"])(),Object(o["d"])("div",{class:"col",key:t.id},[Object(o["g"])("div",r,[Object(o["g"])("div",{class:"imgArea rounded-top",style:{"background-image":"url(".concat(t.imageUrl,")")}},null,4),Object(o["g"])("div",i,[Object(o["g"])("h5",u,Object(o["A"])(t.title),1),Object(o["g"])("p",b,"原價：NT$"+Object(o["A"])(t.origin_price),1),Object(o["g"])("p",l,[Object(o["f"])(" 特價：NT$"+Object(o["A"])(t.price),1),Object(o["g"])("span",g,"(每"+Object(o["A"])(t.unit)+")",1)])]),Object(o["g"])("div",p,[Object(o["g"])("button",{type:"button",class:"btn btn-outline-warning rounded-0",onClick:function(c){return k.goToProduct(t.id)}},"詳細內容",8,["onClick"]),Object(o["g"])("button",{type:"button",class:"btn btn-danger rounded-0 rounded-bottom py-2",onClick:function(c){return k.addCart(t.id)}},[w.cartLoading===t.id?(Object(o["s"])(),Object(o["d"])("span",j)):Object(o["e"])("",!0),O],8,["onClick"])])])])})),128))])])]),w.getProductsLoading?(Object(o["s"])(),Object(o["d"])("div",h,[f])):Object(o["e"])("",!0)],64)}e("99af");var w=e("1940"),k=e.n(w),y={data:function(){return{products:[],cartLoading:"",getProductsLoading:!0}},methods:{getProductData:function(){var t=this;this.getProductsLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/products");this.$http.get(c).then((function(c){c.data.success&&(t.products=c.data.products,t.getProductsLoading=!1)})).catch((function(t){console.dir(t)}))},goToProduct:function(t){this.$router.push("/product/".concat(t))},addCart:function(t){var c=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.cartLoading=t;var o={data:{product_id:t,qty:e}},n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/cart");this.$http.post(n,o).then((function(t){t.data.success?(k()("加入購物車成功，可以至購物車分頁查看！"),c.cartLoading=""):(k()("加入購物車失敗，請稍後再嘗試！"),c.cartLoading="")})).catch((function(t){console.dir(t)}))}},created:function(){this.getProductData()}};y.render=v;c["default"]=y}}]);
//# sourceMappingURL=chunk-2d2308d1.a0f49c4a.js.map