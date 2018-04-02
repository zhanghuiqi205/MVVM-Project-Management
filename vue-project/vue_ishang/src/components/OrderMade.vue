<template>
	<div class="OrderMade">
		<!--<div class="page-content-wrapper" id="wrapper">-->
		<mt-header fixed title="全屋定制">
			<router-link to="/HomeDesign" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="page-content">
			<div class="top-box posit-re">
			</div>
			<div class="container margin-t1">
				<div class="user-attent">
					<ul class=" flex padd-tb">
						<li>
							<router-link :to="{path:'OrderMadeList',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/HomeDesign/全屋.png" />
								<p>全屋定制</p>
							</router-link>
						</li>
						<li>
							<!--<router-link to="/WantRent">-->
							<img src="../assets/HomeDesign/高背沙发@2x.png" />
							<p>客餐厅定制</p>
							<!--</router-link>-->
						</li>
						<li>
							<!--<router-link to="/Assessment">-->
							<img src="../assets/HomeDesign/面食@2x.png" />
							<p>厨房定制</p>
							<!--</router-link>-->
						</li>
						<li>
							<img src="../assets/HomeDesign/书桌@2x.png" />
							<p>书房定制</p>
						</li>
					</ul>
					<ul class=" flex padd-tb">
						<li>
							<!--<router-link to="/SellHouse">-->
							<img src="../assets/HomeDesign/卫生间@2x.png" />
							<p>浴室定制</p>
							<!--</router-link>-->
						</li>
						<li>
							<!--<router-link to="/WantRent">-->
							<img src="../assets/HomeDesign/儿童-线性@2x.png" />
							<p>儿童房定制</p>
							<!--</router-link>-->
						</li>
						<li>
							<!--<router-link to="/SellHouse">-->
							<img src="../assets/HomeDesign/床@2x.png" />
							<p>卧室定制</p>
							<!--</router-link>-->
						</li>
						<li>
							<img src="../assets/HomeDesign/分类@2x.png" />
							<p>功能定制</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="top-box posit-re">
				<mt-button size="small">立即申请</mt-button>
			</div>
			<div class="swiper-container my-swiper">
				<div class="swipe-title title-box padding">
					<h3 class="font15">明星设计师</h3>
					<div class="clearfix">
						<span class="fl f-color1">明星设计师一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
			</div>
			<div class="container margin-t1">
				<ul class="housdesign-list active-list">
					<li class="flex">
						<div class="posit-re bg-color ">
							<router-link :to="{path:'DesignerDtails',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/Designs/图层569@2x.png" />
								<div class="text  padding">
									<p class="font12 f-color1"><span class="font14 f-color0">依米</span> 首席设计师</p>
									<div class="marks">
										<ul class="flex font11">
											<li class="flex1">
												<img src="../assets/HomeDesign/工作经验@2x.png" class="icon v-align" />
												<span class="v-align">6年</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/关注@2x.png" class="icon v-align" />
												<span class="v-align">233</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/设计@2x.png" class="icon v-align" />
												<span class="v-align">35</span>
											</li>

										</ul>
									</div>
								</div>
							</router-link>
						</div>
						<div class="posit-re bg-color ">
							<router-link :to="{path:'DesignerDtails',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/Designs/图层570@2x.png" />
								<div class="text  padding">
									<p class="font12 f-color1"><span class="font14 f-color0">依米</span> 首席设计师</p>
									<div class="marks">
										<ul class="flex font11">
											<li class="flex1">
												<img src="../assets/HomeDesign/工作经验@2x.png" class="icon v-align" />
												<span class="v-align">6年</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/关注@2x.png" class="icon v-align" />
												<span class="v-align">233</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/设计@2x.png" class="icon v-align" />
												<span class="v-align">35</span>
											</li>

										</ul>
									</div>
								</div>
							</router-link>
						</div>

					</li>
					<li class="flex">
						<div class="posit-re bg-color ">
							<router-link :to="{path:'DesignerDtails',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/Designs/图层571@2x.png" />
								<div class="text  padding">
									<p class="font12 f-color1"><span class="font14 f-color0">依米</span> 首席设计师</p>
									<div class="marks">
										<ul class="flex font11">
											<li class="flex1">
												<img src="../assets/HomeDesign/工作经验@2x.png" class="icon v-align" />
												<span class="v-align">6年</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/关注@2x.png" class="icon v-align" />
												<span class="v-align">233</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/设计@2x.png" class="icon v-align" />
												<span class="v-align">35</span>
											</li>

										</ul>
									</div>
								</div>
							</router-link>
						</div>
						<div class="posit-re bg-color ">
							<router-link :to="{path:'DesignerDtails',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/Designs/图层572@2x.png" />
								<div class="text  padding">
									<p class="font12 f-color1"><span class="font14 f-color0">依米</span> 首席设计师</p>
									<div class="marks">
										<ul class="flex font11">
											<li class="flex1">
												<img src="../assets/HomeDesign/工作经验@2x.png" class="icon v-align" />
												<span class="v-align">6年</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/关注@2x.png" class="icon v-align" />
												<span class="v-align">233</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/设计@2x.png" class="icon v-align" />
												<span class="v-align">35</span>
											</li>

										</ul>
									</div>
								</div>
							</router-link>
						</div>

					</li>
					<li class="flex">
						<div class="posit-re bg-color ">
							<router-link :to="{path:'DesignerDtails',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/Designs/图层573@2x.png" />
								<div class="text  padding">
									<p class="font12 f-color1"><span class="font14 f-color0">依米</span> 首席设计师</p>
									<div class="marks">
										<ul class="flex font11">
											<li class="flex1">
												<img src="../assets/HomeDesign/工作经验@2x.png" class="icon v-align" />
												<span class="v-align">6年</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/关注@2x.png" class="icon v-align" />
												<span class="v-align">233</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/设计@2x.png" class="icon v-align" />
												<span class="v-align">35</span>
											</li>

										</ul>
									</div>
								</div>
							</router-link>
						</div>
						<div class="posit-re bg-color ">
							<router-link :to="{path:'DesignerDtails',query:{name:'OrderMade',backs:'HomeDesign'}}">
								<img src="../assets/Designs/图层574@2x.png" />
								<div class="text  padding">
									<p class="font12 f-color1"><span class="font14 f-color0">依米</span> 首席设计师</p>
									<div class="marks">
										<ul class="flex font11">
											<li class="flex1">
												<img src="../assets/HomeDesign/工作经验@2x.png" class="icon v-align" />
												<span class="v-align">6年</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/关注@2x.png" class="icon v-align" />
												<span class="v-align">233</span>
											</li>
											<li class="flex1">
												<img src="../assets/HomeDesign/设计@2x.png" class="icon v-align" />
												<span class="v-align">35</span>
											</li>

										</ul>
									</div>
								</div>
							</router-link>
						</div>

					</li>

				</ul>
			</div>
		</div>

		<!--</div>-->
	</div>
