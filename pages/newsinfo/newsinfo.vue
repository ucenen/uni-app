<template>
	<view>
		<view class="wrap" v-if="status">
			<image :src="'http://www.ethbusinessalliance.com/'+item.article_img_url" mode="widthFix" class="imgs"></image>
			<view class="title-con">
				<view class="title">
					{{item.article_title}}
				</view>
				<view class="index-left-bottom">
					<view class="index-date">
						{{item.time}}
					</view>
					<view class="index-des">
						发布
					</view>
				</view>
			</view>
			<view class="con">
				<rich-text :nodes="item.article_content"></rich-text>                                               
			</view>
		</view>
		<view class="index-ul" v-else>
				<image src="../../static/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:20vh;display: block;margin: 0 auto;width: 50%;"></image>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				item:[],
				status:false
			}
		},
		onLoad(e){
			this.getinfo(e.id)
			this.id=e.id;
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		methods: {
			getinfo(id){
				var _this=this;
				
				this.$http({
					url: '/index/getOneNewsInfo',
					method: 'post',
					data: {
						id:id
					}
				}).then((res) => {
					console.log(res)
					if (res.status == 'ok') {
						_this.item=res.data;
						_this.status=true
					}
				}).catch((err) => {
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
	box-sizing: border-box;
	padding: 20rpx;
	
}
.imgs{
	height: 300rpx !important;
	width: 100%;
	display: block;
	border-radius: 10rpx;
	overflow: hidden;
}
.title-con{
	padding: 35rpx 0 15rpx 0;
	border-bottom: 1px solid rgba(238,238,238,1);
}
.title{
	font-size:28rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	line-height:32rpx;
	letter-spacing: 3rpx;
}
.index-left-bottom{
	padding: 10rpx 0;
	font-size:22rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	line-height:30rpx;
	display: flex;
}
.index-des{
		padding-left: 20rpx;
	}
	.con{
		padding: 15rpx 0;
		display: block;
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(119,119,119,1);
		line-height:46rpx;
		letter-spacing: 4rpx;
	}
	.index-ul{
		display: flex;justify-content: center;flex-direction: column;height: 85vh;
	}
</style>
