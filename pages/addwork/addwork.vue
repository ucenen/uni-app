<template>
	<view>
		<view class="wrap">
			<view class="wrap-nav">
				<view class="xing">*</view>
				<view class="wrap-nav-name">标题</view>
			</view>
			<view class="sr">
				<input type="text" value="" class="input" placeholder="请输入标题" v-model="title" />
			</view>
			<view class="wrap-nav" style="margin-top: 10rpx;">
				<view class="xing">*</view>
				<view class="wrap-nav-name">反馈内容</view>
			</view>
			<view class="srr">
				<textarea value="" placeholder="请输入反馈内容" class="textarea" v-model="content" />
			</view>
			<view class="btn-wrap">
				<view class="btn" @tap="toShare">
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
				title:'',
				content:'',
				status:true
			}
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		methods: {
			toShare(){
				if(!this.status){
					return;
				}
				var _this=this;
				if(this.title < 1){uni.showToast({title:'请输入标题', icon:"none"}); return ;}
				if(this.content < 1){uni.showToast({title:'请输入反馈内容', icon:"none"}); return ;}
				this.status=false;
				
				uni.showLoading({
				    title: '提交中...'
				});
				this.$http({
					url: '/work/addWorkorder',
					method: 'post',
					data: {
						title:_this.title,
						content:_this.content,
						uid:uni.getStorageSync('uid')
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res)
					_this.status=true;
					if (res.status == 'ok') {
						uni.setStorageSync('nickname', _this.nickname);
						uni.showToast({
						    title: '提交成功',
						    duration: 1000,
							icon:'none'
						});
						
						setTimeout(function(){
							uni.navigateBack({
								delta: 2
							}); 
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
	box-sizing: border-box;
	padding: 20rpx;
}
.wrap-nav{
	padding: 15rpx 0;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}
.xing{
	font-size:30rpx;
	font-family:PingFang SC;
	font-weight:bold;
	color:#FF404A;
}
.wrap-nav-name{
	font-size:30rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:#333333;
	padding-left: 9rpx;
	letter-spacing: 3rpx;
}
.sr{
	background: #F3F4F6;
	height: 100rpx;
	line-height: 100rpx;
	box-sizing: border-box;
	border-radius: 10rpx;
	overflow: hidden;
	padding: 20rpx;
}
.input{
	height: 60rpx;
	line-height: 60rpx;
	display: block;
	font-size:28rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:#666666 !important;
	/* background:linear-gradient(0deg,rgba(137,137,137,1) 100%);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent; */
}
.srr{
	background: #F3F4F6;
	height: 448rpx;
	line-height: 448rpx;
	box-sizing: border-box;
	border-radius: 10rpx;
	overflow: hidden;
	padding: 20rpx;
}
.textarea{
	line-height: 50rpx;
	display: block;
	font-size:28rpx;
	font-family:PingFang-SC-Bold;
	font-weight:400;
	color:#666666 !important;
	width: 100% !important;
}
.btn-wrap{
	width: 100%;
	padding: 250rpx 0 50rpx 0;	
}
.btn{
	height: 88rpx;
	line-height: 88rpx;
	background:rgba(79,132,255,1);
	border-radius:12rpx;
	text-align: center;
	font-size:30rpx;
	font-family:PingFang-SC-Bold;
	letter-spacing: 4rpx;
	color:rgba(255,255,255,1);
}
</style>
