(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addwork-addwork"],{"02d1":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"",content:"",status:!0}},onShow:function(){var t=this.checkLogin();if(!t)return!1},methods:{toShare:function(){if(this.status){var t=this;this.title<1?uni.showToast({title:"请输入标题",icon:"none"}):this.content<1?uni.showToast({title:"请输入反馈内容",icon:"none"}):(this.status=!1,uni.showLoading({title:"提交中..."}),this.$http({url:"/work/addWorkorder",method:"post",data:{title:t.title,content:t.content,uid:uni.getStorageSync("uid")}}).then(function(n){uni.hideLoading(),console.log(n),t.status=!0,"ok"==n.status?(uni.setStorageSync("nickname",t.nickname),uni.showToast({title:"提交成功",duration:1e3,icon:"none"}),setTimeout(function(){uni.navigateBack({delta:2})},1500)):uni.showToast({title:n.data,duration:1e3,icon:"none"})}).catch(function(t){uni.hideLoading(),console.log(t)}))}}}};n.default=a},"18a1":function(t,n,i){"use strict";i.r(n);var a=i("39ca"),e=i("d3ee");for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);i("c582");var r=i("2877"),s=Object(r["a"])(e["default"],a["a"],a["b"],!1,null,"c8495b1e",null);n["default"]=s.exports},"37e8":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,"uni-page-body[data-v-c8495b1e]{background:#fff}.wrap[data-v-c8495b1e]{box-sizing:border-box;padding:%?20?%}.wrap-nav[data-v-c8495b1e]{padding:%?15?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.xing[data-v-c8495b1e]{font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#ff404a}.wrap-nav-name[data-v-c8495b1e]{font-size:%?30?%;font-family:PingFang-SC-Bold;font-weight:700;color:#333;padding-left:%?9?%;letter-spacing:%?3?%}.sr[data-v-c8495b1e]{background:#f3f4f6;height:%?100?%;line-height:%?100?%;box-sizing:border-box;border-radius:%?10?%;overflow:hidden;padding:%?20?%}.input[data-v-c8495b1e]{height:%?60?%;line-height:%?60?%;display:block;font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#666!important\r\n\t/* background:linear-gradient(0deg,rgba(137,137,137,1) 100%);\r\n\t-webkit-background-clip:text;\r\n\t-webkit-text-fill-color:transparent; */}.srr[data-v-c8495b1e]{background:#f3f4f6;height:%?448?%;line-height:%?448?%;box-sizing:border-box;border-radius:%?10?%;overflow:hidden;padding:%?20?%}.textarea[data-v-c8495b1e]{line-height:%?50?%;display:block;font-size:%?28?%;font-family:PingFang-SC-Bold;font-weight:400;color:#666!important;width:100%!important}.btn-wrap[data-v-c8495b1e]{width:100%;padding:%?250?% 0 %?50?% 0}.btn[data-v-c8495b1e]{height:%?88?%;line-height:%?88?%;background:#4f84ff;border-radius:%?12?%;text-align:center;font-size:%?30?%;font-family:PingFang-SC-Bold;letter-spacing:%?4?%;color:#fff}body.?%PAGE?%[data-v-c8495b1e]{background:#fff}",""])},"39ca":function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"wrap-nav"},[i("v-uni-view",{staticClass:"xing"},[t._v("*")]),i("v-uni-view",{staticClass:"wrap-nav-name"},[t._v("标题")])],1),i("v-uni-view",{staticClass:"sr"},[i("v-uni-input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入标题"},model:{value:t.title,callback:function(n){t.title=n},expression:"title"}})],1),i("v-uni-view",{staticClass:"wrap-nav",staticStyle:{"margin-top":"10rpx"}},[i("v-uni-view",{staticClass:"xing"},[t._v("*")]),i("v-uni-view",{staticClass:"wrap-nav-name"},[t._v("反馈内容")])],1),i("v-uni-view",{staticClass:"srr"},[i("v-uni-textarea",{staticClass:"textarea",attrs:{value:"",placeholder:"请输入反馈内容"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1),i("v-uni-view",{staticClass:"btn-wrap"},[i("v-uni-view",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toShare.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},e=[];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return e})},c582:function(t,n,i){"use strict";var a=i("f3a0"),e=i.n(a);e.a},d3ee:function(t,n,i){"use strict";i.r(n);var a=i("02d1"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);n["default"]=e.a},f3a0:function(t,n,i){var a=i("37e8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("a08478d6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);