<template>
	<div class="house">
		<!--<div class="page-content-wrapper">-->

		<div class="page-content" style="padding-bottom:80px;">
			<Header :srcollMark="srcollMark" :bg="bg"></Header>
			<div class="container margin-t1">
				<div class="house-show">
					<ul class="title">
						<li class="font18 center-text font-weight">房产分类</li>
						<li class="font11 center-text f-color1 margin-b1">各种房产一网打尽</li>
					</ul>
					<ul class="frist-title flex">
						<li class="m-r posit-re">
							<router-link :to="{path:'NewHouse',query:{name:'House'}}">
								<img src="../assets/House/矩形5拷贝10@2x.png" alt="" />
								<section class="bg-card">
									<p class="font15 title">精选楼盘</p>
									<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
								</section>
							</router-link>
						</li>
						<li class="posit-re">
							<router-link :to="{path:'SecondHouse',query:{name:'House'}}"><img src="../assets/House/矩形5拷贝11@2x.png" alt="" />
								<section class="bg-card">
									<p class="font15 title">二手好房</p>
									<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
								</section>
							</router-link>
						</li>

					</ul>
					<ul class="frist-title flex m-t">
						<li class="m-r posit-re">
							<router-link to="/RentHouse"><img src="../assets/House/矩形5拷贝5@2x.png" alt="" />
								<section class="bg-card">
									<p class="font15 title">精品出租</p>
									<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
								</section>
							</router-link>
						</li>
						<li class="posit-re">
							<router-link :to="{path:'HouseOwner',query:{name:'House'}}"><img src="../assets/House/矩形5拷贝6@2x.png" alt="" />
								<section class="bg-card">
									<p class="font15 title">业主委托</p>
									<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
								</section>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">火爆楼盘</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<img src="../assets/House/图层27@2x.png" />
								<p class="font13 margin-t1">红山六九七九商业中心(一期)</p>
								<p class="font11 f-color1">商铺，住宅，写字楼</p>
								<span></span>
							</router-link>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/图层34@2x.png" />
							<p class="font13 margin-t1">保利达小行星</p>
							<p class="font11 f-color1">商铺，住宅，写字楼</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">预售楼盘</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<img src="../assets/House/图层27@2x.png" />
								<p class="font13 margin-t1">红山六九七九商业中心(一期)</p>
								<p class="font11 f-color1">商铺，住宅，写字楼</p>
								<span></span>
							</router-link>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/图层34@2x.png" />
							<p class="font13 margin-t1">保利达小行星</p>
							<p class="font11 f-color1">商铺，住宅，写字楼</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<div class="swiper-container my-swiper">
				<div class="indexPage">
					<span v-text="activeIndex"></span>/<span v-text="slidesLength"></span>

				</div>
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/在这里，为你寻你一个如意之家@2x.png" />
							<span></span>
						</router-link>
					</div>
					<div class="swiper-slide">
						<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/在这里，为你寻你一个如意之家@2x.png" />
							<span></span>
						</router-link>
					</div>

				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">火爆楼盘</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<img src="../assets/House/图层31@2x.png" />
								<p class="font13 margin-t1">红山六九七九商业中心(一期)</p>
								<p class="font11 f-color1">商铺，住宅，写字楼</p>
								<span></span>
							</router-link>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/图层32@2x.png" />
							<p class="font13 margin-t1">保利达小行星</p>
							<p class="font11 f-color1">商铺，住宅，写字楼</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">火爆楼盘</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<img src="../assets/House/图层27@2x.png" />
								<p class="font13 margin-t1">红山六九七九商业中心(一期)</p>
								<p class="font11 f-color1">商铺，住宅，写字楼</p>
							</router-link>
							<span></span>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/图层34@2x.png" />
							<p class="font13 margin-t1">保利达小行星</p>
							<p class="font11 f-color1">商铺，住宅，写字楼</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-container my-swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/在这里，为你寻你一个如意之家@2x.png" />
						</router-link>
						<span></span>
					</div>
					<div class="swiper-slide">
						<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
							<img src="../assets/House/在这里，为你寻你一个如意之家@2x.png" />
						</router-link>
						<span></span>
					</div>
				</div>
			</div>
			<div class="container margin-t1">
				<div class="hous-content">
					<div class="swipe-title title-box padding">
						<h3 class="font15">精选房产</h3>
						<div class="clearfix">
							<span class="fl f-color1">各种玩法一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>
					<ul class="house-list">
						<li>
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<mt-cell>
									<h4 class="font14">深圳湾幸福之家 3房2厅</h4>
									<p class="house-address f-color1 font11">3室两厅|93㎡|高层|西北<br />南山-西丽-桃源村-万科</p>
									<p class="margin-tb">
										<span class="residence font9 mr">地铁</span>
										<span class="check font9 mr">随时看房</span>
										<span class="villa font9 mr">红本在手</span>

									</p>
									<p><span class="font13 f-color6">620万</span><span class="font10 margin-l1">59867/平米</span></p>
									<img slot="icon" src="../assets/Home/jxfc1@2x.png">
								</mt-cell>
							</router-link>
						</li>
						<li>
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<mt-cell>
									<h4 class="font14">深圳湾幸福之家 3房2厅</h4>
									<p class="house-address f-color1 font11">3室两厅|93㎡|高层|西北<br />南山-西丽-桃源村-万科</p>
									<p class="margin-tb">
										<span class="residence font9 mr">地铁</span>
										<span class="check font9 mr">随时看房</span>
										<span class="villa font9 mr">红本在手</span>

									</p>
									<p><span class="font13 f-color6">620万</span><span class="font10 margin-l1">59867/平米</span></p>
									<img slot="icon" src="../assets/Home/jxfc2@2x.png">
								</mt-cell>
							</router-link>
						</li>
						<li>
							<router-link :to="{path:'HouseDetails',query:{name:'House'}}">
								<mt-cell>
									<h4 class="font14">深圳湾幸福之家 3房2厅</h4>
									<p class="house-address f-color1 font11">3室两厅|93㎡|高层|西北<br />南山-西丽-桃源村-万科</p>
									<p class="margin-tb">
										<span class="residence font9 mr">地铁</span>
										<span class="check font9 mr">随时看房</span>
										<span class="villa font9 mr">红本在手</span>

									</p>
									<p><span class="font13 f-color6">620万</span><span class="font10 margin-l1">59867/平米</span></p>
									<img slot="icon" src="../assets/Home/jxfc3@2x.png">
								</mt-cell>
							</router-link>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<Taps :selected="selected" :tabs="tabs"></Taps>

	</div>
	<!--</div>-->
