(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cipher-cipher"],{7180:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".wrap[data-v-13f5f3be]{box-sizing:border-box;padding:%?20?%}.con[data-v-13f5f3be]{width:100%;box-sizing:border-box;padding:%?10?% %?20?%;background:#fff;border-radius:%?12?%}.list[data-v-13f5f3be]{height:%?98?%;box-sizing:border-box;padding:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.title[data-v-13f5f3be]{font-size:%?28?%;font-family:PingFang-SC-Medium;font-weight:500;color:#333;padding-right:%?20?%;letter-spacing:%?3?%;font-weight:500}.con_input[data-v-13f5f3be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.input[data-v-13f5f3be]{font-size:%?28?%;font-family:PingFang-SC-Regular;font-weight:400;color:#999;text-align:right}.border[data-v-13f5f3be]{border-bottom:1px solid #f8f8f8}.btn-wrap[data-v-13f5f3be]{width:100%;padding:%?100?% 0}.btn[data-v-13f5f3be]{height:%?88?%;line-height:%?88?%;background:#4f84ff;border-radius:%?12?%;text-align:center;font-size:%?30?%;font-family:PingFang SC;letter-spacing:%?4?%;color:#fff}",""])},7384:function(t,i,n){var a=n("7180");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=n("4f06").default;s("64620c08",a,!0,{sourceMap:!1,shadowMode:!1})},"788c":function(t,i,n){"use strict";n.r(i);var a=n("c0fb"),s=n.n(a);for(var e in a)"default"!==e&&function(t){n.d(i,t,function(){return a[t]})}(e);i["default"]=s.a},"96e7":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"con"},[n("v-uni-view",{staticClass:"list border"},[n("v-uni-view",{staticClass:"title"},[t._v("旧密码")]),n("v-uni-view",{staticClass:"con_input"},[n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1)],1),n("v-uni-view",{staticClass:"list border"},[n("v-uni-view",{staticClass:"title"},[t._v("新密码")]),n("v-uni-view",{staticClass:"con_input"},[n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请设置新密码"},model:{value:t.password1,callback:function(i){t.password1=i},expression:"password1"}})],1)],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"title"},[t._v("确认新密码")]),n("v-uni-view",{staticClass:"con_input"},[n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请再次确认新密码"},model:{value:t.password2,callback:function(i){t.password2=i},expression:"password2"}})],1)],1)],1),n("v-uni-view",{staticClass:"btn-wrap"},[n("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.send.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},s=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return s})},c0fb:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{password:"",password1:"",password2:"",status:!0}},onShow:function(){var t=this.checkLogin();if(!t)return!1},methods:{send:function(){if(this.status){var t=this;this.password<1?uni.showToast({title:"请输入密码",icon:"none"}):this.password1<1?uni.showToast({title:"请输入新密码",icon:"none"}):this.password1==this.password2?(this.status=!1,uni.showLoading({title:"提交中..."}),this.$http({url:"/userInfo/updataPassword",method:"post",data:{password:t.password,password1:t.password1,uid:uni.getStorageSync("uid")}}).then(function(i){uni.hideLoading(),console.log(i),t.status=!0,"ok"==i.status?(uni.setStorageSync("nickname",t.nickname),uni.showToast({title:"修改成功",duration:1e3,icon:"none"}),setTimeout(function(){uni.navigateBack()},1500)):uni.showToast({title:i.data,duration:1e3,icon:"none"})}).catch(function(t){uni.hideLoading(),console.log(t)})):uni.showToast({title:"两次密码输入不一致",icon:"none"})}}}};i.default=a},c56f:function(t,i,n){"use strict";n.r(i);var a=n("96e7"),s=n("788c");for(var e in s)"default"!==e&&function(t){n.d(i,t,function(){return s[t]})}(e);n("d6d1");var o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"13f5f3be",null);i["default"]=r.exports},d6d1:function(t,i,n){"use strict";var a=n("7384"),s=n.n(a);s.a}}]);