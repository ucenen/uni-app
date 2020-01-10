<template>
	<view>
		<view class="wrap">
			<view class="nav">
				请设置2-24个字符，不包括@<>/等无效字符
			</view>
			<view class="con">
				<input type="text" class="input" v-model="nickname" maxlength="24" placeholder="请输入您的昵称">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					nickname:'',
					status:true
			}
		},
		onLoad(){
			this.nickname=uni.getStorageSync('nickname');
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			if(e.index==0){
				this.send()
			}
		},
		methods: {
			send(){
				if(!this.status){
					return;
				}
				var _this=this;
				if(this.nickname < 1){uni.showToast({title:'请输入您的昵称', icon:"none"}); return ;}
				this.status=false;
				
				uni.showLoading({
				    title: '提交中...'
				});
				this.$http({
					url: '/userInfo/updataNickname',
					method: 'post',
					data: {
						nickname:_this.nickname,
						uid:uni.getStorageSync('uid')
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res)
					_this.status=true;
					if (res.status == 'ok') {
						uni.setStorageSync('nickname', _this.nickname);
						uni.showToast({
						    title: '更新成功',
						    duration: 1000,
							icon:'none'
						});
						
						setTimeout(function(){
							uni.navigateBack(); 
						},1500)
					}else{
						uni.showToast({
						    title: res.data,
						    duration: 1000,
							icon:'none'
						});	
					}
				}).catch((err) => {
					uni.hideLoading();
					console.log(err)
				
				})
				
				
			}
		}
	}
</script>

<style>
.wrap{
	width: 100%;
	box-sizing: border-box;
	padding:20rpx;
	
}
.nav{
	font-size:24rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(153,153,153,1);
	padding: 20rpx 0;
}
.con{
	height:98rpx;
	background:rgba(255,255,255,1);
	border-radius:12rpx;
	width: 100%;
	box-sizing: border-box;
	padding: 15rpx;
}
.input{
	height: 68rpx;
	line-height: 68rpx;
	font-size:28rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
}
</style>