</template>
<script>
	import Header from './Header';
	import Taps from './Taps';
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name: 'House',
		data() {
			return {
				srcollMark: false,
				a: 1,
				selected: "House",
				tabs: [
					require("../assets/Home/首页@2x.png"),
					require("../assets/Home/活动@2x.png"),
					require("../assets/Home/房产选中@2x.png"),
					require("../assets/Home/家居@2x.png"),
					require("../assets/Home/我的@2x.png"),
				],
				bg: [
					require("../assets/House/组18@2x.png"),
				],
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
				if(scrollTop > 210) {
					this.srcollMark = true;
				} else {
					this.srcollMark = false;
				}
			},
			lunbo() {

				var swiper = new Swiper('.swiper-container.my-swiper', {
					pagination: '.swiper-container.my-swiper',
					slidesPerView: 'auto',
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30,
				});
				setInterval(() => {
					this.activeIndex = swiper[0].activeIndex + 1;
				}, 500)
				this.slidesLength = swiper[0].slides.length;

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
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll),
				this.lunbo()
			this.lunbo1()

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
	
	.swiper-slide img {
		display: block;
		/*width: 100%;*/
		height: 15rem;
	}
</style>

<style type="text/css">
	.house .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.house .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.house .hous-content .house-list img {
		width: 14rem;
	}
	
	.house .house-show .frist-title li {
		flex: 1;
	}
	
	.house .house-show .frist-title li img {
		display: block;
		width: 17.5rem;
	}
	
	.house .mint-cell-wrapper {
		padding: 1rem 0;
	}
	.house .residence {
		background-color: #d2cea0;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	.house .check {
		background-color: #a0c8d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.house .villa {
		background-color: #a8a0d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.house .margin-tab {
		margin-bottom: 60px;
	}
	
	.house .swipe-box {
		width: 100%;
		height: 28rem;
		/*background: url("images/banner.png") no-repeat;*/
		background-size: 100% 100%;
	}
	
	.house .swipe-box .swiper-container {
		/*width: 95%;*/
		padding-top: 0.5rem;
	}
	
	.house .swipe-box .swiper-container .swiper-wrapper {
		left: -2.2rem;
	}
	
	.house .swipe-box .swiper-slide {
		background-position: center;
		background-size: 130% 120%;
		width: 80%;
		/*height: 18rem;*/
	}
	
	.house .swipe-box .swiper-slide img {
		display: block;
		width: 100%;
		/*height: 15rem;*/
	}
	
	.house .swiper-container .indexPage {
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
	
	.house .swiper-container .indexPage span {
		padding: 2px 4px;
	}
	
	.house .swipe-box .swiper-button-next,
	.swiper-button-prev {
		top: 5rem;
		width: 10%;
		height: 7rem;
	}
	
	.house .m-r {
		margin-right: 0.5rem;
	}
	
	.house .m-t {
		margin-top: .5rem;
	}
	
	.house .bg-card {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.3);
		color: #FFFFFF;
		text-align: center;
	}
	
	.house .bg-card .title {
		margin-top: 20%;
	}
</style>