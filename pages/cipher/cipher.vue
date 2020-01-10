<template>
	<view>
		<view class="wrap">
			<view class="con">
				<view class="list border">
					<view class="title">
						旧密码
					</view>
					<view class="con_input">
						<input type="password" class="input" placeholder="请输入密码" v-model="password">
					</view>
				</view>
				<view class="list border">
					<view class="title">
						新密码
					</view>
					<view class="con_input">
						<input type="password" class="input" placeholder="请设置新密码" v-model="password1">
					</view>
				</view>
				<view class="list">
					<view class="title">
						确认新密码
					</view>
					<view class="con_input">
						<input type="password" class="input" placeholder="请再次确认新密码" v-model="password2">
					</view>
				</view>
			</view>
			
			<view class="btn-wrap">
				<view class="btn" @tap="send">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password:'',
				password1:'',
				password2:'',
				status:true
			}
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		methods: {
			send(){
				
				if(!this.status){
					return;
				}
				var _this=this;
				if(this.password < 1){uni.showToast({title:'请输入密码', icon:"none"}); return ;}
				if(this.password1 < 1){uni.showToast({title:'请输入新密码', icon:"none"}); return ;}
				if(this.password1 != this.password2){uni.showToast({title:'两次密码输入不一致', icon:"none"}); return ;}
				this.status=false;
				
				uni.showLoading({
				    title: '提交中...'
				});
				this.$http({
					url: '/userInfo/updataPassword',
					method: 'post',
					data: {
						password:_this.password,
						password1:_this.password1,
						uid:uni.getStorageSync('uid')
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res)
					_this.status=true;
					if (res.status == 'ok') {
						uni.setStorageSync('nickname', _this.nickname);
						uni.showToast({
						    title: '修改成功',
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
	box-sizing: border-box;
	padding: 20rpx;
}
.con{
	width: 100%;
	box-sizing: border-box;
	padding: 10rpx 20rpx;
	background: #fff;
	border-radius:12rpx;
}
.list{
	height: 98rpx;
	box-sizing: border-box;
	padding: 15rpx;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}
.title{
	font-size:28rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	padding-right: 20rpx;
	letter-spacing: 3rpx;
	font-weight: 500;
}
.con_input{
	flex: 1;
}
.input{
	font-size:28rpx;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(153,153,153,1);
	text-align: right;
}
.border{
	border-bottom: 1px solid #F8F8F8;
}
.btn-wrap{
	width: 100%;
	padding: 100rpx 0;	
}
.btn{
	height: 88rpx;
	line-height: 88rpx;
	background:#4F84FF;
	border-radius:12rpx;
	text-align: center;
	font-size:30rpx;
	font-family:PingFang SC;
	letter-spacing: 4rpx;
	color:rgba(255,255,255,1);
}
</style>
