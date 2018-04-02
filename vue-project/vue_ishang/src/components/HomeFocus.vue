<template>
	<div class="HomeFocus">
		<mt-header fixed title="我关注的房产">
			<router-link :to="{path:back}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">新房</mt-tab-item>
			<mt-tab-item id="2">二手房</mt-tab-item>
			<mt-tab-item id="3">租房</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
			  	<div class="container margin-t1">
				<div class="hous-content">
					<!--<div class="swipe-title title-box padding">
						<h3 class="font15">精选房产</h3>
						<div class="clearfix">
							<span class="fl f-color1">各种玩法一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>-->
					<ul class="house-list">
						<li>
							<router-link :to="{path:'HouseDetails',query:{name:'HomeFocus',backs:'User'}}">
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
							<router-link :to="{path:'HouseDetails',query:{name:'HomeFocus',backs:'User'}}">
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
							<router-link :to="{path:'HouseDetails',query:{name:'HomeFocus',backs:'User'}}">
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
				 if(!that.$route.query.backs){					
					that.back = that.$route.query.name;
				}else{
					that.back = that.$route.query.backs;
				};
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
		width:100%;
		position: fixed;
		margin-top:40px;
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
	.img-show img{
		width:100%;
	}
</style>
<style type="text/css">
	.HomeFocus .mint-navbar .mint-tab-item-label {
		font-size: 1.5rem !important;
	}
	
	.HomeFocus .mint-navbar .mint-tab-item {
		padding: 13px 0;
		margin-right: 1rem;
	}
	
	.HomeFocus .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
		border-bottom:none;
	}
	.HomeFocus .hous-content{
		margin-top:90px;
	}
	.HomeFocus .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.HomeFocus .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.HomeFocus .hous-content .house-list img {
		width: 14rem;
	}
	.HomeFocus .mint-cell-wrapper {
		padding: 1rem 0;
	}
	.HomeFocus .mint-header-title{
		font-size:1.8rem;
	}
	

</style>