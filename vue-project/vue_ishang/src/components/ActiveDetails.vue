<template>
	<div class="ActiveDetails">
		<mt-header fixed title="活动详情">
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
							<img src="../assets/otherDetails/图层1@2x.png" />
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../assets/otherDetails/图层1@2x.png" />
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../assets/otherDetails/图层1@2x.png" />
						</mt-swipe-item>

					</mt-swipe>
				</div>
				<!--<mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n.id" />-->
				<mt-cell class="margin-b1 padd-tb">
					<h3 class="font18 margin-b1 f-color0">跨年签售会迎战2018</h3>
					<p><span class="font12 margin-b1 f-color2">跨签告会暨路年狂欢派对”,回顾过去一辉煌成就,我们]以
                                                    更好的姿态来赢战2018!</span></p>
					<p class="browse font10 f-color1 margin-tb">浏览：<span>365次</span> 收藏：<span>91次</span> </p>
					<ul class="marks font13 border-bott">
						<li class="time"><img slot="icon" src="../assets/otherDetails/时间@2x.png" /><span>2018年02月25日09:30-18:00</span></li>
						<li class="address clearfix">
							<a href=""><img slot="icon" src="../assets/otherDetails/定位@2x.png" class="fl" /><span class="fl">深圳市留仙大道2005</span><i class="mintui mintui-back fr"></i></a>
						</li>
						<li class="number"><img slot="icon" src="../assets/otherDetails/限额@2x.png" /><span>限额60人</span></li>
					</ul>
					<p class="padd-tb font11 f-color1">注： 至少提前一天预约</p>
				</mt-cell>
				<mt-cell class="margin-b1 padd-tb">
					<div class="swipe-title title-box margin-b1">
						<h3 class="font15 margin-b0">活动详情</h3>
						<div class="clearfix font11">
							<span class="fl f-color1">各种活动一网打尽</span>

						</div>
					</div>
					<ul class="house-img">
						<img src="../assets/otherDetails/图层00@2x.png" alt="" />
						<p class="padd-tb font13 f-color2">音为你乐南工” 五月的风总是承载着美好的希望,在诗意盎然的校园里款款清 歌,风儿也会为你轻轻伴奏 你是否愿意用歌声润色这个温暖的校园? 你是否欣喜用歌芦渲染这个美丽的李节? 你是否期待用歌声撼动这个夺目的生? 2017“管为你,乐菜工”校园一佳款手赛已经拉开了帷幕/时 彩/喝彩华丽的舞台准备就绪,聚镁小光 这场歌曲宴,你终会成为最耀眼的那喝彩/彩 限听你的故事,想听你的心声,想听你的需燃乐我,听你唱
						</p>
						<img src="../assets/otherDetails/图层000@2x.png" alt="" />
						<p class="padd-tb font13 f-color2">2017“音为你,乐南工”校园十佳歌手,我们在等你侦情演唱 。旋律响起,闭上双眼:你就是我们史找的那个人。丰厚的奖 品在等你,我们也在等你!
						</p>

					</ul>
				</mt-cell>
				<mt-cell class="margin-b1 padd-tb">
					<ul class="clearfix border-bott padd-tb">
						<li class="fl font15">用户点评<span>(1258)</span></li>
						<li class="fr font12 f-color1">98.6% 满意 >></li>
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
				<div class="page1-cotent">
					<div class="hous-content padding">
						<div class="swipe-title title-box padd-tb">
							<h3 class="font15">推荐活动</h3>
							<div class="clearfix">
								<span class="fl f-color1">各种玩法一网打尽</span>
								<a class="fr f-color1">READ MORE >></a>
							</div>
						</div>
						<ul class="house-list">
							<li>
								<a href="#">
									<mt-cell>
										<h4 class="font15">双旦狂欢碰上开放盛典</h4>
										<p class="house-address f-color1 font11 ellipsis">
											我们结合圣诞节与元旦节双旦来临 的契机,将深圳点优优先举行dsdsdcxdwadsssssssssssss
										</p>
										<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon" />2018年02月10</p>
										<p class="font11"><img src="../assets/Active/定位@2x.png" class="addressIcon" />深圳龙岗丹竹头时代广场</p>

										<p class="margin-tb">
											<span class="border font9 mr">地铁</span>
											<span class="border font9 mr">随时看房</span>
											<span class="border font9 mr">红本在手</span>

										</p>

										<img slot="icon" src="../assets/Active/矩形5拷贝000@2x.png">
									</mt-cell>
								</a>
							</li>
							<li>
								<a href="#">
									<mt-cell>
										<h4 class="font15">双旦狂欢碰上开放盛典</h4>
										<p class="house-address f-color1 font11 ellipsis">
											我们结合圣诞节与元旦节双旦来临 的契机,将深圳点优优先举行dsdsdcxdwadsssssssssssss
										</p>
										<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon" />2018年02月10</p>
										<p class="font11"><img src="../assets/Active/定位@2x.png" class="addressIcon" />深圳龙岗丹竹头时代广场</p>

										<p class="margin-tb">
											<span class="border font9 mr">地铁</span>
											<span class="border font9 mr">随时看房</span>
											<span class="border font9 mr">红本在手</span>

										</p>

										<img slot="icon" src="../assets/Active/矩形5拷贝00@2x.png">
									</mt-cell>
								</a>
							</li>
							<li>
								<a href="#">
									<mt-cell>
										<h4 class="font15">双旦狂欢碰上开放盛典</h4>
										<p class="house-address f-color1 font11 ellipsis">
											我们结合圣诞节与元旦节双旦来临 的契机,将深圳点优优先举行dsdsdcxdwadsssssssssssss
										</p>
										<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon" />2018年02月10</p>
										<p class="font11"><img src="../assets/Active/定位@2x.png" class="addressIcon" />深圳龙岗丹竹头时代广场</p>

										<p class="margin-tb">
											<span class="border font9 mr">地铁</span>
											<span class="border font9 mr">随时看房</span>
											<span class="border font9 mr">红本在手</span>

										</p>

										<img slot="icon" src="../assets/Active/矩形5拷贝2@2x.png">
									</mt-cell>
								</a>
							</li>

						</ul>
					</div>
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
					<mt-tab-item id="" class="foucs">
						<img slot="icon" :src="this.tabs[0]">关注
					</mt-tab-item>
					<mt-tab-item id="" class="btn">
						<mt-button type="primary" class="buy">预约报名</mt-button>
					</mt-tab-item>
					<mt-tab-item id="" class="btn">
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
	
	.img-show img {
		width: 100%;
	}
	
	.hous-content {
		background: #FFFFFF;
	}
	
	.hous-content .house-list .house-address {
		line-height: 1.4rem;
		width: 13rem;
		height: 2.7rem;
	}
	
	.hous-content .house-list img {
		width: 15rem;
	}