</template>
<script>
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name: 'OrderMade',
		data() {
			return {
				h: '260',
				srcollMark: false,
				a: 1,
			}
		},
		components: {},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
				}, 1000);
			},
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
				that.back = that.$route.query.name;
				that.backs = that.$route.query.backs; //方便父级路由返回
			},
		},
		mounted() {
			this.lunbo(),
				this.backData()
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import"../../static/style/swiper.min.css";
	.mint-header {
		background-color: #f6f6f6;
		color: #333333;
	}
	
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
	
	.user-attent .flex li {
		flex: 1;
		text-align: center;
	}
	
	.user-attent .flex li img {
		width: 4rem;
	}
	
	.page-content .marks li.flex1 {
		margin-right: .5rem;
	}
	
	.page-content .marks li.flex1:last-child {
		margin-right: 0;
	}
	/*.page-content  .marks li.flex1>div{
		display: inline-block;
		width: auto !important;
	}*/
	
	.page-content .marks li.flex1 .icon {
		display: inline-block;
		width: 1.1rem;
		/*height: 1.2rem;*/
	}
</style>
<style type="text/css">
	.OrderMade .top-box {
		height: 100px;
		width: auto;
		background: url(../assets/HomeDesign/现在预约领取200元现金券@2x.png) no-repeat;
		background-size: cover;
		background-position: center center;
	}
	
	.OrderMade .top-box .mint-button {
		position: absolute;
		right: 6rem;
		bottom: 3rem;
		background-color: #09C66C;
		color: #FFFFFF;
	}
	
	.OrderMade .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.OrderMade .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.OrderMade .hous-content .house-list img {
		width: 14rem;
	}
	
	.OrderMade .page-content {
		margin: 5rem 0;
	}
	
	.OrderMade .page-content-wrapper {
		position: relative;
		padding-bottom: 1rem;
		margin-bottom: 5.6rem;
		background-color: transparent;
		overflow: auto;
		height: 60rem;
	}
	
	.OrderMade .mint-cell-wrapper {
		padding: 1rem 0;
	}
	
	.OrderMade .housdesign-list li>div {
		flex: 1;
		width: 50%;
	}
	
	.OrderMade .housdesign-list.design li.flex {
		margin-bottom: 1rem;
	}
	
	.OrderMade .housdesign-list.design li.flex>div:nth-child(2n) {
		margin-left: 1rem;
	}
	
	.OrderMade .housdesign-list.active-list li.flex>div {
		/*border: 1px solid #f1f1f1;*/
		margin-top: .4rem;
		height: 90%;
	}
	
	.OrderMade .housdesign-list.active-list li.flex>div:nth-child(2n) {
		margin-left: .4rem;
	}
	
	.OrderMade .housdesign-list li div img {
		display: block;
		width: 100%;
	}
	
	.OrderMade .housdesign-list .pro-title {
		bottom: 32%;
		font-size: 1.1rem;
		flood-color: #666666;
		left: 7%;
	}
	
	.OrderMade .housdesign-list .text .activety {
		background-color: #b70709;
		color: #FFFFFF;
		padding: 0.2rem 1rem;
	}
	
	.OrderMade .banner .mint-swipe-item img {
		width: 100%;
		display: block;
	}
	
	.OrderMade .height {
		height: 100%;
	}
	
	.OrderMade .mint-header-title {
		font-size: 1.6rem !important;
	}
	
	.OrderMade .m-r {
		margin-right: 0.5rem;
	}
</style>