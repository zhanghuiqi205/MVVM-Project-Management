<template>
	<div class="HouseDetails">
		<mt-header fixed title="楼盘详情">
			<router-link :to="{path:back,query:{backs:backs}}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<!--<mt-navbar v-model="selected">
			<mt-tab-item id="1">商品</mt-tab-item>
			<mt-tab-item id="2">详情</mt-tab-item>
			<mt-tab-item id="3">评价</mt-tab-item>
		</mt-navbar>-->

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="swiper-container">
					<mt-swipe style="height:200px;" :auto="0" class="banner">
						<mt-swipe-item>
							<img src="../assets/otherDetails/矩形1拷贝@2x.png" />
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../assets/otherDetails/矩形1拷贝@2x.png" />
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../assets/otherDetails/矩形1拷贝@2x.png" />
						</mt-swipe-item>

					</mt-swipe>
				</div>
				<!--<mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n.id" />-->
				<mt-cell class="margin-b1 ">
					<h3 class="houseTitle  padd-tb margin-t1"><span class="font18 houeName">深圳湾幸福之家</span> <span class="sold font9">在售</span><span class="status font9">新盘</span></h3 >
					<p class="trait font9  padd-tb"><span class="mark">地铁</span><span class="mark">随时看房</span><span class="mark">车位充足</span></p>
					<p class="price"></p>
					<ul class="marks f-color1 font13">
						<li><span class="f-color0">楼盘均价：</span><span class="price">56888元/平米</span></li>
						<li><span class="f-color0">开盘日期：</span>2018-09-09</li>
						<li><span class="f-color0">楼盘地址：</span>宝安区松岗大道与107国道交汇处</li>
					</ul>
				</mt-cell>
				<mt-cell class="margin-b1 ">
					<div class="swipe-title title-box border-bott margin-b1 ">
						<h3 class="font15 margin-t1">楼盘详情</h3>
					<div class="clearfix font11 padd-tb">
						<span class="fl f-color1">各种楼盘一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
	</div>
	<ul class="marks f-color1 font13">
		<li><span class="f-color0">楼盘名称：</span>深圳湾幸福之家</li>
		<li><span class="f-color0">物业用途：</span>住宅</li>
		<li><span class="f-color0">车位数量：</span>1985</li>
		<li><span class="f-color0">容积率：</span>3.9</li>
		<li><span class="f-color0">占地面积：</span>350000㎡</li>
		<li><span class="f-color0">物业公司：</span>深圳幸福之家物业公司</li>
	</ul>
	</mt-cell>
	<mt-cell class="margin-b1 ">
		<div class="swipe-title title-box border-bott margin-b1">
			<h3 class="font15 margin-t1">楼盘亮点</h3>
			<div class="clearfix font11 padd-tb">
				<span class="fl f-color1">各种信息一网打尽</span>

			</div>
		</div>
		<ul class="marks f-color1 font13 points">
			<li><span class="f-color0">核心卖点：</span><span>占地广,建面大,涵盖研发办公、精装公寓、酒店
                                                              商业等多重业态的城市综合体 </span></li>
			<li><span class="f-color0">项目介绍：</span><span>万科云城目前在售40年产权的商务公寓产品,主推
							二户型面积为50/150平1房和5房,层高36米,通燃
							气,均价73000元/平</span></li>
			<li><span class="f-color0">主推户型：</span><span>3房1厅(110平米) 3房2厅(136平米) 
                        2房2厅(92平米)</span></li>

		</ul>
	</mt-cell>
	<mt-cell class="margin-b1 ">
		<div class="swipe-title title-box border-bott margin-b1">
			<h3 class="font15 margin-t1">楼盘动态</h3>
			<div class="clearfix font11 padd-tb">
				<span class="fl f-color1">各种信息一网打尽</span>
				<a class="fr f-color1">READ MORE >></a>
			</div>
		</div>
		<ul class="marks f-color0 font13 points">
			<p class="margin-b1">销售动态:鸿荣源·尚峻1栋、3A栋、4栋及5栋住宅在售</p>
			<li class="f-color1">
				鸿荣源·尚峻鸿荣源尚峻御园目前1栋、3A栋、4栋及5栋住宅 在售,户型面积约81-120平3-4房,均价约64000元/平。鸿荣 源尚峻御园毛坯发售,梯户比为2梯4户或3梯6户,预计2019年 12月交付
			</li>
			<li class="f-color1 date">
				2018年01月30日
			</li>
		</ul>
	</mt-cell>
	<div class="swipe-box padd-tb margin-b1">
		<div class="swipe-title title-box padd-rl ">
			<h3 class="font15">户型介绍</h3>
			<div class="clearfix border-bott margin-b1 padd-tb font11">
				<span class="fl f-color1">各种玩法一网打尽</span>
				<a class="fr f-color1">READ MORE >></a>
			</div>
		</div>
		<div class="swiper-container ">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/otherDetails/图层2@2x.png" />
						<p class="font13 margin-t1 f-color0">3房2厅1卫(110㎡)</p>
						<p class="font12 f-color6">640万/套</p>
					</a>
					<span></span>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/otherDetails/图层3@2x.png" />
						<p class="font13 margin-t1 f-color0">3房2厅1卫(110㎡)</p>
						<p class="font12 f-color6">640万/套</p>
					</a>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/otherDetails/图层4@2x.png" />
						<p class="font13 margin-t1 f-color0">3房2厅1卫(110㎡)</p>
						<p class="font12 f-color6">640万/套</p>
					</a>
				</div>
			</div>
		</div>
	</div>
	<mt-cell class="margin-b1 ">
		<div class="swipe-title title-box ">
			<h3 class="font15 margin-t1">整栋信息</h3>
			<div class="clearfix padd-tb font11">
				<span class="fl f-color1">各种楼盘一网打尽</span>
				<a class="fr f-color1">READ MORE >></a>
			</div>
		</div>
		<ul class="house-img">
			<img src="../assets/otherDetails/图层6@2x.png" alt="" />
			<li class="font12 padd-tb center-text">2栋 ，3栋，5栋在售</li>
		</ul>
	</mt-cell>
	<mt-cell class="margin-b1 ">
		<div class="swipe-title title-box ">
			<h3 class="font15 margin-t1">周边信息</h3>
			<div class="clearfix padd-tb font11">
				<span class="fl f-color1">各种楼盘一网打尽</span>
				<a class="fr f-color1">READ MORE >></a>
			</div>
		</div>
		<ul class="house-img">
			<img src="../assets/otherDetails/图层18@2x.png" alt="" />
			<li class="font12 padd-tb center-text">周边地铁：3号线 ，五号线</li>
		</ul>
	</mt-cell>
	<mt-cell class="margin-b1 ">
		<ul class="clearfix padd-tb">
			<li class="fl font15">用户点评<span>(1258)</span></li>
			<li class="fr font11 f-color1">98.6% 满意 >></li>
		</ul>
		<div class="discuss-box">
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
				<li class="padd-tb font13">沙发款式不错,简约有逼格,用的布料是百分之百亚麻的 什么味道,物流业很给力,非常满意!
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
				<li class="padd-tb font13">沙发款式不错,简约有逼格,用的布料是百分之百亚麻的 什么味道,物流业很给力,非常满意!
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
				<li class="padd-tb font13">沙发款式不错,简约有逼格,用的布料是百分之百亚麻的 什么味道,物流业很给力,非常满意!
				</li>
				<li class="pic">

				</li>
			</ul>
		</div>
	</mt-cell>
	<div class="swipe-box">
		<div class="swipe-title title-box padding">
			<h3 class="font15">看过此楼盘的用户还看了</h3>
			<div class="clearfix">
				<span class="fl f-color1">各种玩法一网打尽</span>
				<a class="fr f-color1">READ MORE >></a>
			</div>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/otherDetails/图层28@2x.png" />
						<p class="font13 margin-t1 ellipsis">红山六九七九商业中心(一期)</p>
						<p class="font11 f-color1 margin-b1">商铺，住宅，写字楼</p>
					</a>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/otherDetails/图层32@2x.png" />
						<p class="font13 margin-t1 ellipsis">保利达小行星</p>
						<p class="font11 f-color1 margin-b1">商铺，住宅，写字楼</p>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="foot padding">
		<span class="foot-icon"></span><span>免责声明:以上楼盘售息由开发商提供
                                最终以政府部门登记为准，请谨慎核查</span>
	</div>

	</mt-tab-container-item>
	</mt-tab-container>
	<div class="taps">
		<!--底部选择按钮区域-->
		<mt-tab-container>
			<mt-tabbar :fixed="true">
				<!--v-model=""-->
				<mt-tab-item id="Home" class="foucs">
					<img slot="icon" :src="this.tabs[0]">关注
				</mt-tab-item>
				<mt-tab-item class="tab-button">
					<mt-button type="primary" class="ask">预约看房</mt-button>
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
				backs: '',
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
				that.backs = that.$route.query.backs; //方便父级路由返回
			},
			send() {
				let that=this;
				that.$http.get({
		 			url: 'http://www.baidu.com?name=tom&age=23'
				}).then(function(resp) {
					console.log(resp.data);
				}).catch(resp => {
					console.log('请求失败：' + resp.status + ',' + resp.statusText);
				});
			},
		},
		mounted() {
			this.lunbo(),
			this.backData()
//			this.send()
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
	
	.img-show img {
		width: 100%;
	}
</style>
<style type="text/css">
	.HouseDetails {
		background-color: #EEEEEE;
	}
	
	.HouseDetails .mint-navbar .mint-tab-item-label {
		font-size: 1.5rem !important;
	}
	
	.HouseDetails .mint-navbar .mint-tab-item {
		padding: 13px 0;
		margin-right: 1rem;
	}
	
	.HouseDetails .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
		border-bottom-color: #09C66C;
	}
	
	.HouseDetails .mint-tab-container-wrap {
		margin-top: 44px;
	}
	
	.HouseDetails .banner .mint-swipe-item img {
		height: 100%;
		width: 100%;
	}
	
	.HouseDetails .mint-swipe-indicator.is-active {
		background: #09C66C;
		opacity: .6;
	}
	
	.HouseDetails .mint-cell-wrapper {
		display: block;
	}
	
	.HouseDetails .mint-cell-value {
		display: block;
	}
	
	.HouseDetails .mint-tab-container-item {
		background: #EEEEEE;
	}
	
	.HouseDetails .mint-tab-item-label .buy {
		background: #e53d3d;
	}
	
	.HouseDetails .mint-tab-item-label .ask {
		background: #09C66C;
	}
	
	.HouseDetails .mint-header-title {
		font-size: 1.8rem;
	}
	
	.HouseDetails .houseTitle .sold {
		background: #a1ffd2;
		color: #09C66C;
		border-radius: 4px;
		padding: .2rem .4rem;
	}
	
	.HouseDetails .houseTitle .status {
		background: #bbebff;
		color: #38afe1;
		border-radius: 4px;
		padding: .2rem .4rem;
	}
	
	.HouseDetails .houseTitle .font9 {
		margin-right: .5rem;
	}
	
	.HouseDetails .trait .mark {
		color: #C6C6C6;
		border: solid 1px #C6C6C6;
		border-radius: 2px;
		padding: .2rem .4rem;
		margin-right: .5rem;
	}
	
	.HouseDetails .price {
		color: #e53d3d;
	}
	
	.HouseDetails .house-img img {
		width: 100%;
	}
	
	.HouseDetails .foucs.mint-tab-item {
		flex: .2;
	}
	
	.HouseDetails .tab-button .mint-button--normal {
		padding: 0 9rem;
	}
	
	.HouseDetails .mint-cell-value {
		color: #333333;
	}
	
	.HouseDetails .mint-tab-container {
		padding-bottom: 1rem;
	}
	
	.HouseDetails .marks li {
		margin-bottom: 1rem;
	}
	
	.HouseDetails .points {
		line-height: 1.5;
	}
	
	.HouseDetails .date {
		text-align: right;
	}
	
	.HouseDetails .content {
		background-color: #FFFFFF;
	}
	
	.HouseDetails .swipe-box {
		background-color: #FFFFFF;
	}
	
	.HouseDetails .swiper-slide {
		width: 13rem;
	}
	
	.HouseDetails .swipe-box .swiper-container .swiper-wrapper {
		margin-left: -10rem;
	}
	
	.HouseDetails .swiper-slide img {
		width: 13rem;
	}
	
	.HouseDetails .trait img {
		width: 1.2rem;
		height: 1.2rem;
		margin-right: .5rem;
	}
	
	.HouseDetails .marks li {
		margin-bottom: 1rem;
	}
	
	.HouseDetails .user-pic {
		display: inline-block;
		width: 3.5rem;
		height: 3.5rem;
		background: url(../assets/HomeDesignDetails/头像男孩@2x.png) no-repeat center center;
		background-size: 80% 80%;
		border-radius: 50%;
	}
	
	.HouseDetails .tel-box {
		display: inline-block;
	}
	
	.HouseDetails .stars i {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		background: url(../assets/HomeDesignDetails/评分@2x.png) no-repeat;
	}
	
	.HouseDetails .time {
		margin-top: 6.5%;
		font-size: 1.1rem;
		color: #999999;
	}
	
	.HouseDetails .pic img {
		display: inline-block;
		width: 9rem;
	}
	
	.HouseDetails .discuss-box ul {
		margin-bottom: 1rem;
		padding: 1rem 0;
		border-bottom: solid 1px #E6E6E6;
	}
	
	.HouseDetails .foot-icon {
		margin-right: .2rem;
		display: inline-block;
		width: 1.8rem;
		height: 2.0rem;
		background: url(../assets/otherDetails/免责@2x.png) no-repeat;
		background-size: 60% 60%;
		background-position: 100% 100%;
	}
</style>