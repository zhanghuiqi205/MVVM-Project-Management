<template>
	<div class="ActiveCotent">
		<mt-header fixed title="当前活动">
			<router-link :to="{path:back}"slot="left">
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
								<router-link :to="{path:'ActiveDetails',query:{name:'ActiveCotent',backs:'Active'}}">
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
										
										<img slot="icon" src="../assets/Active/矩形5拷贝000@2x.png">
									</mt-cell>
								</router-link>
							</li>
							<li>
								<router-link :to="{path:'ActiveDetails',query:{name:'ActiveCotent',backs:'Active'}}">
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
										
										<img slot="icon" src="../assets/Active/矩形5拷贝00@2x.png">
									</mt-cell>
								</router-link>
							</li>
							<li>
								<router-link :to="{path:'ActiveDetails',query:{name:'ActiveCotent',backs:'Active'}}">
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
										
										<img slot="icon" src="../assets/Active/矩形5拷贝2@2x.png">
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
			<mt-tab-container-item id="4">
				<mt-cell v-for="n in 8" :title="'选项 ' + n" :key="n.id" />
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name:"ActiveCotent",
		data() {
			return {
				selected: '1',
				n: 1,
				back:'',
				backs:'',
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
	.ActiveCotent .mint-cell-wrapper {
		padding: 1rem 0;
	}
	.ActiveCotent .mint-header-title{
		font-size:1.8rem;
	}
	.ActiveCotent .mint-navbar{
		margin-top:40px;
	}
	.ActiveCotent .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.ActiveCotent .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
	}
	
	.ActiveCotent .mint-navbar .mint-tab-item.is-selected {
		border-bottom: none;
	}
	.ActiveCotent .timeIcon{
		width:1rem !important;
	}
	.ActiveCotent  .addressIcon{
		
	  width:1rem !important;

	}
	.ActiveCotent .border{
		border:1px solid #999999;
		padding:.1rem .4rem;
	}
</style>