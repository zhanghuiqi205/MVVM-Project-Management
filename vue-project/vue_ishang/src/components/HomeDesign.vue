<template>
	<div class="homedesign">
		<!--<div class="page-content-wrapper" id="wrapper">-->

		<div class="page-content">
			<Header :srcollMark="srcollMark" :bg="bg"></Header>
			<div class="house-show padd-rl">
				<ul class="title">
					<li class="font18 center-text font-weight padd-t">分类</li>
					<li class="font11 center-text f-color1 margin-b1">各种房产一网打尽</li>
				</ul>
				<ul class="frist-title flex">
					<li class="m-r posit-re">
						<router-link :to="{path:'OrderMade',query:{name:'HomeDesign'}}">
							<img src="../assets/HomeDesign/矩形5拷贝5@2x.png" alt="" />
							<section class="bg-card">
								<p class="font15 title"><span class="border-with">全屋定制</span></p>
								<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
							</section>
						</router-link>
					</li>
					<li class="posit-re">
						<!--<router-link to="/OrderMade">-->
							<img src="../assets/Designs/矩形5拷贝005@2x.png" alt="" />
							<section class="bg-card">
								<p class="font15 title"><span class="border-with">精品案例</span></p>
								<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
							</section>
						<!--</router-link>-->
					</li>

				</ul>
				<ul class="frist-title flex margin-t0">
					<li class="m-r posit-re">
						<router-link :to="{path:'Quality',query:{name:'HomeDesign'}}">
							<img src="../assets/HomeDesign/矩形5拷贝6@2x.png" alt="" />
							<section class="bg-card">
								<p class="font15 title"> <span class="border-with">品质家居</span></p>
								<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
							</section>
						</router-link>
					</li>
					<li class="posit-re">
						<router-link to="/OrderMade">
							<img src="../assets/Designs/矩形5拷贝6111@2x.png" alt="" />
							<section class="bg-card">
								<p class="font15 title"><span class="border-with">精品闲置</span></p>
								<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
							</section>
						</router-link>
					</li>

				</ul>
			</div>
			<div class="swipe-box landscape">
				<div class="swipe-title title-box padding">
					<h3 class="font15">排行榜案例</h3>
					<div class="clearfix">
						<span class="fl f-color1">每一套方案给你不一样的感动</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'OrderMadeDtails',query:{name:'HomeDesign'}}">
								<img src="../assets/HomeDesign/图层36@2x.png" />
								<div class="b-card">
									<div class="text">
										<p class="font15">韵律，混搭浓情小美</p>
										<p>两房一厅， 88㎡ 混搭</p>
									</div>
								</div>

							</router-link>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/HomeDesign/图层37@2x.png" />
								<div class="b-card">
									<div class="text">
										<p class="font15">韵律，混搭浓情小美</p>
										<p>两房一厅， 88㎡ 混搭</p>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>
				<div class="designer padding">
					<a href="" class="clearfix">
						<img src="../assets/Designs/图层400000@2x.png" class="fl" />
						<div class="title fl">
							<p><span class="name">依米</span><span class="level">金牌设计师</span></p>
							<p class="num"><span class="focus">关注  35568</span><span class="designed">成交  866</span></p>
							<p><span class="years">九年经验</span><span class="mid-line">|</span><span class="skilled">擅长中小户型混搭</span></p>
						</div>
					</a>

				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/HomeDesign/图层38@2x.png" />
								<div class="b-card">
									<div class="text">
										<p class="font15">韵律，混搭浓情小美</p>
										<p>两房一厅， 88㎡ 混搭</p>
									</div>
								</div>
								<span></span>
							</router-link>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/HomeDesign/图层39@2x.png" />
								<div class="b-card">
									<div class="text">
										<p class="font15">韵律，混搭浓情小美</p>
										<p>两房一厅， 88㎡ 混搭</p>
									</div>
								</div>
								<span></span>
							</router-link>
						</div>
					</div>
				</div>
				<div class="designer padding">
					<a href="" class="clearfix">
						<img src="../assets/Designs/图层400000@2x.png" class="fl" />
						<div class="title fl">
							<p><span class="name">依米</span><span class="level">金牌设计师</span></p>
							<p class="num"><span class="focus">关注  35568</span><span class="designed">成交  866</span></p>
							<p><span class="years">九年经验</span><span class="mid-line">|</span><span class="skilled">擅长中小户型混搭</span></p>
						</div>
					</a>

				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">案例展示</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种设计一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
			</div>
			<div class="swiper-container des">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="container margin-t1">

								<div class="housdesign-content">
									<ul class="housdesign-list design">
										<li class="flex">
											<div>
												<a href="#"><img src="../assets/Home/qwdz2@2x.png" alt="" /></a>
											</div>
											<div>
												<a href="#"><img src="../assets/Home/qwdz3@2x.png" alt="" /></a>
											</div>
										</li>
										<li class="flex">
											<div>
												<a href="#"><img src="../assets/Home/qwdz1@2x.png" alt="" class="height" /></a>
											</div>
											<div>

												<a href="#" class=" margin-b0 desImg posit-re">
													<img src="../assets/Home/qwdz4@2x.png" alt="" />
													<div class="bg-title ">
														<div class="mid-text">	
															<p class="font15">韵律，混搭浓情小美</p>
															<p>两房一厅， 88㎡ 混搭</p>
															<p>全屋60件套家具</p>
															<p class="font15">特惠价 89564元</p>
														</div>
													</div>
												</a>

												<a href="#"><img src="../assets/Home/qwdz5@2x.png" alt="" /></a>
											</div>
										</li>
									</ul>
								</div>
							</div>
					</div>
					<div class="swiper-slide">
						<div class="container margin-t1">

								<div class="housdesign-content">
									<ul class="housdesign-list design">
										<li class="flex">
											<div>
												<a href="#"><img src="../assets/Home/qwdz2@2x.png" alt="" /></a>
											</div>
											<div>
												<a href="#"><img src="../assets/Home/qwdz3@2x.png" alt="" /></a>
											</div>
										</li>
										<li class="flex">
											<div>
												<a href="#"><img src="../assets/Home/qwdz1@2x.png" alt="" class="height" /></a>
											</div>
											<div>

												<a href="#" class=" margin-b1 desImg posit-re">
													<img src="../assets/Home/qwdz4@2x.png" alt="" />
													<div class="bg-title ">
														<div class="mid-text">	
															<p class="font15">韵律，混搭浓情小美</p>
															<p>两房一厅， 88㎡ 混搭</p>
															<p>全屋60件套家具</p>
															<p class="font15">特惠价 89564元</p>
														</div>
													</div>
												</a>

												<a href="#"><img src="../assets/Home/qwdz5@2x.png" alt="" /></a>
											</div>
										</li>
									</ul>
								</div>
							</div>
					</div>
				</div>
                  <div class="swiper-pagination"></div>
			</div>	
			<div class="swiper-container my-swiper">
				<div class="indexPage">
					<span v-text="activeIndex"></span>/<span v-text="slidesLength"></span>

				</div>
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
							<img src="../assets/HomeDesign/在线找新房就来爱尚美家@2x.png" />
							<span></span>
						</router-link>
					</div>
					<div class="swiper-slide">
						<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
							<img src="../assets/HomeDesign/在线找新房就来爱尚美家@2x.png" />
							<span></span>
						</router-link>
					</div>
				</div>

			</div>
			<div class="container margin-t1">

				<div class="housdesign-content">
					<div class="swipe-title title-box padd-tb">
						<h3 class="font15">头条畅销</h3>
						<div class="clearfix">
							<span class="fl f-color1">各种设计一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>
					<ul class="housdesign-list design">
						<li class="flex">
							<div>
								<a href="#"><img src="../assets/HomeDesign/沙发@2x.png" alt=""  /></a>
							</div>
						</li>
						<li class="flex">
							<div>
								<a href="#"><img src="../assets/HomeDesign/钟表@2x.png" alt="" /></a>
							</div>
							<div>
								<a href="#"><img src="../assets/HomeDesign/钟表拷贝2@2x.png" alt="" /></a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="container margin-t1">

				<div class="housdesign-content">
					<div class="swipe-title title-box padd-tb">
						<h3 class="font15">畅销爆品</h3>
						<div class="clearfix">
							<span class="fl f-color1">各种设计一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>
					<ul class="housdesign-list design">
						<li class="flex">
							<div>
								<a href="#"><img src="../assets/HomeDesign/藤椅@2x.png" alt="" /></a>
							</div>
							<div>
								<a href="#"><img src="../assets/HomeDesign/电视柜@2x.png" alt="" /></a>
							</div>
						</li>
						<li class="flex">
							<div>
								<a href="#"><img src="../assets/HomeDesign/衣柜@2x.png" alt="" class="height" /></a>
							</div>
							<div>

								<a href="#" class=" margin-b0 desImg"><img src="../assets/HomeDesign/梳妆台@2x.png" alt="" /></a>

								<a href="#"><img src="../assets/HomeDesign/钟表拷贝2@2x.png" alt="" /></a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="container margin-t1">
				<div class="swipe-title title-box padd-tb">
					<h3 class="font15">品质家居</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
			</div>
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
			<div class="container margin-t1">
				<div class="swipe-title title-box padd-tb">
					<h3 class="font15">精品闲置</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<ul class="housdesign-list active-list">
					<li class="flex">
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/Home/jjyp1@2x.png" />
								<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
								<div class="text bg-color1 padding">
									<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
									<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
								</div>
							</router-link>
						</div>
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/Home/jjyp2@2x.png" />
								<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
								<div class="text bg-color1 padding">
									<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
									<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
								</div>
							</router-link>
						</div>

					</li>
					<li class="flex">
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/Home/jjyp3@2x.png" />
								<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
								<div class="text bg-color1 padding">
									<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
									<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
								</div>
							</router-link>
						</div>
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesign'}}">
								<img src="../assets/Home/jjyp4@2x.png" />
								<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
								<div class="text bg-color1 padding">
									<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
									<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
								</div>
							</router-link>
						</div>

					</li>
				</ul>
			</div>
		</div>
		<Taps :selected="selected" :tabs="tabs"></Taps>

		<!--</div>-->
	</div>
