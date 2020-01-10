import Vue from 'vue'
import App from './App'
import './api/ican-H5Api'

import {http} from './api/api'
Vue.config.productionTip = false
Vue.prototype.$http = http;
App.mpType = 'app'


// Vue.prototype.checkLogin  = function(){
// 	var user_id  = uni.getStorageSync('uid');
// 	console.log(user_id)
// 	if(!user_id){
// 		uni.navigateTo({
// 			url:'../index/index'
// 		});
// 		return false;
// 	}
// 	return user_id;
// }

const app = new Vue({
    ...App
})
app.$mount()
