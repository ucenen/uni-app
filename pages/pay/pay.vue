<template>
	<view>
		<view class="wrap">
			<view class="top">
				<view class="b-name">
					{{value}}
				</view>
				<view class="b-check" @click="showSinglePicker">
					选择币种
				</view>
			</view>
			
			<!-- 二维码 -->
			<view class="img-box">
				<view class="box">
					<image :src="'http://www.ethbusinessalliance.com/'+img" mode="widthFix"></image>
				</view>
			</view>
			<view class="download">
				保存二维码至相册
			</view>
			<view class="key">
				{{code}}
			</view>
			<view class="bb">
				<view class="btn" @click="paste()">
					复制地址
				</view>
			</view>
			<view style="height: 50rpx;"></view>
			<view class="tt">
				充值须知
			</view>
			<view class="c-list">1.禁止向abc地址充值除X代币之外的资产，任何充入abc的非abc资产将不可找回。</view>
			<view class="c-list">2.使用abc地址充值需要2个网络确认才能到账，使用站内间转账无需网络确认，可以实时到账。</view>
		</view>
		<mpvue-picker ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				pickerSingleArray: [{
						label: 'ETH',
						value: 1
					},
					{
						label: 'USDT',
						value: 2
					},
					{
						label: 'XSN',
						value: 3
					},
					{
						label: 'USDT佣金',
						value: 4
					}
				],
				value:'ETH',
				code:'0SDIACJISFscmxiccu8svus8xvyssd023sca8dysx7yc8a',
				img:'../../static/1573300650.png'
			}
		},
		onLoad(e){
			this.code=e.code;
			this.getNewList()
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
		},
		methods: {
			getNewList(){
				
				var _this=this;
				this.$http({
					url: '/userInfo/getMyShare1',
					method: 'post',
					data: {
						code:_this.code,
						uid:uni.getStorageSync('uid')
					}
				}).then((res) => {
					console.log(res)
					if (res.status == 'ok') {
						_this.img=res.data.img;
			
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
				
			
			},
			// 单列
			showSinglePicker() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			onConfirm(e) {
				console.log(e.label)
				this.value = e.label
			},
			onCancel(e) {
				console.log(e)
			},
		},
		
			
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
	box-sizing: border-box;
	padding: 20rpx 30rpx;
	background: #F3F4F6;
	display: flex;
	border-radius: 10rpx;
	align-items: center;
	flex-wrap: nowrap;
}
.b-name{
	font-size:28rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	flex: 1;
	text-align: left;
}
.b-check{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	line-height:24px;
	flex: 1;
	text-align: right;
}
.img-box{
	width: 100%;
	box-sizing: border-box;
	padding: 50rpx;
	display: flex;
	justify-content: center;
}
.box{
	width: 317rpx;
	height: 317rpx;
	display: block;
	background: url(../../static/z.png);
	background-size: 100% 100%;
	box-sizing: border-box;
	padding: 25rpx;
}
.box image{
	width: 267rpx !important;
	height: 267rpx !important;
	display: block;
}
.download{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(79,132,255,1);
	padding: 10rpx 0;
	text-align: center;
}
.key{
	font-size:26rpx;
	font-family:DIN;
	font-weight:400;
	color:rgba(51,51,51,1);
	padding: 30rpx 0;
	text-align: center;
}
.bb{
	width: 100%;
	padding: 30rpx;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
}

.btn{
	width:444rpx;
	height:88rpx;
	background:rgba(79,132,255,1);
	border-radius:12rpx;
	line-height: 88rpx;
	text-align: center;
	font-size:30rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(255,255,255,1);
}
.tt{
	font-size:28rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(102,102,102,1);
	padding: 10rpx 0;
}
.c-list{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:48rpx;
	letter-spacing: 3rpx;
}
</style>