</template>
<script>
	import Header from './Header';
	import Taps from './Taps';
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name: 'HomeDesign',
		data() {
			return {
				h: '260',
				srcollMark: false,
				a: 1,
				selected: "HomeDesign",
				tabs: [
					require("../assets/Home/首页@2x.png"),
					require("../assets/Home/活动@2x.png"),
					require("../assets/Home/房产@2x.png"),
					require("../assets/Home/家居选中@2x.png"),
					require("../assets/Home/我的@2x.png"),
				],
				bg: [require('../assets/HomeDesign/组18@2x.png')],
				qw: '2333',
				activeIndex: "",
				slidesLength: '',
			}
		},
		components: {
			Header,
			Taps,
		},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
				}, 1000);
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

				//				console.log(scrollTop)
				if(scrollTop > 210) {
					this.srcollMark = true;
					//					console.log(this.srcollMark)
				} else {
					this.srcollMark = false;
				}
			},
			lunbo() {

				var swiper = new Swiper('.swiper-container.my-swiper', {
					pagination: {
						el: '.swiper-pagination',
					},
					slidesPerView: 'auto',
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30,
				});
				//显示轮播页码
				setInterval(() => {
					this.activeIndex = swiper.activeIndex + 1;

				}, 500)
				this.slidesLength = swiper.slides.length;

			},
			lunbo1() {
				var mySwiper = new Swiper('.swipe-box .swiper-container', {
					loop: false,
					pagination: '.swiper-pagination',
					effect: 'slide',
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
			lunbo2() {

				var swiper = new Swiper('.swiper-container.des', {
					pagination: {
						el: '.swiper-pagination',
					},
					slidesPerView: 'auto',
					centeredSlides: true,
					paginationClickable: true,
//					spaceBetween: 30,
				});

			},
			colorRandom() {
				const colorList = ["rgba(37,180,55,.6)", "rgba(244,164,96,.6)", "rgba(128,128,128,.6)", "rgba(255,127,80,.6)", "rgba(255,127,80,.6)", ];
				const bCard = document.getElementsByClassName("b-card");
				let index;
				let i;
				for(index in colorList) {
					for(i in bCard) {
						const colorIndex = Math.floor(Math.random() * colorList.length);
						const color = colorList[colorIndex];
						colorList.splice(colorIndex, 1);
						if(bCard[i].nodeType === 1) { //去除文本节点

							bCard[i].style.backgroundColor = color;
						}
					}
				};
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			this.lunbo()
			this.lunbo1()
			this.lunbo2()
			this.colorRandom()
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import"../../static/style/swiper.min.css";
	.container {
		padding: 0 1rem;
	}
	
	.grid-container {
		display: flex;
	}
	
	.grid-container .grid-list {
		flex: 1;
	}
	
	.swipe-box.translate .mint-swipe-items-wrap>div {
		width: 82%;
	}
	
	.mint-swipe-item img {
		height: 20rem;
		width: 100%;
		display: block;
	}
	
	.swipe-box {
		width: 100%;
		height: auto;
		/*background: url("images/banner.png") no-repeat;*/
		background-size: 100% 100%;
		/*margin-bottom: 1rem;*/
	}
	
	.swipe-box .swiper-container {
		/*width: 95%;*/
		padding-top: 0.5rem;
	}
	
	.swipe-box.landscape .swiper-container .swiper-wrapper {
		left: -2.2rem;
	}
	
	.swipe-box.landscape .swiper-slide {
		background-position: center;
		background-size: 130% 120%;
		width: 80%;
		/*height: 18rem;*/
	}
	
	.swipe-box.landscape .swiper-slide img {
		display: block;
		width: 100%;
		height: 15rem;
	}
	.my-swiper .swiper-slide img {
		display: block;
		width: 100%;
	}
</style>
<style type="text/css">
	.homedesign .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.homedesign .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.homedesign .hous-content .house-list img {
		width: 14rem;
	}
	
	.homedesign .page-content {
		margin-bottom: 6rem;
	}
	
	.homedesign .page-content-wrapper {
		position: relative;
		padding-bottom: 1rem;
		margin-bottom: 5.6rem;
		background-color: transparent;
		overflow: auto;
		height: 60rem;
	}
	
	.homedesign .mint-cell-wrapper {
		padding: 1rem 0;
	}
	
	.homedesign .housdesign-list li>div {
		flex: 1;
		width: 50%;
	}
	
	.homedesign .housdesign-list.design li {
		margin-bottom: .5rem;
	}
	
	.homedesign .housdesign-list.design li>div:nth-child(2n) {
		margin-left: .5rem;
	}
	
	.homedesign .housdesign-list.active-list li>div {
		border: 1px solid #f1f1f1;
		margin-top: .4rem;
	}
	
	.homedesign .housdesign-list.active-list li>div:nth-child(2n) {
		margin-left: .4rem;
	}
	
	.homedesign .housdesign-list li div img {
		display: block;
		width: 100%;
	}
	
	.homedesign .housdesign-list .pro-title {
		bottom: 32%;
		font-size: 1.1rem;
		flood-color: #666666;
		left: 7%;
	}
	
	.homedesign .housdesign-list .text .price {
		font-size: 1.4rem;
		color: #b70709;
	}
	
	.homedesign .housdesign-list .text .activety {
		background-color: #b70709;
		color: #FFFFFF;
		padding: 0.2rem 1rem;
	}
	
	.homedesign .banner .mint-swipe-item img {
		width: 100%;
		display: block;
	}
	
	.homedesign .desImg {
		display: block;
	}
	
	.homedesign .height {
		height: 100%;
	}
	
	.homedesign .residence {
		background-color: #d2cea0;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.homedesign .check {
		background-color: #a0c8d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.homedesign .villa {
		background-color: #a8a0d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.homedesign .margin-tab {}
	
	.homedesign .house-show .frist-title li {
		flex: 1;
	}
	
	.homedesign .house-show .frist-title li img {
		display: block;
		width: 17.5rem;
	}
	
	.homedesign .bg-card {
		position: absolute;
		top: 0;
		height: 100%;
		width: 17.5rem;
		background: rgba(0, 0, 0, 0.2);
		color: #FFFFFF;
		text-align: center;
	}
	
	.homedesign .bg-card .title {
		margin-top: 20%;
		padding-bottom:.5rem;
	}
	.homedesign .bg-card .title .border-with{
		position:relative !important;
		padding-bottom: .5rem;
	}
	.homedesign .bg-card .title .border-with:after {/*控制长度的border*/
        content: '';
        position: absolute;
        left:.5rem;
        /*top: 0;*/
        bottom: 0;
        right: auto;
        height: 1px;
        width:5rem;
        background-color: #FFFFFF;
    }
	.homedesign .swiper-container .indexPage {
		width: 3.3rem;
		height: 1.8rem;
		position: absolute;
		background: rgba(0, 0, 0, .3);
		right: 1.5rem;
		top: 1.5rem;
		border-radius: 40%;
		color: #FFFFFF;
		z-index: 9;
	}
	
	.homedesign .swiper-container .indexPage span {
		padding: 2px 4px;
	}
	
	.m-r {
		margin-right: 0.5rem;
	}
	
	.homedesign .b-card {
		position: absolute;
		width: 15rem;
		height: 7.5rem;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		border-radius: .3rem;
		color: #FFFFFF;
		text-align: center;
		/*	line-height:7.5rem  ;*/
	}
	
	.homedesign .b-card .text {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.homedesign .designer img {
		width: 5.5rem;
	}
	.homedesign .designer .title {
		margin-left:1rem;
	}
	.homedesign .designer .title .name{
		font-size:1.4rem;
		font-weight:600;
		margin-right:1rem;
	}
	.homedesign .designer .title .num{
		margin:.2rem 0;
	}
	.homedesign .designer .title .focus{
		margin-right:1rem;
	}
	.homedesign .designer .title .mid-line{
		margin:0 1rem;
	}
	.homedesign .bg-title{
		position: absolute;
		top:0;
		width:100%;
		height:100%;
		background:rgba(255,166,58,.6) ;
		color:#FFFFFF;
		text-align:center;
	}
	.homedesign .mid-text{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	.homedesign .swiper-container.des {
		padding-bottom:1.5rem;
	}
	.homedesign .swiper-pagination-bullet-active{
		background:#09C66C;
	}
</style>