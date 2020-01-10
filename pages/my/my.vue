<template>
	<view>
		<view class="top">
			<view class="con">
				<view class="con-left">
					路
				</view>
				<view class="con-right">
					<view class="con-r-top">
						{{nickname}}
					</view>
					<view class="con-r-bottom">
						{{phone}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="wrap">
			<view class="list" v-for="(item,index) in list" :key="index" @tap="navTo(item.id)">
				<image :src="item.img" mode="widthFix" class="iconx"></image>
				<view class="title">
					{{item.name}}
				</view>
				<image src="../../static/my/1.png" mode="widthFix" class="iconxx"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						id:1,
						img:'../../static/my/2.png',
						name:'联系客服'
					},
					{
						id:2,
						img:'../../static/my/3.png',
						name:'分享链接'
					},{
						id:3,
						img:'../../static/my/4.png',
						name:'修改昵称'
					},{
						id:4,
						img:'../../static/my/5.png',
						name:'修改登录密码'
					},{
						id:5,
						img:'../../static/my/5.png',
						name:'一键退出'
					}
				],
				phone:'',
				nickname:''
			}
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
			this.phone=uni.getStorageSync('phone')
			this.nickname=uni.getStorageSync('nickname')
		},
		methods: {
			toPayPage(){
				uni.navigateTo({
					url: '../pay/pay'
				});
			},
			navTo(e){
				if(e==1){
					uni.navigateTo({
						url: '../workorder/workorder'
					});
				}
				if(e==2){
					uni.navigateTo({
						url: '../share/share'
					});
				}
				if(e==3){
					uni.navigateTo({
						url: '../nickname/nickname'
					});
				}
				if(e==4){
					uni.navigateTo({
						url: '../cipher/cipher'
					});
				}
				if(e==5){
					uni.showModal({
					    title: '提示',
					    content: '确定要退出吗？',
					    success: function (res) {
					        if (res.confirm) {
					            uni.clearStorage();
								uni.switchTab({
									url:"../index/index"
								})
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
			}
		}
	}
</script>

<style>
 page{
	 background: #fff;
 }
 .top{
	 width: 100%;
	 padding: 80rpx 0;
	 background: url(../../static/my/bg.png);
	 background-size: 100% 100%;
 }
.con{
	width:100%;
	box-sizing: border-box;
	padding: 50rpx 20rpx;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}
 .con-left{
	 height: 110rpx;
	 width: 110rpx;
	 line-height: 110rpx;
	 border-radius: 50%;
	 text-align: center;
	 background: #fff;
	 font-size:36rpx;
	 font-family:PingFang SC;
	 font-weight:bold;
	 color:rgba(79,132,255,1);
	 text-align: center;
 }
 .con-right{
	 flex: 1;
	 padding-left: 20rpx;
 }
 .con-r-top{
	 font-size:35rpx;
	 font-family:PingFang-SC-Bold;
	 font-weight:bold;
	 color:rgba(255,255,255,1);
	 letter-spacing: 2rpx;
 }
 
 .con-r-bottom{
	 font-size:27rpx;
	 font-family:PingFang SC;
	 font-weight:500;
	 color:rgba(255,255,255,1);
 }
 .wrap{
	 width: 100%;
	 box-sizing: border-box;
	 padding: 20rpx 20rpx;
	 box-sizing: border-box;
	 background: #fff;
	 border-top-left-radius: 20rpx;
	 border-top-right-radius: 20rpx;
	 height: 300rpx;
	 position: relative;
	 top: -50rpx;
	 left: 0;
	 right: 0;
 }
 .list{
	 border-bottom: 1px solid #EEEEEE;
	 padding: 30rpx 0;
	 display: flex;
	 flex-wrap: nowrap;
	 align-items: center;
 }
 .iconx{
	 width: 34rpx !important;
	 height: 36rpx !important;
	 display: block;
 }
 .title{
	 font-size:28rpx;
	 font-family:PingFang SC;
	 font-weight:500;
	 color:rgba(51,51,51,1);
	 flex: 1;
	 padding: 0 15rpx;
 }
 .iconxx{
 	 width: 17rpx !important;
 	 height: 28rpx !important;
 	 display: block;
 }
</style>
