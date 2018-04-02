<template>
	<div class="NewHouse">
		<header>
			<div class="head-box">
				<div class=" ">
					<div class="posit-re" style="height:50px;">
						
					<router-link :to="{path:back}" slot="left">
						<mt-button icon="back"></mt-button>
					</router-link>
					<a class="position"><img src="../assets/House/定位@2x.png" /></a>
					<div class="search-box posit-re">
					<img class="posit-ab" src="../assets/House/search.png" />	
					<input type="text" id="" placeholder="请输入楼盘或小区名称" />
					</div>
					</div>
					<ul class="flex padding font14">
						<li>区域<i class="triangle-down"></i></li>
						<li>价格<i class="triangle-down"></i></li>
						<li>户型<i class="triangle-down"></i></li>
						<li>更多<i class="triangle-down"></i></li>
					</ul>
					<ul class="choice-list padding">
						<li>住宅 <i>X</i></li>
					</ul>
				</div>
			</div>
		</header>
		<!--<mt-navbar v-model="selected">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
			<mt-tab-item id="4">选项三</mt-tab-item>
		</mt-navbar>-->
		<div class="container">

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
			<div class="page1-cotent">
				<div class="hous-content padding">
					<ul class="house-list">
						<li>
								<router-link :to="{path:'HouseDetails',query:{name:'NewHouse',backs:'House'}}">
								<mt-cell>
									<p class="clearfix">
										<span class="font15 fl house-name">深圳湾幸福之家</span> <span class="tips fr font10">在售</span>
									</p>
									<p class="font11 mid"><img src="../assets/Active/时间@2x.png" class="timeIcon" />3房2厅[118㎡], 2房2厅[98㎡]</p>
									<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon" />2018年02月10</p>
									<p class="font11 mid"><img src="../assets/Active/定位@2x.png" class="addressIcon" />深圳龙岗丹竹头时代广场</p>

									<p class="">
										<span class="border font9 mr">地铁</span>
										<span class="border font9 mr">随时看房</span>
										<span class="border font9 mr">红本在手</span>

									</p>
									<p class="price">40000元/平米</p>
									<img slot="icon" src="../assets/House/图层30@2x.png">
								</mt-cell>
							</router-link>
						</li>
						<li>
							<router-link :to="{path:'HouseDetails',query:{name:'NewHouse',backs:'House'}}">
								<mt-cell>
									<p class="clearfix">
										<span class="font15 fl house-name">深圳湾幸福之家</span> <span class="tips fr font10">在售</span>
									</p>
									<p class="font11 mid"><img src="../assets/Active/时间@2x.png" class="timeIcon" />3房2厅[118㎡], 2房2厅[98㎡]</p>
									<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon" />2018年02月10</p>
									<p class="font11 mid"><img src="../assets/Active/定位@2x.png" class="addressIcon" />深圳龙岗丹竹头时代广场</p>

									<p class="">
										<span class="border font9 mr">地铁</span>
										<span class="border font9 mr">随时看房</span>
										<span class="border font9 mr">红本在手</span>

									</p>
									<p class="price">40000元/平米</p>

									<img slot="icon" src="../assets/House/图层29@2x.png">
								</mt-cell>
							</router-link>
						</li>
						<li>
							<router-link :to="{path:'HouseDetails',query:{name:'NewHouse',backs:'House'}}">
								<mt-cell>
									<p class="clearfix">
										<span class="font15 fl house-name">深圳湾幸福之家</span> <span class="tips fr font10">在售</span>
									</p>
									<p class="font11 mid"><img src="../assets/Active/时间@2x.png" class="timeIcon" />3房2厅[118㎡], 2房2厅[98㎡]</p>
									<p class="font11"><img src="../assets/Active/时间@2x.png" class="timeIcon" />2018年02月10</p>
									<p class="font11 mid"><img src="../assets/Active/定位@2x.png" class="addressIcon" />深圳龙岗丹竹头时代广场</p>

									<p class="">
										<span class="border font9 mr">地铁</span>
										<span class="border font9 mr">随时看房</span>
										<span class="border font9 mr">红本在手</span>

									</p>
									<p class="price">40000元/平米</p>
									<img slot="icon" src="../assets/House/图层28@2x.png">
								</mt-cell>
							</router-link>
						</li>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		data() {
			return {
				selected: '1',
				n: 1,
				value: '',
				back:'',
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
		width: 13rem;
		height: 2.7rem;
	}
	
	.hous-content .house-list img {
		width: 13rem;
	}
</style>
<style type="text/css">
	.NewHouse .mint-cell-wrapper {
		padding: 1rem 0;
	}
	
	.NewHouse .mint-header-title {
		font-size: 1.8rem;
	}
	/*.mint-navbar{
		margin-top:40px;
	}*/
	
	.NewHouse .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.NewHouse .mint-navbar .mint-tab-item.is-selected {
		color: #09C66C!important;
	}
	
	.NewHouse .mint-navbar .mint-tab-item.is-selected {
		border-bottom: none;
	}
	
	.NewHouse .mint-cell-value .mid {
		margin: .4rem 0;
	}
	
	.NewHouse .mint-cell-value .price {
		margin-top: .8rem;
		font-size: 1.3rem;
		color: #e53d3d;
		font-weight: bold;
	}
	
	.NewHouse .mint-cell-value .house-name {
		margin-top: 2px;
	}
	
	.NewHouse .timeIcon {
		width: 1rem !important;
	}
	
    .NewHouse .addressIcon {
		width: 1rem !important;
	}
	
	.NewHouse .border {
		border: 1px solid #999999;
		padding: .1rem .4rem;
	}
	
	.NewHouse header {
		height: 140px;
		/*position: fixed;*/
		z-index: 99;
	}
	
	.NewHouse header .head-box {
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		z-index: 99;
	}
	.NewHouse header .search-box{
		    float: right;
   			 width: 78%;
   			 /*padding-top:1rem;*/
	}
	.NewHouse header .search-box img{
	 top: 18px;
    width: 1.2rem;
    left: 2px;
	 }
	.NewHouse header .head-box .flex {
		border-bottom: 1px solid #e6e6e6;
	}
	
	.NewHouse header .head-box .flex li {
		flex: 1;
		text-align: center;
	}
	
	.NewHouse header .mint-button--default {
		box-shadow: none;
		background-color: #FFFFFF;
	}
	
	.NewHouse header input {
		background-color: #f6f8fa;
		height: 28px;
		width: 90%;
		border: none;
		margin-top:10px;
	}
	.NewHouse header input::-webkit-input-placeholder{
		text-indent:1.4rem;
		/*color:#007AFF;*/
	}
	.NewHouse header .position {
		float: right;
		margin-top:1rem;
		margin-right:10px;
	}
	
	.NewHouse header .position img {
		width: 16px;
	}
	
	.NewHouse header .choice-list {
		display: -webkit-box;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
	}
	
	.NewHouse header .choice-list::-webkit-scrollbar {
		display: none;
	}
	
	.NewHouse header .choice-list li {
		background-color: #eeeeee;
		padding: 2px 7px;
		margin-left: 6px;
	}
	
	.NewHouse .triangle-down {
		width: 0;
		height: 0;
		margin-bottom: 1px;
		display: inline-block;
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 6px solid #c6c6c6;
	}
	
	.NewHouse .tips {
		background-color: #09C66C;
		color: #fff;
		padding: 3px 4px;
	}
</style>