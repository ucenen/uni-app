<template>
	<view>
		<!-- 头部 -->
		<view class="index-top">
			<view class="uni-margin-wrap">
				<!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item" v-for="(item,index) in img" :key="index">
							<image :src="'http://www.ethbusinessalliance.com/'+item.item_img_url" mode="widthFix" lazy-load="true"></image>
						</view>
						
					</swiper-item>
					
				</swiper> -->
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular="true">
					<swiper-item v-for="(item,index) in img" :key="index" >
						<view class="swiper-item">
							<image :src="'http://www.ethbusinessalliance.com/'+item.item_img_url" mode="widthFix" lazy-load="true"></image>
						</view>
					</swiper-item>
					
				</swiper>
			</view>
			<view class="uni-swiper-msg">
				<view class="uni-swiper-msg-icon">
					<image src="../../static/index/4.png" mode="widthFix" style="width: 100rpx;height: 38rpx;display: block;"></image>
				</view>
				<view class="msg-tag">
					<view class="news">
						热点
					</view>
				</view>
				<view class="msg-right">
					<swiper vertical="true" autoplay="true" circular="true" interval="3000">
						<swiper-item v-for="(item, index) in msg" :key="index">
							<navigator class="con-text">{{item.t_title}}</navigator>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<!-- 列表 -->
		<view class="index-wrap">
			<view class="index-w-top">
				<view class="index-w-top-img">
					<image src="../../static/index/1.png" mode="widthFix"></image>
				</view>
				<view class="index-w-title">资讯列表</view>
			</view>
			<view class="index-ul" v-if="newslist.length>0">
				<view class="index-list" v-for="(item,index) in newslist" :key="index" @tap="toNewsInfo(item.article_id)">
					<view class="index-left">
						<view class="index-left-title">
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
					<view class="index-right">
						<image :src="'http://www.ethbusinessalliance.com/'+item.article_img_url" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="index-ul" v-else>
					<image src="../../static/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:40vh;display: block;margin: 0 auto;width: 50%;"></image>
				
			</view>
			
			<uni-load-more v-if="newslist.length>6" :status="status" :content-text="contentText" />
			<view style="height: 60px;"></view>
		</view>
		
		
		
	</view>
</template>
<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	var page=0;
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				msg : [],
				img:[],
				newslist:[],
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				num:0,
				reload: false,
			}
		},
		onLoad(){
			this.getrental();
		},
		onShow(){
			//判断是否登录
			setTimeout(function(){
				var user_id  = uni.getStorageSync('uid');
				if(!user_id){
					uni.navigateTo({
						url:'../login/login'
					});
				}
				
				
			},1500)
		},
		onReachBottom() {
			this.status = 'more';
			this.getList();
		},
		methods: {
			toNewsInfo(id){
				uni.navigateTo({
					url: '../newsinfo/newsinfo?id='+id
				});
			},
			toLogin(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			getrental() {
				var _this=this;
				
				this.$http({
					url: '/index/getBanerList',
					method: 'post',
					data: {
						
					}
				}).then((res) => {
					_this.getNewList();
					console.log(res)
					if (res.status == 'ok') {
						_this.img=res.data.banner;
						_this.msg=res.data.news;
					}
				}).catch((err) => {
					console.log(err)
				
				})
				
				   
			},
			getNewList(){
				
				var _this=this;
				page=1;
				this.$http({
					url: '/index/getNewsList',
					method: 'post',
					data: {
						page:page
					}
				}).then((res) => {
					console.log(res)
					if (res.status == 'ok') {
						_this.newslist=res.data.list;
						_this.num=res.data.total;

					}
				}).catch((err) => {
					console.log(err)
				
				})
			},
			getList(){
				if(this.num<=10){
					this.status = '';
					return;
				}else{
					var ye=page*10;
					if(this.num<=ye){
						this.status = '';
						return;
					}
				}
				page++
				
				var _this=this;
				this.status = 'loading';
				this.$http({
					url: '/index/getNewsList',
					method: 'post',
					data: {
						page:page
					}
				}).then((res) => {
					console.log(res)
					if (res.status == 'ok') {
						_this.newslist=_this.newslist.concat(res.data.list);
						_this.num=res.data.total;
				
					}
				}).catch((err) => {
					console.log(err)
				
				})
			}
		}
	}
</script>

<style>
	.index-top{
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx 20rpx 10rpx 20rpx;
		background: #fff;
	}
	.uni-margin-wrap {
		width:100%;
		padding-bottom: 15rpx;
	}
	/* .swiper {
		height: 300upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		border-radius: 20rpx;
	}
	.swiper-item image{
		width: 100%;
		height: 300upx !important;
		display: block;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	} */
	
	
	.swiper {
		height: 300upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		border-radius: 20rpx;
		overflow: hidden;
	}
	
	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
		
	}
	
	.swiper-item image{
		width: 100%;
		height: 300upx !important;
		display: block;
		border-radius: 20rpx;
		overflow: hidden;
	}
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
	.uni-swiper-msg-icon{
		width: 80rpx;
	}
	.uni-swiper-msg{
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}
	.msg-tag{
		padding: 0 15rpx;
	}
	.news{
		width:64rpx;
		height:32rpx;
		border:2rpx solid rgba(250,97,92,1);
		border-radius:4rpx;
		text-align: center;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(250,97,92,1);
		line-height:32rpx;
	}
	.msg-right{
		flex: 1;
	}
	.con-text{
		width:100%;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		letter-spacing: 3rpx;
	}
	.index-wrap{
		margin-top: 20rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx 20rpx 20rpx 20rpx;
		background: #fff;
	}
	.index-w-top{
		height: 40rpx;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		
		
	}
	.index-w-top-img{
		width: 38rpx;
		height: 33rpx;
		box-sizing: border-box;
		padding-right: 20rpx;
		
	}
	.index-w-top-img image{
		width: 38rpx;
		height: 33rpx;
		display: block;
		padding-top: 5rpx;
	}
	.index-w-title{
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:800;
		color:rgba(51,51,51,1);
		padding-left: 20rpx;
	}
	.index-ul{
		width: 100%;
		padding: 10rpx 0;
	}
	.index-list{
		padding: 25rpx 0;
		display: flex;
		flex-wrap: nowrap;
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.index-left{
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;
		padding-right: 20rpx;
		justify-content: flex-start;
	}
	.index-right{
		height: 160rpx;
		width: 280rpx;
		display: block;
		border-radius: 10rpx;
		overflow: hidden;
	}
	
	.index-right image{
		height: 160rpx !important;
		width: 100%;
		display: block;
	}
	.index-left-title{
		flex: 1;
		width:100%;
		font-size:28rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:40rpx;
		letter-spacing: 3rpx;
	}
	.index-left-bottom{
		width:100%;
		/* height:30rpx; */
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
</style>