</style>
<style type="text/css">
	.ActiveDetails .mint-navbar .mint-tab-item-label {
		font-size: 1.5rem !important;
	}
	
	.ActiveDetails .mint-navbar .mint-tab-item {
		padding: 13px 0;
		margin-right: 1rem;
	}
	
	.ActiveDetails .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
		border-bottom-color: #09C66C;
	}
	
	.ActiveDetails .mint-tab-container-wrap {
		margin-top: 44px;
	}
	
	.ActiveDetails .banner .mint-swipe-item img {
		height: 100%;
		width: 100%;
	}
	
	.ActiveDetails .mint-swipe-indicator.is-active {
		background: #09C66C;
	}
	
	.ActiveDetails .mint-cell-value {
		display: block;
	}
	
	.ActiveDetails .mint-tab-container-item {
		background: #EEEEEE;
	}
	
	.ActiveDetails .mint-tab-item-label .buy {
		background: #e53d3d;
	}
	
	.ActiveDetails .mint-tab-item-label .ask {
		background: #09C66C;
	}
	
	.ActiveDetails .mint-header-title {
		font-size: 1.8rem;
	}
	
	.ActiveDetails .house-img img {
		width: 100%;
	}
	
	.ActiveDetails .mint-cell-value {
		color: #333333;
	}
	
	.ActiveDetails .marks .mintui.mintui-back {
		display: inline-block;
		transform: rotate(180deg);
		font-size: 1.3rem;
	}
	
	.ActiveDetails .marks li {
		margin-bottom: 1rem;
	}
	
	.ActiveDetails .marks li img {
		width: 1.3rem;
		height: 1.3rem;
		margin-right: .5rem;
	}
	
	.ActiveDetails .user-pic {
		display: inline-block;
		width: 3.5rem;
		height: 3.5rem;
		background: url(../assets/HomeDesignDetails/头像男孩@2x.png) no-repeat center center;
		background-size: 80% 80%;
		border-radius: 50%;
	}
	
	.ActiveDetails .tel-box {
		display: inline-block;
	}
	
	.ActiveDetails .stars i {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		background: url(../assets/HomeDesignDetails/评分@2x.png) no-repeat;
	}
	
	.ActiveDetails .discuss-box .time {
		margin-top: 6.5%;
		font-size: 1.1rem;
		color: #999999;
	}
	
	.ActiveDetails .pic img {
		display: inline-block;
		width: 9rem;
	}
	
	.ActiveDetails .discuss-box ul {
		margin-bottom: 1rem;
		padding: 1rem 0;
		border-bottom: solid 1px #E6E6E6;
	}
	
	.ActiveDetails .content {
		background-color: #FFFFFF;
	}
	
	.ActiveDetails .swipe-box {
		background-color: #FFFFFF;
	}
	
	.ActiveDetails .swiper-slide {
		width: 15rem;
	}
	
	.ActiveDetails .swipe-box .swiper-container .swiper-wrapper {
		margin-left: -10rem;
	}
	
	.ActiveDetails .swiper-slide img {
		width: 15rem;
	}
	
	.ActiveDetails .timeIcon {
		width: 1rem !important;
	}
	
	.ActiveDetails .addressIcon {
		width: 1rem !important;
	}
	
	.ActiveDetails .border {
		border: 1px solid #999999;
		padding: .1rem .4rem;
	}
	
	.ActiveDetails .house-list .mint-cell-wrapper {
		padding: 1rem 0;
	}
	.ActiveDetails  .foucs{
		flex:.4;
	}
	.ActiveDetails .mint-tab-item-label .mint-button--normal{
		    padding: 0 3.5rem
	}
</style>