(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},r={app:0},s=[];function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("9085")},"0c18":function(t,e,o){"use strict";o("4c99")},"160e":function(t,e,o){"use strict";o("4f48")},"24f3":function(t,e,o){"use strict";o("9a99")},"4c99":function(t,e,o){},"4f48":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("0147");var a=o("ef72"),r=o.n(a),s=(o("0662"),o("79b5")),n=o.n(s),i=(o("681e"),o("06a3")),c=o.n(i),l=(o("4149"),o("a93a")),d=o.n(l),u=(o("598e"),o("0557")),f=o.n(u),g=(o("1279"),o("561a")),p=o.n(g),m=(o("71cf"),o("41a3")),v=o.n(m),h=(o("fdc4"),o("bb05")),b=o.n(h),y=(o("9a5b"),o("f571")),w=o.n(y),_=(o("f9b3"),o("4ee8")),C=o.n(_),N=(o("065c"),o("2d92")),x=o.n(N),I=(o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("2b0e")),E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},k=[],M={name:"App"},L=M,D=(o("034f"),o("2877")),O=Object(D["a"])(L,E,k,!1,null,null,null),G=O.exports,P=o("8c4f"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"search-bar"},[o("van-row",[o("van-col",{attrs:{span:"3"}},[o("img",{staticClass:"location-icon",attrs:{src:t.locationIcon,width:"60%",alt:""}})]),o("van-col",{staticClass:"search-input",attrs:{span:"16"}}),o("van-col",{attrs:{span:"5"}},[o("van-button",{staticClass:"search-button",attrs:{size:"mini"}},[t._v("查找")])],1)],1)],1),o("div",{staticClass:"swiper-area"},[o("van-swipe",{attrs:{autoplay:"2000"}},t._l(t.bannerPicArray,(function(t,e){return o("van-swipe-item",{key:e},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imageUrl,expression:"item.imageUrl"}],attrs:{width:"100%",alt:""}})])})),1)],1),o("div",{staticClass:"type-bar"},t._l(t.category,(function(e,a){return o("div",{key:a},[o("img",{staticStyle:{width:"3rem"},attrs:{src:e.image,alt:""}}),o("div",{staticClass:"cate-name"},[t._v(t._s(e.mallCategoryName))])])})),0),o("div",[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.advBanner,expression:"advBanner"}],attrs:{width:"100% "}})]),o("div",{staticClass:"recommend-area"},[o("div",{staticClass:"recommend-title"},[t._v(" 商品推荐 ")]),o("div",{staticClass:"recommend-body"},[o("swiper",{attrs:{options:t.swiperOptions}},t._l(t.recommendGoods,(function(e,a){return o("swiper-slide",{key:a},[o("div",{staticClass:"recommend-item"},[o("img",{attrs:{src:e.image,width:"80%"}}),o("div",[t._v(t._s(e.goodsName))]),o("div",[t._v(" ￥"+t._s(t._f("moneyFilter")(e.price))+"(￥"+t._s(t._f("moneyFilter")(e.mallPrice))+") ")])])])})),1)],1)]),o("floor-component",{attrs:{floorData:t.floor1,floorTitle:t.floorName.floor1}}),o("floor-component",{attrs:{floorData:t.floor2,floorTitle:t.floorName.floor2}}),o("floor-component",{attrs:{floorData:t.floor3,floorTitle:t.floorName.floor3}}),o("div",{staticClass:"hot-area"},[o("div",{staticClass:"hot-title"},[t._v("热卖商品")]),o("div",{staticClass:"hot-goods"},[o("van-list",[o("van-row",{attrs:{gutter:"20"}},t._l(t.hotGoods,(function(t,e){return o("van-col",{key:e,attrs:{span:"12"}},[o("goods-info",{attrs:{goodsPrice:t.price,goodsImage:t.image,goodsName:t.name,goodsId:t.goodsId}})],1)})),1)],1)],1)])],1)},S=[],$=o("7212"),A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"floor"},[o("div",{staticClass:"floor-title"},[t._v(t._s(t.floorTitle))]),o("div",{staticClass:"floor-anomaly"},[o("div",{staticClass:"floor-one"},[o("img",{attrs:{src:t.floorData0.image,width:"100%"}})]),o("div",[o("div",{staticClass:"floor-two"},[o("img",{attrs:{src:t.floorData1.image,width:"100%"}})]),o("div",[o("img",{attrs:{src:t.floorData2.image,width:"100%"}})])])]),o("div",{staticClass:"floor-rule"},t._l(t.floorData.slice(3),(function(t,e){return o("div",{key:e},[o("img",{attrs:{src:t.image,width:"100%"}})])})),0)])},T=[],F={props:["floorData","floorTitle"],data:function(){return{floorData0:{},floorData1:{},floorData2:{}}},created:function(){},watch:{floorData:function(){this.floorData0=this.floorData[0],this.floorData1=this.floorData[1],this.floorData2=this.floorData[2]}}},z=F,B=(o("0c18"),Object(D["a"])(z,A,T,!1,null,"7b1cd294",null)),R=B.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"goods-info",on:{click:t.goGoodsPage}},[o("div",{staticClass:"goods-image"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsImage,expression:"goodsImage"}],attrs:{width:"90%"}})]),o("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsName))]),o("div",{staticClass:"goods-price"},[t._v("￥"+t._s(t._f("moneyFilter")(t.goodsPrice)))])])},q=[];o("b680");function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.toFixed(2)}var J={props:["goodsImage","goodsName","goodsPrice","goodsId"],data:function(){return{}},filters:{moneyFilter:function(t){return H(t)}},methods:{goGoodsPage:function(){this.$router.push({name:"Goods",query:{goodsId:this.goodsId}})}}},V=J,Y=(o("5b78"),Object(D["a"])(V,U,q,!1,null,"a0905bb4",null)),K=Y.exports,Q=o("841a"),W=o.n(Q),X=(o("dfa4"),{data:function(){return{locationIcon:o("cfdf"),bannerPicArray:[{imageUrl:"http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"},{imageUrl:"https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"},{imageUrl:"http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"}],category:[],advBanner:"",recommendGoods:[],swiperOptions:{slidesPerView:3},floor1:[],floor2:[],floor3:[],floorName:{},hotGoods:[]}},filters:{moneyFilter:function(t){return H(t)}},components:{swiper:$["swiper"],swiperSlide:$["swiperSlide"],floorComponent:R,goodsInfo:K},created:function(){var t=this;this.axios({url:W.a.getShoppingMallInfo,method:"get"}).then((function(e){if(200===e.status){var o=e.data.data;t.category=o.category,t.advBanner=o.advertesPicture.PICTURE_ADDRESS,t.recommendGoods=o.recommend,t.floor1=o.floor1,t.floor2=o.floor2,t.floor3=o.floor3,t.floorName=o.floorName,t.hotGoods=o.hotGoods}console.log(e)})).catch((function(t){console.log(t)}))}}),Z=X,tt=(o("eb50"),Object(D["a"])(Z,j,S,!1,null,"35997fa4",null)),et=tt.exports,ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"register"},[o("van-nav-bar",{attrs:{title:"用户注册","left-text":"返回","left-arrow":""},on:{"click-left":t.goBack}}),o("div",{staticClass:"register-panel"},[o("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:"",clearable:"","error-message":t.userNameErrorMsg},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),o("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码",required:"",clearable:"","error-message":t.passworErrorMsg},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("div",{staticClass:"register-button"},[o("van-button",{attrs:{type:"primary",size:"large",loading:t.openLoading},on:{click:t.registerAction}},[t._v("注册")])],1)],1)],1)},at=[],rt=(o("c2d8"),o("6d29")),st=o.n(rt),nt={data:function(){return{userName:"",password:"",openLoading:!1,userNameErrorMsg:"",passworErrorMsg:""}},methods:{goBack:function(){this.$router.go(-1)},registerAction:function(){this.checkForm()&&this.axiosRegister()},axiosRegister:function(){var t=this;this.openLoading=!0,this.axios({url:W.a.registerUser,method:"post",data:{userName:this.userName,password:this.password}}).then((function(e){console.log(e),200===e.data.code?(st.a.success(e.data.msg),t.$router.push("/")):(t.openLoading=!1,st.a.fail("注册失败")),console.log(e.data.msg)}))},checkForm:function(){var t=!0;return this.userName.length<5?(this.userNameErrorMsg="用户名不能小于5位",t=!1):this.userNameErrorMsg="",this.password.length<6?(t=!1,this.passworErrorMsg="密码不能小于6位"):this.userNameErrorMsg="",t}}},it=nt,ct=(o("5b66"),Object(D["a"])(it,ot,at,!1,null,"a72bb7fe",null)),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"register"},[o("van-nav-bar",{attrs:{title:"用户登录","left-text":"返回","left-arrow":""},on:{"click-left":t.goBack}}),o("div",{staticClass:"login-panel"},[o("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:"",clearable:"","error-message":t.userNameErrorMsg},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),o("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码",required:"",clearable:"","error-message":t.passworErrorMsg},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("div",{staticClass:"login-button"},[o("van-button",{attrs:{type:"primary",size:"large",loading:t.openLoading},on:{click:t.loginAction}},[t._v("登录")])],1)],1)],1)},ut=[],ft=(o("d3b7"),{data:function(){return{userName:"",password:"",openLoading:!1,userNameErrorMsg:"",passworErrorMsg:""}},created:function(){localStorage.userInfo&&(st.a.success("您已经登录过了"),this.$router.push("/"))},methods:{goBack:function(){this.$router.go(-1)},loginAction:function(){this.checkForm()&&this.axiosLogin()},axiosLogin:function(){var t=this;this.openLoading=!0,this.axios({url:W.a.login,method:"post",data:{userName:this.userName,password:this.password}}).then((function(e){200==e.data.code&&e.data.msg?new Promise((function(e){localStorage.userInfo={userName:t.userName},setTimeout((function(){e()}),500)})).then((function(){st.a.success("登录成功"),t.$router.push("/")})).catch((function(t){st.a.fail("登录状态保存失败"),console.log(t)})):(st.a.fail("登录失败,请检查账号密码是否正确"),t.openLoading=!1)})).catch((function(e){console.log(e),st.a.fail("登录失败"),t.openLoading=!1}))},checkForm:function(){var t=!0;return this.userName.length<5?(this.userNameErrorMsg="用户名不能小于5位",t=!1):this.userNameErrorMsg="",this.password.length<6?(t=!1,this.passworErrorMsg="密码不能小于6位"):this.userNameErrorMsg="",t}}}),gt=ft,pt=(o("6343"),Object(D["a"])(gt,dt,ut,!1,null,"0b585e0b",null)),mt=pt.exports,vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":""},on:{"click-left":t.goBack}}),o("div",{staticClass:"topimage"},[o("img",{attrs:{src:t.goodsInfo.IMAGE1,width:"100%"}})]),o("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsInfo.NAME))]),o("div",{staticClass:"goods-price"},[t._v("价格：￥"+t._s(t._f("moneyFilter")(t.goodsInfo.PRESENT_PRICE))+"元")]),o("div",[o("van-tabs",{attrs:{swipeable:"",sticky:"",animated:""}},[o("van-tab",{attrs:{title:"商品详情"}},[o("div",{staticClass:"detail",domProps:{innerHTML:t._s(t.goodsInfo.DETAIL)}})]),o("van-tab",{attrs:{title:"评论"}},[t._v(" 评论 ")])],1)],1),o("div",{staticClass:"goods-bottom"},[o("div",[o("van-button",{attrs:{size:"large",type:"primary"}},[t._v(" 加入购物车 ")])],1),o("div",[o("van-button",{attrs:{size:"large",type:"danger"}},[t._v(" 购买 ")])],1)])],1)},ht=[],bt={data:function(){return{goodsId:"",goodsInfo:{}}},filters:{moneyFilter:function(t){return H(t)}},methods:{getGoodsInfo:function(){var t=this;this.axios.post(W.a.getDetailGoodsInfo,{goodsId:this.goodsId}).then((function(e){200===e.data.code&&e.data.msg?t.goodsInfo=e.data.msg:st()("服务器错误，数据获取失败")})).catch((function(t){console.log(t)}))},goBack:function(){this.$router.go(-1)}},created:function(){this.goodsId=this.$route.query.goodsId,this.getGoodsInfo()}},yt=bt,wt=(o("160e"),Object(D["a"])(yt,vt,ht,!1,null,"7cd2a8f3",null)),_t=wt.exports,Ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"nav-bar"},[o("van-nav-bar",{attrs:{title:"类别列表"}})],1),o("div",[o("van-row",[o("van-col",{attrs:{span:"6"}},[o("div",{attrs:{id:"left-nav"}},[o("ul",t._l(t.category,(function(e,a){return o("li",{key:a,class:t.curIndex==a?"category-active":"",on:{click:function(e){return t.clickLeftNav(a)}}},[t._v(" "+t._s(e.MALL_CATEGORY_NAME)+" ")])})),0)])]),o("van-col",{attrs:{span:"18"}},[o("div",[t._v(" 右侧列表 ")])])],1)],1)])},Nt=[],xt=(o("96cf"),o("1da1")),It={data:function(){return{category:[],curIndex:0}},methods:{getCateGory:function(){var t=this;return Object(xt["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios({url:W.a.getCategoryList,methods:"get"});case 3:o=e.sent,200===o.data.code&&o.data.res?t.category=o.data.res:st()("服务器错误,商品获取失败"),console.log(o),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},clickLeftNav:function(t){this.curIndex=t}},created:function(){this.getCateGory()},mounted:function(){var t=document.documentElement.clientHeight;document.getElementById("left-nav").style.height=t+"px"}},Et=It,kt=(o("24f3"),Object(D["a"])(Et,Ct,Nt,!1,null,"16ddee7b",null)),Mt=kt.exports;I["default"].use(P["a"]);var Lt=new P["a"]({mode:"history",routes:[{path:"/",name:"ShoppingMall",component:et},{path:"/register",name:"Register",component:lt},{path:"/login",name:"Login",component:mt},{path:"/goods",name:"Goods",component:_t},{path:"/categoryList",name:"CategoryList",component:Mt}]}),Dt=o("bc3a"),Ot=o.n(Dt);I["default"].prototype.axios=Ot.a,I["default"].use(r.a).use(n.a).use(c.a).use(d.a).use(f.a).use(p.a).use(v.a).use(b.a).use(w.a).use(C.a).use(x.a),I["default"].config.productionTip=!1,new I["default"]({router:Lt,render:function(t){return t(G)}}).$mount("#app")},"5b66":function(t,e,o){"use strict";o("5bd8")},"5b78":function(t,e,o){"use strict";o("f8a5")},"5bd8":function(t,e,o){},6343:function(t,e,o){"use strict";o("c1db")},"841a":function(t,e){var o="http://localhost:3000/",a={getShoppingMallInfo:o+"data",getGoodsInfo:o+"getGoodsInfo",registerUser:o+"user/register",getDetailGoodsInfo:o+"goods/getDetailGoodsInfo",getCategoryList:o+"goods/getCategoryList",getCategorySubList:o+"goods/getCategorySubList"};t.exports=a},9085:function(t,e,o){},"9a99":function(t,e,o){},c1db:function(t,e,o){},cfdf:function(t,e,o){t.exports=o.p+"img/定位.48f6f95d.png"},eb50:function(t,e,o){"use strict";o("fb58")},f8a5:function(t,e,o){},fb58:function(t,e,o){}});
//# sourceMappingURL=app.74f7b975.js.map