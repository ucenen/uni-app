<template>
	<view>
		<view class="wrap">
			<!-- <view class="nav" @tap="close">
				<image class="close" src="../../static/close.png" mode="widthFix"></image>
			</view>
			<view class="title">
				忘记密码
			</view> -->
			<view class="con">
				<view class="list">
					<view class="des_title">手机号码</view>
					<view class="in_con">
						<input type="number" class="input" placeholder="请输入手机号码" v-model="phone">
					</view>
				</view>
				<view class="list">
					<view class="des_title">验证码</view>
					<view class="in_con">
						<input type="number" class="input" placeholder="请输入验证码" v-model="code">
						<view class="sendCode">
							<view class="num" v-if="sendStatus" @tap="sendCode">获取验证码</view>
							<view class="number" v-else>{{num}}s</view>
						</view>
					</view>
				</view><view class="list">
					<view class="des_title">密码</view>
					<view class="in_con">
						<input type="password" class="input" placeholder="请设置新密码" v-model="password">
					</view>
				</view>
				<view class="list">
					<view class="des_title">确认密码</view>
					<view class="in_con">
						<input type="password" class="input" placeholder="请再次输入密码" v-model="password1">
					</view>
				</view>
			</view>
			<view class="btn-wrap">
				<view class="btn" @tap="send">
					找回密码
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				r2:true,
				sendStatus:true,
				num:60,
				phone:'',
				code:'',
				password:'',
				password1:'',
				status:true
			}
		},
		methods: {
			close(){
				uni.navigateBack();
			},
			sendCode(){
				if(this.phone < 1){uni.showToast({title:'请输入手机号', icon:"none"}); return ;}
				this.sendStatus=false;
				this.sendNum();
				let _this=this;
				uni.showLoading({
				    title: '发送中...'
				});
				this.$http({
					url: '/userInfo/sendCode',
					method: 'post',
					data: {
						phone:_this.phone
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res);
					if (res.status == 'ok') {
						uni.showToast({
						    title: res.data,
						    duration: 1000,
							icon:'none'
						});	
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
				
			},
			sendNum(){
				let a=60;
				let _this=this;
				let time=setInterval(function(){
					if(a==0){
						a=60;
						_this.sendStatus=true;
					}else{
						a--;
						
					}
					_this.num=a;
				},1000)
			},
			send(){
				if(!this.status){
					return;
				}
				var _this=this;
				if(this.phone < 1){uni.showToast({title:'请输入手机号', icon:"none"}); return ;}
				if(this.code < 1){uni.showToast({title:'请输入验证码', icon:"none"}); return ;}
				if(this.password < 1){uni.showToast({title:'请输入新密码', icon:"none"}); return ;}
				if(this.password != this.password1){uni.showToast({title:'两次密码输入不一致', icon:"none"}); return ;}
				this.status=false;
				
				uni.showLoading({
				    title: '提交中...'
				});
				this.$http({
					url: '/userInfo/forgetPawd',
					method: 'post',
					data: {
						phone:_this.phone,
						password:_this.password,
						code:_this.code
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res)
					_this.status=true;
					if (res.status == 'ok') {
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
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	flex: 1;
	justify-content: space-between;
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
	padding-left: 20rpx;
	display: flex;
}
.sendCode,.number{
	width:178rpx;
	font-size:28rpx;
	font-family:PingFang-SC-Bold;
	color:rgba(79,132,255,1);
	text-align: right;
}
</style>
