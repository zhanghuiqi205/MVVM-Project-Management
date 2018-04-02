<template>
	<div class="HomeDesignDetails">
		<mt-header fixed>
			<router-link :to="{path:back,query:{backs:backs}}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">商品</mt-tab-item>
			<mt-tab-item id="2">详情</mt-tab-item>
			<mt-tab-item id="3">评价</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="swiper-container">
					<mt-swipe style="height:200px;" :auto="0" class="banner">
						<mt-swipe-item>
							<img src="../assets/Home/banner2@2x.png" />
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../assets/Home/banner2@2x.png" />
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../assets/Home/banner2@2x.png" />
						</mt-swipe-item>

					</mt-swipe>
				</div>
				<!--<mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n.id" />-->
				<div class="margin-b1 padding content">
					<p class="font18 margin-b1 f-color0">美式简约弹簧布艺沙发</p>
					<p><span class="font12 f-color1"><span class="f-color6">【自带正品杜邦SORONA腰枕】</span> 松软包裹感，宽厚大身量，环保新科技，0螺丝组装</span></p>
					<p class="margin-tb">
						<span class="residence font9 mr">客厅</span>
						<span class="check font9 mr">简约时尚</span>
						<span class="villa font9 mr">合理搭配</span>

					</p>
					<ul class="trait font12 f-color1">
						<li><img slot="icon" src="../assets/HomeDesignDetails/对号@2x.png" /><span>尚品宅配，真品保障</span></li>
						<li><img slot="icon" src="../assets/HomeDesignDetails/对号@2x.png" /><span>环保材料，健康环保</span></li>
						<li><img slot="icon" src="../assets/HomeDesignDetails/对号@2x.png" /><span>五大服务，免费服务</span></li>
					</ul>
				</div>
				<div class="margin-b1 padding content">
					<ul class="font13 f-color1 marks">
						<li><span class="f-color0">套餐包含件数：</span>八件套</li>
						<li><span class="f-color0">优惠截止日期：</span>2018-09-09</li>
						<li><span class="f-color0">定制周期：</span>30天左右(视配送距离而定)</li>
						<li><span class="f-color0">详细地址：</span>宝安区松岗大道与107国道交汇处</li>
						<li><span class="f-color0">联系电话：</span>400-800-8888转1004#</li>
					</ul>
				</div>
				<div class="margin-b1 padding content">
					<ul class="clearfix padd-tb border-bott" >
						<li class="fl font15 f-color0">用户点评<span>(1258)</span></li>
						<li class="fr font12 f-color1">98.6% 满意 >></li>
					</ul>
					<div class="discuss-box padd-tb">
						<ul>
							<li class="clearfix">
								<div class="person fl">
									<span class="user-pic"></span>
									<div class="tel-box ">
										<p class="tel">17*******92</p>
										<p class="stars">
											<i></i>
											<i></i>
											<i></i>
											<i></i>
											<i></i>
										</p>
									</div>
								</div>
								<div class="time fr">
									2018年2月15日
								</div>
							</li>
							<li class="font13 f-color0 padd-tb">沙发款式不错,简约有逼格,用的布料是百分之百亚麻的 什么味道,物流业很给力,非常满意!
							</li>
							<li class="pic">
								<img src="../assets/HomeDesignDetails/图层34@2x.png" />
								<img src="../assets/HomeDesignDetails/图层35@2x.png" />
							</li>
						</ul>
						<ul>
							<li class="clearfix">
								<div class="person fl">
									<span class="user-pic"></span>
									<div class="tel-box">
										<p class="tel">17*******92</p>
										<p class="stars">
											<i></i>
											<i></i>
											<i></i>
											<i></i>
											<i></i>
										</p>
									</div>
								</div>
								<div class="time fr">
									2018年2月15日
								</div>
							</li>
							<li class="font13 f-color0 padd-tb">沙发款式不错,简约有逼格,用的布料是百分之百亚麻的 什么味道,物流业很给力,非常满意!
							</li>
							<li class="pic">

							</li>
						</ul>
						<ul>
							<li class="clearfix">
								<div class="person fl">
									<span class="user-pic"></span>
									<div class="tel-box">
										<p class="tel">17*******92</p>
										<p class="stars">
											<i></i>
											<i></i>
											<i></i>
											<i></i>
											<i></i>
										</p>
									</div>
								</div>
								<div class="time fr">
									2018年2月15日
								</div>
							</li>
							<li class="font13 f-color0 padd-tb">沙发款式不错,简约有逼格,用的布料是百分之百亚麻的 什么味道,物流业很给力,非常满意!
							</li>
							<li class="pic">

							</li>
						</ul>
					</div>
				</div>
				<div class="swipe-box padd-tb margin-b1">
					<div class="swipe-title title-box padd-rl ">
						<h3 class="font15">相似推荐</h3>
						<div class="clearfix border-bott margin-b1 padd-tb">
							<span class="fl f-color1">各种玩法一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>
					<div class="swiper-container ">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<a href="#">
									<img src="../assets/HomeDesignDetails/图层53@2x.png" />
									<p class="font13 margin-t1 f-color0">天然亚麻三人沙发</p>
									<p class="font12 f-color6">¥1199</p>
								</a>
								<span></span>
							</div>
							<div class="swiper-slide">
								<a href="#">
								<img src="../assets/HomeDesignDetails/图层34@2x.png" />
								<p class="font13 margin-t1 f-color0">天然亚麻三人沙发</p>
								<p class="font12 f-color6">¥1199</p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="#">
								<img src="../assets/HomeDesignDetails/图层55@2x.png" />
								<p class="font13 margin-t1 f-color0">天然亚麻三人沙发</p>
								<p class="font12 f-color6">¥1199</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="img-show">
					<img src="../assets/HomeDesignDetails/图层37@2x.png" />
					<img src="../assets/HomeDesignDetails/图层38@2x.png" />
					<img src="../assets/HomeDesignDetails/图层39@2x.png" />
					<img src="../assets/HomeDesignDetails/图层40@2x.png" />
					<img src="../assets/HomeDesignDetails/图层41@2x.png" />
					<img src="../assets/HomeDesignDetails/图层42@2x.png" />
					<img src="../assets/HomeDesignDetails/图层43@2x.png" />
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n.id" />
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n.id" />
			</mt-tab-container-item>
		</mt-tab-container>
		<div class="taps">
		<!--底部选择按钮区域-->
			<mt-tab-container>
				<mt-tabbar :fixed="true">
					<!--v-model=""-->
					<mt-tab-item id="Home">
						<img slot="icon" :src="this.tabs[0]">关注
					</mt-tab-item>
					<mt-tab-item id="Active">
						<mt-button type="primary" class="buy">立即购买</mt-button>
					</mt-tab-item>
					<mt-tab-item id="House">
					  <mt-button type="primary" class="ask">咨询顾问</mt-button>
					</mt-tab-item>
				</mt-tabbar>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name: 'HomeDesignDetails',
		data() {
			return {
				selected: '1',
				n: 1,
				value: '',
				back: '',
				backs:'',
				tabs: [
					require("../assets/HomeDesign/关注@2x.png"),
				],	
			}
		},
		methods: {
			lunbo() {
				var mySwiper = new Swiper('.swipe-box .swiper-container', {
					loop: false,
					pagination: '.swiper-pagination',
					effect: 'slide',
					observer: true,
					observeParents: true,
					grabCursor: true,
					centeredSlides: true,
					slidesPerView: 'auto',
					spaceBetween: 10,
					coverflow: {
						rotate: 0, // 旋转的角度  
						stretch: 0, // 拉伸   图片间左右的间距和密集度  
						depth: 0, // 深度   切换图片间上下的间距和密集度  
						modifier: 0, // 修正值 该值越大前面的效果越明显  
						slideShadows: false // 页面阴影效果  
					}
					// 如果需要分页器
				})
			},
			backData() {
				let that = this;
				that.back = that.$route.query.name;
				that.backs = that.$route.query.backs;//方便父级路由返回
				console.log(that.$route.query);
			},
		},
		mounted() {
			this.lunbo(),
				this.backData()
		}
	}
