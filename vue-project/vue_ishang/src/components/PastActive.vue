<template>
	<div class="PastActive">
		<mt-header fixed title="往期活动">
			<router-link to="/Active" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
			<mt-tab-item id="4">选项三</mt-tab-item>
		</mt-navbar>
		<div class="swiper-container my-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/Active/广告@2x.png" />
					</a>
					<span></span>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../assets/Active/广告@2x.png" />
					</a>
					<span></span>
				</div>

			</div>
		</div>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="page1-cotent">
					<div class="hous-content padding">
						<ul class="house-list">
							<li>
								<a href="#">
									<mt-cell>
										<h4 class="font15">双旦狂欢碰上开放盛典</h4>
										<p class="house-address f-color1 font11 ellipsis">
											我们结合圣诞节与元旦节双旦来临 的契机,将深圳点优优先举行dsdsdcxdwadsssssssssssss
										</p>
										<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon"/>2018年02月10</p>
										<p class="font11"><img src="../assets/Active/定位@2x.png" class="addressIcon"/>深圳龙岗丹竹头时代广场</p>

										<p class="margin-tb">
											<span class="border font9 mr">地铁</span>
											<span class="border font9 mr">随时看房</span>
											<span class="border font9 mr">红本在手</span>

										</p>
										<div class="posit-ab tips"><img src="../assets/Active/已过期@2x.png" alt="" /></div>
										
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
										<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon"/>2018年02月10</p>
										<p class="font11"><img src="../assets/Active/定位@2x.png" class="addressIcon"/>深圳龙岗丹竹头时代广场</p>

										<p class="margin-tb">
											<span class="border font9 mr">地铁</span>
											<span class="border font9 mr">随时看房</span>
											<span class="border font9 mr">红本在手</span>

										</p>
										<div class="posit-ab tips"><img src="../assets/Active/已过期@2x.png" alt="" /></div>
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
										<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon"/>2018年02月10</p>
										<p class="font11"><img src="../assets/Active/定位@2x.png" class="addressIcon"/>深圳龙岗丹竹头时代广场</p>

										<p class="margin-tb">
											<span class="border font9 mr">地铁</span>
											<span class="border font9 mr">随时看房</span>
											<span class="border font9 mr">红本在手</span>

										</p>
										<div class="posit-ab tips"><img src="../assets/Active/已过期@2x.png" alt="" /></div>
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
			<mt-tab-container-item id="4">
				<mt-cell v-for="n in 8" :title="'选项 ' + n" :key="n.id" />
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name:"PastActive",
		data() {
			return {
				selected: '1',
				n: 1,
			}
		},
		methods: {
			lunbo() {

				var swiper = new Swiper('.swiper-container.my-swiper', {
					pagination: '.swiper-container.my-swiper',
					slidesPerView: 'auto',
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30,
				});
			},
		},
		mounted() {
			this.lunbo()
		}
	}
</script>

<style scoped>
	@import"../../static/style/swiper.min.css";
	.mint-header {
		color: #333333;
		background: #F6F6F6;
		z-index: 99;
	}
	
	.mint-header .mint-header-title {
		font-size: 1.8rem;
	}
	
	.swiper-container .swiper-slide {
		/*height:10rem;*/
	}
	
	.swiper-container .swiper-slide img {
		/*height:100%;*/
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
	.PastActive .mint-cell-wrapper {
		padding: 1rem 0;
	}
	.PastActive .mint-header-title{
		font-size:1.8rem;
	}
	.PastActive .mint-navbar{
		margin-top:40px;
	}
	.PastActive .hous-content .house-list .mint-cell-value {
		display: block !important;
		    position: relative;
	}
	
	.PastActive .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
	}
	
	.PastActive .mint-navbar .mint-tab-item.is-selected {
		border-bottom: none;
	}
	.PastActive .timeIcon{
		width:1rem !important;
	}
	.PastActive .addressIcon{
		
	  width:1rem !important;

	}
	.PastActive .border{
		border:1px solid #999999;
		padding:.1rem .4rem;
	}
	.PastActive .tips{
		top:0;
		right:0;
	}
	.PastActive .tips img{
		width:6rem !important;
	}
</style>