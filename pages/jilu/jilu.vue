<template>
	<view>
		<view class="wrap">
			
			<view class="ul-wrap">
				<view class="list" v-for="(item,index) in newslist" :key="index">
					<view class="left">
						<view class="left-top">
							类型 :{{item.name}}
						</view>
						<view class="left-bottom">
							{{item.time}}
						</view>
					</view>
					<view class="right" v-if="item.status==1">
						+ {{item.num}}
					</view>
					<view class="right" v-else style="color: red;">
						- {{item.num}}
					</view>
				</view>
			</view>
			<uni-load-more v-if="newslist.length>6" :status="status" :content-text="contentText" />
		</view>
		<view style="height: 65px;"></view>
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
				newslist:[],
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中...',
					contentnomore: '到底了...'
				},
				num:0,
				reload: false,
				money:0
			}
		},
		onReachBottom() {
			this.status = 'more';
			this.getList();
		},
		onLoad(){
			this.getNewList()
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		methods: {
			//获取用户信息
			
			getNewList(){
				
				var _this=this;
				page=1;
				this.$http({
					url: '/userInfo/getMyInfoMsg11',
					method: 'post',
					data: {
						page:page,
						uid:uni.getStorageSync('uid')
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
					url: '/work/getMyBillList',
					method: 'post',
					data: {
						page:page,
						uid:uni.getStorageSync('uid')
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
page{
	background: #fff;
}
.wrap{
	box-sizing: border-box;
	padding: 20rpx;
}
.top{
	width: 100%;
	height: 300rpx;
	background: url(../../static/bg.png);
	background-size: 100% 100%;
	box-sizing: border-box;
	padding: 40rpx 50rpx;
}
.top-list{
	padding: 25rpx 0;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}
.top-title{
	flex: 1;
	font-size:28rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(255,255,255,1);
}
.top-right{
	flex: 1;
	display: flex;
	justify-content: flex-end;
}
.top-right image{
	width: 39rpx !important;
	height: 28rpx !important;
	display: block;
}
.money{
	font-size:48rpx;
	font-family:PingFang SC;
	font-weight:800;
	color:rgba(255,255,255,1);
	padding: 30rpx 0;
}
.nav-top{
	width: 100%;
	padding: 15rpx 0;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
}
.nav-top image{
	height: 34rpx !important;
	width: 34rpx !important;
	display: block;
}
.nav-des{
	font-size:34rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	padding-left: 20rpx;
}
.ul-wrap{
	width: 100%;
}
.list{
	width: 100%;
	background: #F3F4F6;
	box-sizing: border-box;
	padding: 20rpx;
	border-radius: 15rpx;
	display: flex;
	flex-wrap: nowrap;
	align-content: center;
	margin-bottom: 20rpx;
	box-shadow: 0 0rpx 20rpx rgba(255, 255, 255, 0.2);
}
.right{
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	font-size:30rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	text-align: right;
}

.left{
	flex: 1;
	padding-right: 15rpx;
}
.left-top{
	font-size:30rpx;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
	padding: 5rpx 0;
}
.left-bottom{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(153,153,153,1);
	padding: 5rpx 0;
}
</style>
