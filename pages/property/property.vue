<template>
	<view>
		<view class="top">
			<view class="logo">
				<image src="../../static/property/6.png" mode="widthFix"></image>
			</view>
			<view class="name">
				{{nickname}}
			</view>
			<view class="key" @tap="toPayPage" style="align-items: center;">
				<view class="key-name">
					{{key}}
				</view>
				<image src="../../static/111.png" mode="widthFix" style="width: 30rpx;height: 30rpx;margin-left: 15rpx;"></image>
			</view>
			<view class="pro">
				<view class="pro-money">
					≈ {{allMoney}}
				</view>
				<view class="pro-des">
					总资产（￥）
				</view>
			</view>
		</view>
		<view class="wrap">
			<view class="list" v-for="(item,index) in list" :key="index" @tap="showMask(item)">
				<view class="left">
					<image :src="item.img" mode="widthFix"></image>
				</view>
				<view class="middel">
					{{item.name}}
				</view>
				<view class="right">
					<view class="r-top">
						{{item.num}}
					</view>
					<view class="r-bottom">
						{{item.money}}
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="mask" @tap.stop="close" v-if="show">
			<view class="mask_con" @tap.stop="showMask1">
				<view class="bbg">
					<view style="color: red;font-size: 26rpx;font-weight: bold;padding: 10rpx 0;letter-spacing: 3rpx;">提现手续费为5%</view>
					<input type="text" class="input" v-model="add" placeholder="请输入提币地址" value="" />
					<input type="text" class="input" v-model="num" placeholder="请输入数量" value="" />
					<input type="password" class="input" v-model="password" placeholder="请输入登录密码" value="" />
					<view class="mask_btn" @tap.stop="send">
						确认提币
					</view>
				</view>
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
						img:'../../static/property/2.png',
						name:'ETH',
						num:'0',
						money:'≈￥45.11'
					},
					{
						id:1,
						img:'../../static/property/3.png',
						name:'USDT',
						num:'0',
						money:'≈￥101.11'
					},{
						id:1,
						img:'../../static/property/4.png',
						name:'ADC',
						num:'0',
						money:'≈￥101.11'
					},{
						id:1,
						img:'../../static/property/5.png',
						name:'USDT佣金',
						num:'0',
						money:'≈￥101.11'
					}
				],
				key:'',
				nickname:'',
				allMoney:0,
				show:false,
				id:'',
				numberr:'',
				name:'',
				add:'',
				num:'',
				status:true,
				password:''
			}
		},
		onLoad(){
			this.nickname=uni.getStorageSync('nickname')
			
		},
		onShow(){
			//判断是否登录
			var loginRes = this.checkLogin();
			if(!loginRes){return false;}
			this.getinfo()
		},
		methods: {
			showMask(e){
				console.log(e)
				
				if(e.name=='USDT'){
					return;
				}
				
				if(e){
					this.id=e.tg_id;
					this.numberr=e.num;
					this.name=e.name;
				}
				
				this.show=true;
			},
			toPayPage(){
				let _this=this;
				uni.navigateTo({
					url: '../pay/pay?code='+this.key
				});
			},
			getinfo(){
				var _this=this;
				this.$http({
					url: '/index/getSecretKey',
					method: 'post',
					data: {
						uid:uni.getStorageSync('uid')
					}
				}).then((res) => {
					console.log(res)
					if (res.status == 'ok') {
						_this.key=res.data.key;
						_this.info=res.data.userInfo;
						let x=res.data.userInfo;
						let list=_this.list;
						let bi =res.data.bi;
						let a=0;
						for (var i = 0; i < list.length; i++) {
							if(i==0){
								list[i].num=x['e_b']
								list[i].money='≈￥'+(_this.setNum(x['e_b']*bi[i].lv))
								a+=(_this.setNum(x['e_b']*bi[i].lv))
								list[i].name=bi[i].name
							}
							if(i==1){
								list[i].num=x['u_b']
								list[i].money='≈￥'+(_this.setNum(x['u_b']*bi[i].lv))
								a+=(_this.setNum(x['u_b']*bi[i].lv))
								list[i].name=bi[i].name
							}
							if(i==2){
								list[i].num=x['a_b']
								list[i].money='≈￥'+(_this.setNum(x['a_b']*bi[i].lv))
								a+=(_this.setNum(x['a_b']*bi[i].lv))
								list[i].name=bi[i].name
							}
							if(i==3){
								list[i].num=x['us_b']
								list[i].money='≈￥'+(_this.setNum(x['us_b']*bi[i].lv))
								a+=(_this.setNum(x['us_b']*bi[i].lv))
								list[i].name=bi[i].name
							}
						}
						
						_this.allMoney=a;
						
					}
				}).catch((err) => {
					console.log(err)
				
				})
			},
			setNum(number){
				let num =Math.round(number * 1000) / 1000;
				return num;
			},
			close(){
				this.show=false
				
			},
			showMask1(){
				this.show=true;
			},
			send(){
				var _this=this;
				if(!this.status){
					return;
				}
				
				
				if(parseInt(_this.num) > parseInt(_this.numberr)){ uni.showToast({title:'您的数量不足，请重新输入', icon:"none"}); return ;}
				if(_this.add.length==0){uni.showToast({title:'请输入提币地址', icon:"none"}); return ;}
				if(_this.num.length==0){uni.showToast({title:'请输入数量', icon:"none"}); return ;}
				if(_this.password.length==0){uni.showToast({title:'请输入密码', icon:"none"}); return ;}	
				this.status=false;
				this.show=false
				uni.showLoading({
				    title: '提交中...'
				});
				this.$http({
					url: '/index/txMyCandy1',
					method: 'post',
					data: {
						name:_this.name,
						user_id:uni.getStorageSync('uid'),
						add:_this.add,
						num:parseFloat(_this.num),
						password:_this.password,
					}
				}).then((res) => {
					uni.hideLoading();
					console.log(res)
					_this.status=true;
					_this.add='';
					_this.num='';
					if (res.status == 'ok') {
						uni.showToast({
						    title: '提交成功',
						    duration: 1000,
							icon:'none'
						});
						_this.getinfo();
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
		}
	}
</script>

<style>
 page{
	 background: #fff;
 }
 .top{
	 width: 100%;
	 padding: 60rpx 0 30rpx 0;
	 background: url(../../static/property/1.png);
	 background-size: 100% 100%;
 }
 .logo{
	 flex: 1;
	 display: flex;
	 justify-content: center;
	 padding: 20rpx 0;
 }
  .logo image{
	  height: 80rpx !important;
	  width: 80rpx !important;
	  display: block;
  }
  .name{
	  font-size:28rpx;
	  font-family:PingFang SC;
	  font-weight:bold;
	  color:rgba(255,255,255,1);
	  text-align: center;
	  padding-bottom: 10rpx;
	  
  }
  .key{
	  width: 100%;
	  display: flex;
	  flex-wrap: nowrap;
	  justify-content: center;
	  padding: 0rpx 0 20rpx 0;
  }
  .key-name{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(255,255,255,1);
	text-align: center;
  }
  .pro{
	  padding: 30rpx 0 10rpx 0;
	  
  }
  .pro-money{

	  font-size:40rpx;
	  font-family:PingFang SC;
	  font-weight:bold;
	  color:rgba(255,255,255,1);
	  text-align: center;
  }
  .pro-des{
	  font-size:24rpx;
	  font-family:PingFang SC;
	  font-weight:500;
	  color:rgba(255,255,255,1);
	  text-align: center;
  }
  .wrap{
	  width: 100%;
	  box-sizing: border-box;
	  padding: 30rpx 25rpx;
  }
  
  .list{
	  width: 100%;
	  background: #FEFEFE;
	  box-sizing: border-box;
	  padding: 20rpx;
	  border-radius: 15rpx;
	  margin-bottom: 20rpx;
	  box-shadow: 0 0rpx 20rpx rgba(0, 0, 0, 0.2);
	  display: flex;
	  flex-wrap: nowrap;
	  align-items: center;
  }
  .left{
	  width: 80rpx;
	  height: 80rpx;
	  
  }
  .left image{
	 width: 80rpx !important;
	 height: 80rpx !important;
	  display: block;
  }
  .middel{
	  flex: 1;
	  padding-left: 20rpx;
	  font-size:28rpx;
	  font-family:PingFang SC;
	  font-weight:bold;
	  color:rgba(51,51,51,1);
  }
  .right{
	  display: flex;
	  flex-direction: column;
	  
  }
  .r-top{
	  flex: 1;
	  font-size:32rpx;
	  font-family:PingFang SC;
	  font-weight:bold;
	  color:rgba(51,51,51,1);
	  text-align: right;
	  
  }
  .r-bottom{
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	  text-align: right;
  }
  
  .mask{
  	  width: 100vw;
  	  height: 100vh;
  	  background: rgba(0,0,0,0.6);
  	  position: fixed;
  	  left: 0;
  	  right: 0;
  	  bottom: 0;
  	  top: 0;
  	  z-index: 999999999999999;
  	  display: flex;
  	  flex-direction: column;
  	  justify-content: center;
  }
  .mask_con{
  	  width: 75vw;
  	  height: 110vw;
  	  box-sizing: border-box;
  	  padding: 100rpx 50rpx 50rpx;
  	  background: #fff;
  	  margin: 0 auto;
  	  background: url(../../static/img/bg1.png);
  	  background-size: 100% 100%;
  	  display: flex;
  	  flex-direction: column;
  	  justify-content: flex-end;
  	  position: relative;
  }
  .input{
  	  height: 80rpx;
  	  line-height: 80rpx;
  	  outline: none;
  	  background:rgba(248,248,248,1);
  	  box-sizing: border-box;
  	  padding: 20rpx;
  	  margin-bottom: 30rpx;
  	  border-radius: 50rpx;
  	  padding: 0 20rpx;
  	  color: #999999;
  	  font-size: 26rpx;
  }
  .mask_btn{
  	  margin: 15rpx auto 0 auto;
  	  width: 100%;
  	  height: 70rpx;
  	  line-height: 70rpx;
  	  text-align: center;
  	  color: #fff;
  	  background: #3699FF;
  	  border-radius: 40rpx;
  	  
  }
  .bbg{
  	  /* width: 100%;
  	  position: absolute;
  	  bottom: 0;
  	  left: 0;
  	  right: 0; */
  }
</style>