</script>

<style scoped>
	@import"../../static/style/swiper.min.css";
	.mint-header {
		color: #333333;
		background: #FFFFFF;
		z-index: 99;
	}
	
	.mint-navbar {
		position: fixed;
		z-index: 999;
		margin-left: 36%;
		background: #FFFFFF;
	}
	
	.residence {
		background-color: #d2cea0;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.check {
		background-color: #a0c8d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.villa {
		background-color: #a8a0d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	.img-show img{
		width:100%;
	}
</style>
<style type="text/css">
	.HomeDesignDetails .mint-navbar .mint-tab-item-label {
		font-size: 1.5rem !important;
	}
	
	.HomeDesignDetails .mint-navbar .mint-tab-item {
		padding: 13px 0;
		margin-right: 1rem;
	}
	
	.HomeDesignDetails .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
		border-bottom-color: #09C66C;
	}
	
	.HomeDesignDetails .mint-tab-container-wrap {
		margin-top: 44px;
	}
	
	.HomeDesignDetails .banner .mint-swipe-item img {
		height: 100%;
		width: 100%;
	}
	
	.HomeDesignDetails .mint-swipe-indicator.is-active {
		background: #09C66C;
	}
	
	.HomeDesignDetails .mint-cell-wrapper {
		display: block;
	}
	
	.HomeDesignDetails .mint-cell-value {
		display: block;
	}
	
	.HomeDesignDetails .mint-tab-container-item {
		background: #EEEEEE;
	}
	.HomeDesignDetails .mint-tab-item-label .buy{
		background:#e53d3d;
	}
	.HomeDesignDetails .mint-tab-item-label .ask{
		background:#09C66C;
	}
	.HomeDesignDetails .trait img{
		width:1.2rem;
		height:1.2rem;
		margin-right:.5rem;
	}
	.HomeDesignDetails .marks li{
		margin-bottom:1rem;
	}
	.HomeDesignDetails .user-pic{
		display: inline-block;
		width:3.5rem;
		height:3.5rem;
		background:url(../assets/HomeDesignDetails/头像男孩@2x.png) no-repeat center center;
		background-size:80% 80% ;
		border-radius:50%;
	}
	.HomeDesignDetails .tel-box{
		display:inline-block;
	}
	.HomeDesignDetails .stars i{
		display:inline-block;
		width:1.5rem;height:1.5rem;
		background:url(../assets/HomeDesignDetails/评分@2x.png) no-repeat;
	}
	.HomeDesignDetails .time{
		margin-top:6.5%;
		font-size:1.1rem;
		color:#999999;
	}
	.HomeDesignDetails .pic img{
		display: inline-block;
		width:9rem;
	}
	.HomeDesignDetails .discuss-box ul{
		margin-bottom:1rem;
		padding:1rem 0;
		border-bottom:solid 1px #E6E6E6;
	}
	.HomeDesignDetails .content{
		background-color:#FFFFFF;
	}
	.HomeDesignDetails .swipe-box{
	    background-color:#FFFFFF;
	 }
	.HomeDesignDetails .swiper-slide{
		width:15rem;
	}
	.HomeDesignDetails .swipe-box .swiper-container .swiper-wrapper{
		margin-left:-10rem;
	}
	.HomeDesignDetails .swiper-slide img{
		width:15rem;
	}
</style>