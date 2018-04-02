<template>
	<div class="HomeDesignFocus">
		<mt-header fixed title="我关注的家居">
			<router-link :to="{path:back}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<!--<mt-navbar v-model="selected">
			<mt-tab-item id="1">新房</mt-tab-item>
			<mt-tab-item id="2">二手房</mt-tab-item>
			<mt-tab-item id="3">租房</mt-tab-item>
		</mt-navbar>-->

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="container margin-t1 margin-tab">
				<ul class="housdesign-list active-list">
					<li class="flex">
						<div class="posit-re ">
						<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesignFocus',backs:'User'}}">
							<img src="../assets/Home/jjyp1@2x.png" />
							<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
							<div class="text bg-color1 padding">
								<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
								<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
							</div>
						</router-link>
						</div>
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesignFocus',backs:'User'}}">
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
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesignFocus',backs:'User'}}">
							<img src="../assets/Home/jjyp3@2x.png" />
							<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
							<div class="text bg-color1 padding">
								<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
								<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
							</div>
							</router-link>
						</div>
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'HomeDesignFocus',backs:'User'}}">
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
				if(!that.$route.query.backs){					
					that.back = that.$route.query.name;
				}else{
					that.back = that.$route.query.backs;
				}
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
		z-index: 999;
		width: 100%;
		position: fixed;
		margin-top: 40px;
		background: #FFFFFF;
	}
	
	.container {
		padding: 0 1rem;
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
	.hous-content .house-list .house-address {
		line-height: 1.4rem;
		width:13rem;
		height:2.7rem;
	}
	
	.hous-content .house-list img {
		width: 14rem;
	}
</style>
<style type="text/css">	
	.HomeDesignFocus .mint-header-title {
		font-size: 1.8rem;
	}
	
	.HomeDesignFocus .mint-header-title{
		font-size:1.8rem;
	}
	.HomeDesignFocus .housdesign-list{
		margin-top:44px;
	}
	.HomeDesignFocus .housdesign-list li>div {
		flex: 1;
		width: 50%;
	}
	
	.HomeDesignFocus .housdesign-list.design li {
		margin-bottom: 1rem;
	}
	
	.HomeDesignFocus .housdesign-list.design li>div:nth-child(2n) {
		margin-left: 1rem;
	}
	
	.HomeDesignFocus .housdesign-list.active-list li>div {
		border: 1px solid #f1f1f1;
		margin-top: .4rem;
	}
	
	.HomeDesignFocus .housdesign-list.active-list li>div:nth-child(2n) {
		margin-left: .4rem;
	}
	
	.HomeDesignFocus .housdesign-list li div img {
		display: block;
		width: 100%;
	}
	
	.HomeDesignFocus .housdesign-list .pro-title {
		bottom: 32%;
		font-size: 1.1rem;
		flood-color: #666666;
		left: 7%;
	}
	
	.HomeDesignFocus .housdesign-list .text .price {
		font-size: 1.4rem;
		color: #b70709;
	}
	
	.HomeDesignFocus .housdesign-list .text .activety {
		background-color: #b70709;
		color: #FFFFFF;
		padding: 0.2rem 1rem;
	}
</style>