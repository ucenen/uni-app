(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-property-property"],{1983:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("59ad")),o=n(e("e814")),s={data:function(){return{list:[{id:1,img:"../../static/property/2.png",name:"ETH",num:"0",money:"≈￥45.11"},{id:1,img:"../../static/property/3.png",name:"USDT",num:"0",money:"≈￥101.11"},{id:1,img:"../../static/property/4.png",name:"ADC",num:"0",money:"≈￥101.11"},{id:1,img:"../../static/property/5.png",name:"USDT佣金",num:"0",money:"≈￥101.11"}],key:"",nickname:"",allMoney:0,show:!1,id:"",numberr:"",name:"",add:"",num:"",status:!0,password:""}},onLoad:function(){this.nickname=uni.getStorageSync("nickname")},onShow:function(){var t=this.checkLogin();if(!t)return!1;this.getinfo()},methods:{showMask:function(t){console.log(t),"USDT"!=t.name&&(t&&(this.id=t.tg_id,this.numberr=t.num,this.name=t.name),this.show=!0)},toPayPage:function(){uni.navigateTo({url:"../pay/pay?code="+this.key})},getinfo:function(){var t=this;this.$http({url:"/index/getSecretKey",method:"post",data:{uid:uni.getStorageSync("uid")}}).then(function(i){if(console.log(i),"ok"==i.status){t.key=i.data.key,t.info=i.data.userInfo;for(var e=i.data.userInfo,n=t.list,a=i.data.bi,o=0,s=0;s<n.length;s++)0==s&&(n[s].num=e["e_b"],n[s].money="≈￥"+t.setNum(e["e_b"]*a[s].lv),o+=t.setNum(e["e_b"]*a[s].lv),n[s].name=a[s].name),1==s&&(n[s].num=e["u_b"],n[s].money="≈￥"+t.setNum(e["u_b"]*a[s].lv),o+=t.setNum(e["u_b"]*a[s].lv),n[s].name=a[s].name),2==s&&(n[s].num=e["a_b"],n[s].money="≈￥"+t.setNum(e["a_b"]*a[s].lv),o+=t.setNum(e["a_b"]*a[s].lv),n[s].name=a[s].name),3==s&&(n[s].num=e["us_b"],n[s].money="≈￥"+t.setNum(e["us_b"]*a[s].lv),o+=t.setNum(e["us_b"]*a[s].lv),n[s].name=a[s].name);t.allMoney=o}}).catch(function(t){console.log(t)})},setNum:function(t){var i=Math.round(1e3*t)/1e3;return i},close:function(){this.show=!1},showMask1:function(){this.show=!0},send:function(){var t=this;this.status&&((0,o.default)(t.num)>(0,o.default)(t.numberr)?uni.showToast({title:"您的数量不足，请重新输入",icon:"none"}):0!=t.add.length?0!=t.num.length?0!=t.password.length?(this.status=!1,this.show=!1,uni.showLoading({title:"提交中..."}),this.$http({url:"/index/txMyCandy1",method:"post",data:{name:t.name,user_id:uni.getStorageSync("uid"),add:t.add,num:(0,a.default)(t.num),password:t.password}}).then(function(i){uni.hideLoading(),console.log(i),t.status=!0,t.add="",t.num="","ok"==i.status?(uni.showToast({title:"提交成功",duration:1e3,icon:"none"}),t.getinfo()):uni.showToast({title:i.data,duration:1e3,icon:"none"})}).catch(function(t){uni.hideLoading(),console.log(t)})):uni.showToast({title:"请输入密码",icon:"none"}):uni.showToast({title:"请输入数量",icon:"none"}):uni.showToast({title:"请输入提币地址",icon:"none"}))}}};i.default=s},"19d8":function(t,i,e){var n=e("b041");i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-45006270]{background:#fff}.top[data-v-45006270]{width:100%;padding:%?60?% 0 %?30?% 0;background:url("+n(e("bbee"))+");background-size:100% 100%}.logo[data-v-45006270]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?20?% 0}.logo uni-image[data-v-45006270]{height:%?80?%!important;width:%?80?%!important;display:block}.name[data-v-45006270]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;text-align:center;padding-bottom:%?10?%}.key[data-v-45006270]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?0?% 0 %?20?% 0}.key-name[data-v-45006270]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;text-align:center}.pro[data-v-45006270]{padding:%?30?% 0 %?10?% 0}.pro-money[data-v-45006270]{font-size:%?40?%;font-family:PingFang SC;font-weight:700;color:#fff;text-align:center}.pro-des[data-v-45006270]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;text-align:center}.wrap[data-v-45006270]{width:100%;box-sizing:border-box;padding:%?30?% %?25?%}.list[data-v-45006270]{width:100%;background:#fefefe;box-sizing:border-box;padding:%?20?%;border-radius:%?15?%;margin-bottom:%?20?%;box-shadow:0 %?0?% %?20?% rgba(0,0,0,.2);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.left[data-v-45006270]{width:%?80?%;height:%?80?%}.left uni-image[data-v-45006270]{width:%?80?%!important;height:%?80?%!important;display:block}.middel[data-v-45006270]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?20?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#333}.right[data-v-45006270]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.r-top[data-v-45006270]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#333;text-align:right}.r-bottom[data-v-45006270]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#999;text-align:right}.mask[data-v-45006270]{width:100vw;height:100vh;background:rgba(0,0,0,.6);position:fixed;left:0;right:0;bottom:0;top:0;z-index:999999999999999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.mask_con[data-v-45006270]{width:75vw;height:110vw;box-sizing:border-box;padding:%?100?% %?50?% %?50?%;background:#fff;margin:0 auto;background:url("+n(e("9ca7"))+");background-size:100% 100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;position:relative}.input[data-v-45006270]{height:%?80?%;line-height:%?80?%;outline:none;background:#f8f8f8;box-sizing:border-box;padding:%?20?%;margin-bottom:%?30?%;border-radius:%?50?%;padding:0 %?20?%;color:#999;font-size:%?26?%}.mask_btn[data-v-45006270]{margin:%?15?% auto 0 auto;width:100%;height:%?70?%;line-height:%?70?%;text-align:center;color:#fff;background:#3699ff;border-radius:%?40?%}.bbg[data-v-45006270]{\n  \t  /* width: 100%;\n  \t  position: absolute;\n  \t  bottom: 0;\n  \t  left: 0;\n  \t  right: 0; */}body.?%PAGE?%[data-v-45006270]{background:#fff}",""])},"6df1":function(t,i,e){"use strict";var n=e("8988"),a=e.n(n);a.a},8988:function(t,i,e){var n=e("19d8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("29db765d",n,!0,{sourceMap:!1,shadowMode:!1})},"9ca7":function(t,i,e){t.exports=e.p+"static/img/bg1.17768c9e.png"},"9e3c":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"logo"},[e("v-uni-image",{attrs:{src:"../../static/property/6.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.nickname))]),e("v-uni-view",{staticClass:"key",staticStyle:{"align-items":"center"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPayPage.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"key-name"},[t._v(t._s(t.key))]),e("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx","margin-left":"15rpx"},attrs:{src:"../../static/111.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"pro"},[e("v-uni-view",{staticClass:"pro-money"},[t._v("≈ "+t._s(t.allMoney))]),e("v-uni-view",{staticClass:"pro-des"},[t._v("总资产（￥）")])],1)],1),e("v-uni-view",{staticClass:"wrap"},t._l(t.list,function(i,n){return e("v-uni-view",{key:n,staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMask(i)}}},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:i.img,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"middel"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"r-top"},[t._v(t._s(i.num))]),e("v-uni-view",{staticClass:"r-bottom"},[t._v(t._s(i.money))])],1)],1)}),1),t.show?e("v-uni-view",{staticClass:"mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"mask_con",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.showMask1.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"bbg"},[e("v-uni-view",{staticStyle:{color:"red","font-size":"26rpx","font-weight":"bold",padding:"10rpx 0","letter-spacing":"3rpx"}},[t._v("提现手续费为5%")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入提币地址",value:""},model:{value:t.add,callback:function(i){t.add=i},expression:"add"}}),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入数量",value:""},model:{value:t.num,callback:function(i){t.num=i},expression:"num"}}),e("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入登录密码",value:""},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}}),e("v-uni-view",{staticClass:"mask_btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.send.apply(void 0,arguments)}}},[t._v("确认提币")])],1)],1)],1):t._e()],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},b3f5:function(t,i,e){"use strict";e.r(i);var n=e("1983"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},bbee:function(t,i,e){t.exports=e.p+"static/img/1.b665e0b0.png"},f4a9:function(t,i,e){"use strict";e.r(i);var n=e("9e3c"),a=e("b3f5");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("6df1");var s=e("2877"),l=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"45006270",null);i["default"]=l.exports}}]);