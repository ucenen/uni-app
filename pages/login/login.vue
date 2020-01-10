<template>
	<view>
		<view class="wrap">
			<view class="nav" @tap="close">
				<image class="close" src="../../static/close.png" mode="widthFix"></image>
			</view>
			<view class="title">
				账号密码登录
			</view>
			<view class="con">
				<view class="list">
					<view class="des_title">手机号码</view>
					<view class="in_con">
						<input type="number" class="input" placeholder="请输入手机号码" v-model="phone">
					</view>
				</view>
				<view class="list">
					<view class="des_title">密码</view>
					<view class="in_con">
						<input type="password" class="input" placeholder="请输入密码" v-model="password">
					</view>
				</view>
			</view>
			<view class="btn-wrap">
				<view class="btn" @tap="toLogin">
					登录
				</view>
			</view>
			<view class="btn-list">
				<view class="register" @tap="register">
					注册账号
				</view>
				<view class="forgetPasswd" @tap="forgetPasswd">
					忘记密码？
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				password:"",
				status:true
			}
		},
		methods: {
			close(){
				uni.navigateBack();
			},
			register(){
				uni.navigateTo({
					url: '../register/register'
				});
			},
			forgetPasswd(){
				uni.navigateTo({
					url: '../forgetPasswd/forgetPasswd'
				});
			},
			toLogin(){
				if(!this.status){
					return;
				}
				var _this=this;
				if(this.phone < 1){uni.showToast({title:'请输入手机号', icon:"none"}); return ;}
				if(this.password < 1){uni.showToast({title:'请输入密码', icon:"none"}); return ;}
				this.status=false;
				
				uni.showLoading({
				    title: '登录中...'
				});
				this.$http({
					url: '/userInfo/userNameLogin',
					method: 'post',
					data: {
						phone:_this.phone,
						password:_this.password,
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res)
					_this.status=true;
					if (res.status == 'ok') {
						uni.setStorageSync('uid', res.data.uid);
						uni.setStorageSync('nickname', res.data.nickname);
						uni.setStorageSync('phone', res.data.phone);
						uni.showToast({
						    title: '登录成功',
						    duration: 1000,
							icon:'none'
						});
						setTimeout(function(){
							uni.switchTab({
								url:"../index/index"
							})
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
page{
	background: #fff;
}
.wrap{
	width: 100%;
	padding: 20rpx;
	box-sizing: border-box;
}
.nav{
	padding:10rpx 20rpx;
}
.close{
	height: 30rpx !important;
	width: 30rpx !important;
	display: block;
}
.title{
	padding: 30rpx 0;
	font-size:48rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	text-align: center;
	letter-spacing: 6rpx;
}
.con{
	padding: 20rpx 0;
}
.list{
	margin-bottom: 15rpx;
}
.des_title{
	font-size:28rpx;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
	padding: 15rpx 0;
}
.in_con{
	height: 88rpx;
	line-height: 88rpx;
	background:rgba(243,244,246,1);
	border-radius:12rpx;
	box-sizing: border-box;
	padding: 20rpx;
	letter-spacing: 3rpx;
}
.input{
	height: 48rpx;
	line-height: 48rpx;
	font-size:28rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(153,153,153,1);
}
.btn-wrap{
	width: 100%;
	padding: 50rpx 0 25rpx 0;	
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
.btn-list{
	padding: 10rpx 0;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}
.register{
	font-size:28rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(79,132,255,1);
	flex: 1;
	text-align: left;
	letter-spacing: 2rpx;
}
.forgetPasswd{
	font-size:28rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(153,153,153,1);
	text-align: right;
	letter-spacing: 2rpx;
}
</style>
