<template>
	<view>
		<view class="wrap">
			<view class="box">
				<view class="title">
					<view class="line"></view>
					<view class="share-name">我的邀请码</view>
					<view class="line"></view>
				</view>
				<view class="code_num">
					{{item.code}}
				</view>
				<view class="qreco">
					<image :src="'http://www.ethbusinessalliance.com/'+item.img" mode="widthFix"></image>
				</view>
				<view class="btn_wrap">
					<view class="btn" @click="paste()">
						复制邀请码
					</view>
				</view>
				<view style="height: 60rpx;"></view>
				<view class="bottom">
					提示：截屏分享二维码邀请好友下载APP
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: '123',
				item:[]
			}
		},
		onLoad(){
			this.getinfo()
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		methods: {
			getinfo(){
				var _this=this;
				this.$http({
					url: '/userInfo/getMyShare',
					method: 'post',
					data: {
						uid:uni.getStorageSync('uid')
					}
				}).then((res) => {
					console.log(res)
					if (res.status == 'ok') {
						_this.item=res.data;
				
					}
				}).catch((err) => {
					console.log(err)
				
				})
			},
			paste() {
				let _this = this;
				uni.setClipboardData({
					data: _this.code,
					success: function(data) {uni.showToast({title:'复制成功',icon:"none"})},
					fail: function(err) {},
					complete: function(res) {}
				})
				

			}
		}
	}
</script>

<style>
	page {
		background: url(../../static/bg_1.png);
		background-size: 100% 100%;
	}

	.wrap {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 0 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.box {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		border-radius: 40rpx;
		height: 900rpx;
		box-sizing: border-box;
		padding: 40rpx;
	}

	.title {
		padding: 10rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.line {
		width: 60rpx;
		height: 4rpx;
		background: rgba(191, 191, 191, 1);
		border-radius: 2rpx;
	}

	.share-name {
		width: 138rpx;
		font-size: 28rpx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		text-align: center;
		padding: 0 25rpx;
	}

	.code_num {
		font-size: 60rpx;
		font-family: DIN;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		text-align: center;

	}

	.qreco {
		padding: 20rpx 0;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
	}

	.qreco image {
		width: 296rpx !important;
		height: 296rpx !important;
		display: block;
	}

	.btn_wrap {
		padding: 25rpx 0;
		display: flex;
		justify-content: center;
	}

	.btn {
		width: 300rpx;
		height: 76rpx;
		line-height: 76rpx;
		background: rgba(79, 132, 255, 1);
		border-radius: 38rpx;
		text-align: center;
		font-size: 30rpx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.bottom {
		border-top: 4rpx dashed rgba(125, 125, 125, 0.6);
		width: 100%;
		padding: 30rpx 0 30rpx 0;
		text-align: center;
		font-size: 26rpx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
</style>
