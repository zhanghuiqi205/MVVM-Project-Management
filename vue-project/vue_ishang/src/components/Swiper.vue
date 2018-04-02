<template>
	<div class="index">
		<header>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link :to="{path:'ActiveCotent',query:{name:'Home'}}"><img src="../assets/Home/jchd1@2x.png"></router-link>
						<span></span>
					</div>
					<div class="swiper-slide">
						<router-link :to="{path:'ActiveCotent',query:{name:'Home'}}"><img src="../assets/Home/jchd1@2x.png"></router-link>
						<span></span>
					</div>
					<div class="swiper-slide">
						<router-link :to="{path:'ActiveCotent',query:{name:'Home'}}"><img src="../assets/Home/jchd1@2x.png"></router-link>
						<span></span>
					</div>

				</div>
			</div>
		</header>
	</div>
</template>
<script>
	import Swiper from '../../static/js/swiper.min.js'
	let galleryTop
	let galleryThumbs
	export default {
		props: ["aaa"],
		name: 'Swiper',
		data() {
			return {
				a: ""
			}
		},
		created() {
			this.$nextTick(() => {
				setInterval(() => {}, 1000)
			})
		},
		methods: {
			lunbo() {
				var swiper = new Swiper('.swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					effect: 'slide',
					grabCursor: true,
					centeredSlides: true,
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					slidesPerView: 'auto',
					spaceBetween: 10,
					coverflow: {
						rotate: 0, // 旋转的角度  
						stretch: 0, // 拉伸   图片间左右的间距和密集度  
						depth: 0, // 深度   切换图片间上下的间距和密集度  
						modifier:0, // 修正值 该值越大前面的效果越明显  
						slideShadows: false // 页面阴影效果  
					}
				});
				console.log(swiper.activeIndex)
			}
		},
		mounted() {
			this.lunbo()
		},
	}
</script>

<style scoped>
	@import"../../static/style/swiper.min.css";
	body,
	html {
		min-width: 320px;
		max-width: 750px;
		height: 100%;
	}
	
	header {
		width: 100%;
		/*height:5.17rem;*/
		/*background: url("images/banner.png") no-repeat;*/
		background-size: 100% 100%;
	}
	
	header .swiper-container {
		width: 95%;
		padding-top: 0.5rem;
	}
	
	header .swiper-slide {
		background-position: center;
		background-size: 130% 120%;
		width: 60%;
		height: 17.5rem;
	}
	
	header .swiper-slide img {
		display: block;
		width: 100%;
		/*height: 17.5rem;*/
	}
	
	header .swiper-button-next,
	.swiper-button-prev {
		top: 5rem;
		width: 10%;
		height: 0.93rem;
	}
	
	header .swiper-container .swiper-wrapper .swiper-slide-prev img {
		height:10rem!important;
		margin-top:1rem;
	}
	
	header .swiper-container .swiper-wrapper .swiper-slide-next img {
		height:10rem!important;
		margin-top:1rem;
	}
</style>