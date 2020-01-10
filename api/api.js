
// 解决H5跨域问题， 临时修改，APP需要改回来
let api = '/api'
let codeerr = false;
let http = function(obj){
	let headers = {};
	// let urls = ['/auth/authentication','/auth/smsVerifySent'];
	// if(!urls.includes(obj.url)){
	// 	uni.getStorage({
	// 		key: 'user',
	// 		success: function(res){
	// 			res = JSON.parse(res.data);
	// 			headers = {'authorization': res.authToken};
	// 		}
	// 	});
	// }
	return new Promise(function(resolve, reject){
		uni.request({
			url: api + obj.url,
			data: obj.data,
			success: (res)=>{
				resolve(res.data)
			},
			fail: (err)=>{
				reject(err.response)
			}
		})
	})
}

export{
    http,
	api
};
 