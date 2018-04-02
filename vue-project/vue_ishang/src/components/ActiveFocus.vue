<template>
	<div class="ActiveFocus">
		<mt-header fixed title="我关注的活动">
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
				<div class="container margin-t1">
					<div class="page1-cotent">
						<div class="hous-content ">
							<ul class="house-list">
								<li>
									<router-link :to="{path:'ActiveDetails',query:{name:'ActiveFocus',backs:'User'}}">
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
									</router-link>
								</li>
								<li>
									<router-link :to="{path:'ActiveDetails',query:{name:'ActiveFocus',backs:'User'}}">
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
									</router-link>
								</li>
								<li>
									<router-link :to="{path:'ActiveDetails',query:{name:'ActiveFocus',backs:'User'}}">
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
									</router-link >
								</li>

							</ul>
						</div>
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
	.ActiveFocus .mint-navbar .mint-tab-item-label {
		font-size: 1.5rem !important;
	}
	
	.ActiveFocus .mint-navbar .mint-tab-item {
		padding: 13px 0;
		margin-right: 1rem;
	}
	
	.ActiveFocus .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
		border-bottom: none;
	}
	
	.ActiveFocus .hous-content {
		margin-top: 44px;
	}
	
	.ActiveFocus .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.ActiveFocus .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.ActiveFocus .hous-content .house-list img {
		width: 14rem;
	}
	
	.ActiveFocus .mint-cell-wrapper {
		padding: 1rem 0;
	}
	
	.ActiveFocus .mint-header-title {
		font-size: 1.8rem;
	}
	.ActiveFocus .mint-cell-wrapper {
		padding: 1rem 0;
	}
	.ActiveFocus .mint-header-title{
		font-size:1.8rem;
	}
	.ActiveFocus .mint-navbar{
		margin-top:40px;
	}
	.ActiveFocus .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.ActiveFocus .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
	}
	
	.ActiveFocus .mint-navbar .mint-tab-item.is-selected {
		border-bottom: none;
	}
	.ActiveFocus .timeIcon{
		width:1rem !important;
	}
	.ActiveFocus  .addressIcon{
		
	  width:1rem !important;

	}
	.ActiveFocus .border{
		border:1px solid #999999;
		padding:.1rem .4rem;
	}
</style>