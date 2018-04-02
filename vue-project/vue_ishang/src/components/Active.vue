<template>
	<div class="Active">
		<!--<div class="page-content-wrapper">-->

		<div class="page-content" style="padding-bottom:80px;">
			<Header :srcollMark="srcollMark" :bg="bg" v-if="$route.path!=='/ActiveCotent'"></Header>
			<div class="container margin-t1">
				<div class="house-show">
					<ul class="title">
						<li class="font18 center-text font-weight">爱尚活动</li>
						<li class="font11 center-text f-color1 margin-b1">各种房产一网打尽</li>
					</ul>
					<ul class="frist-title flex">
						<li class="m-r posit-re">
							<router-link :to="{path:'ActiveCotent',query:{name:'Active'}}"><img src="../assets/Active/矩形5拷贝6@2x.png" alt="" />
								<section class="bg-card">
									<p class="font15 title">当前活动</p>
									<p class="font11"><span><i class="font13">C</i>RRENTR</span> <span>ACTMTY</span></p>
								</section>
							</router-link>
						</li>
						<li class="posit-re">
							<router-link to="/PastActive"><img src="../assets/Active/矩形5拷贝5@2x.png" alt="" />
							<section class="bg-card">
								<p class="font15 title">往期活动</p>
								<p class="font11"><span><i class="font13">P</i>ARST</span> <span>ACTMTY</span></p>
							</section>
							</router-link>
						</li>

					</ul>
				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">精选活动</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
								<img src="../assets/Active/图层20@2x.png" />
								<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
								<span></span>
							</router-link>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
								<img src="../assets/Active/图层24@2x.png" />
								<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
								<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">火爆活动</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
								<img src="../assets/Active/图层21@2x.png" />
								<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
							</router-link>
							<span></span>
						</div>
						<div class="swiper-slide">
							<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/图层25@2x.png" />
							<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<div class="swiper-container my-swiper">
				<div class="indexPage font11">
					<span v-text="activeIndex"></span>/<span v-text="slidesLength"></span>

				</div>
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/活动预选@2x.png" />
						</router-link>
						<span></span>
					</div>
					<div class="swiper-slide">
						<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/活动预选@2x.png" />
						</router-link>
						<span></span>
					</div>

				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">推荐活动</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
								<img src="../assets/Active/图层22@2x.png" />
								<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
								<span></span>
							</router-link>
						</div>
						<div class="swiper-slide">
						   <router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/图层26@2x.png" />
							<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swipe-box">
				<div class="swipe-title title-box padding">
					<h3 class="font15">看房活动</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							 <router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
								<img src="../assets/Active/图层23@2x.png" />
								<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
							</router-link>
							<span></span>
						</div>
						<div class="swiper-slide">
							 <router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/图层27@2x.png" />
							<p class="font13 margin-t1">优选 | 尚品宅配免费请你看海</p>
							<span></span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-container my-swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						 <router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/组19@2x.png" />
						
						<span></span>
						</router-link>
					</div>
					<div class="swiper-slide">
						 <router-link :to="{path:'ActiveDetails',query:{name:'Active'}}">
							<img src="../assets/Active/组19@2x.png" />
							<span></span>
						</router-link>
					</div>

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
		name: 'Active',
		data() {
			return {
				srcollMark: false,
				a: 1,
				selected: "Active",
				tabs: [
					require("../assets/Home/首页@2x.png"),
					require("../assets/Home/活动选中@2x.png"),
					require("../assets/Home/房产@2x.png"),
					require("../assets/Home/家居@2x.png"),
					require("../assets/Home/我的@2x.png"),
				],
				bg: [
					require("../assets/Active/banner@2x.png"),
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
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll),
				this.lunbo()
			this.lunbo1()

		},
//		beforeRouteLeave(to, from, next) {
//			//路由守卫销毁定时器
//			var setTimeClear= clearInterval(window.timeRefelsh);
//			if(setTimeClear) {
//				next()
//			} else {
//				next(false)
//			}
//		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import"../../static/style/swiper.min.css";
	.container {
		padding: 1rem;
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
		width: 100%;
		/*height: 4.5rem;*/
	}
</style>

<style type="text/css" scoped>
	.Active i {
		font-style: normal;
	}
	
	.Active .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.Active .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.Active .hous-content .house-list img {
		width: 14rem;
	}
	
	.Active .house-show .frist-title li {
		flex: 1;
	}
	
	.Active .house-show .frist-title li img {
		display: block;
		width:100%;
	}
	
	.Active .mint-cell-wrapper {
		padding: 1rem 0;
	}
	
	.Active .check {
		background-color: #a0c8d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.Active .villa {
		background-color: #a8a0d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.Active .margin-tab {
		margin-bottom: 60px;
	}
	
	.Active .swipe-box {
		width: 100%;
		height:24rem;
		/*background: url("images/banner.png") no-repeat;*/
		background-size: 100% 100%;
		margin: 1rem 0;
		padding:1rem 0;
	}
	
	.Active .swipe-box .swiper-container {
		/*width: 95%;*/
		padding-top: 1rem;
	}
	
	.Active .swipe-box .swiper-container .swiper-wrapper {
		margin-left:-6rem;
	}
	
     .Active .swipe-box .swiper-slide {
		background-position: center;
		background-size: 130% 120%;
		width:22.5rem;
		/*height: 18rem;*/
	}
	
	.Active .swipe-box .swiper-slide img {
		display: block;
		width: 100%;
		height: auto;
	}
	
	.Active .swiper-container .indexPage {
		width:3.3rem;
		height: 1.8rem;
		position: absolute;
		background: rgba(0, 0, 0, .3);
		right: 1rem;
		top: 1rem;
		border-radius: 50%;
		color: #FFFFFF;
		z-index: 9;
	}
	
	.Active .swiper-container .indexPage span {
		padding: 2px 4px;
	}
	
	.Active .swipe-box .swiper-button-next,
	.Active .swiper-button-prev {
		top: 5rem;
		width: 10%;
		height: 7rem;
	}
	
	.Active .m-r {
		margin-right: 0.5rem;
	}
	
	.Active .bg-card {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.3);
		color: #FFFFFF;
		text-align: center;
	}
	
	.Active .bg-card .title {
		margin-top: 20%;
	}
</style>