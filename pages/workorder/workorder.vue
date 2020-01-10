<template>
	<view>
		<view class="wrap">
			<view class="list" v-for="(item,index) in newslist" :key="index" @tap="toInfo(item.id)">
				<view class="top">
					<view class="t-left">
						{{item.title}}
					</view>
					<view class="t-right y-f" :class="item.check ? 'y-f' : 'w-f'">
						{{item.status}}
					</view>
				</view>
				<view class="con">
					{{item.content}}
				</view>
				<view class="time">
					{{item.time}}
				</view>
			</view>
			<uni-load-more v-if="newslist.length>6" :status="status" :content-text="contentText" />
			<!-- <view style="height: 60px;"></view> -->
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
				list:[
					{
						id:1,
						title:'YBT支持哪些充值方式？',
						des:'回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容',
						time:'2019.09.20 17:41:04',
						status:'已回复',
						check:true
					},
					{
						id:2,
						title:'提现比例是多少？',
						des:'正常情况下，APP二维码扫描后，会自动引导到一个下载链接，点击继续访问即可下载到手机，点击安装便可以正常使用，但有时...能会出现扫描后没有响应的情况，尤其是安卓手机，如果是用微信的扫描工具进行扫描后没有响应，',
						time:'2019.09.20 17:41:04',
						status:'未回复',
						check:false
					},
					{
						id:3,
						title:'如何修改自己的交易密码？',
						des:'首先可以进入支付管理页面，下一步可通过验证绑定的银行卡来修改密码呢',
						time:'2019.09.20 17:41:04',
						status:'已回复',
						check:true
					},
					{
						id:4,
						title:'怎么更换手机号？？',
						des:'点击“我”，点击“设置”，点击“帐号与安全”，点击“手机号”，点击“更换手机号”，输入新手机号，输入验证码”即可。',
						time:'2019.09.20 17:41:04',
						status:'未回复',
						check:false
					},
					{
						id:5,
						title:'申请需要什么条件和资料？',
						des:'回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容',
						time:'2019.09.20 17:41:04',
						status:'已回复',
						check:true
					}
				],
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
		onNavigationBarButtonTap(e) {
			console.log(e)
			if(e.index==0){
				uni.navigateTo({
					url: '../addwork/addwork'
				});
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
			toInfo(id){
				uni.navigateTo({
					url: '../chat/chat?id='+id
				});
			},
			getNewList(){
				
				var _this=this;
				page=1;
				this.$http({
					url: '/work/getMyWorkList',
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
					url: '/work/getMyWorkList',
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
	width: 100%;
	box-sizing: border-box;
	padding: 0 20rpx;
}
.list{
	width: 100%;
	padding: 20rpx 0;
	border-bottom: 1px solid rgba(238,238,238,1);
}
.top{
	padding: 10rpx 0;
	display: flex;
	flex-wrap: nowrap;
	align-content: center;
}
.t-left{
	font-size:30rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	letter-spacing: 2rpx;
	flex: 1;
	padding-right: 15rpx;
}
.t-right{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	
}
.y-f{
	color:rgba(74,177,100,1);
}
.w-f{
	color:rgba(51,51,51,1);
}
.con{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	padding: 10rpx 0;
	line-height:36rpx;
	letter-spacing: 2rpx;
}
.time{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
}
</style>
