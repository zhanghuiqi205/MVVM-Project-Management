<template>
	<div class="home">
		<!--<div class="page-content-wrapper" id="wrapper">-->

		<div class="page-content">
			<Header :srcollMark="srcollMark" :bg="bg"></Header>
			<div class="container margin-t1">

				<div class="grid-box">
					<div class="grid-container">
						<div class="grid-list clearfix bg-color1 padding margin-r1">
							<router-link :to="{path:'ActiveCotent',query:{name:'Home'}}">
								<img src="../assets/Home/rmhd@2x.png" width="48" class="fr">
								<ul class="fl">
									<li class="title font13 margin-b0 font-weight">热门活动</li>
									<li class="title-text font11 f-color1">游玩,团建,看房</li>
								</ul>
							</router-link>
						</div>
						<div class="grid-list clearfix bg-color1 padding ">
							<router-link :to="{path:'House',query:{name:'Home'}}">
								<img src="../assets/Home/fcjy@2x.png" width="48" class="fr">
								<ul class="fl">
									<li class="title font13 margin-b0 font-weight">房产交易</li>
									<li class="title-text font11 f-color1">新房,二手房,租房</li>
								</ul>
							</router-link>
						</div>
					</div>
					<div class="grid-container margin-t1">
						<div class="grid-list clearfix bg-color1 padding margin-r1">
							<router-link :to="{path:'Quality',query:{name:'Home'}}">
								<img src="../assets/Home/jjyp@2x.png" width="48" class="fr">
								<ul class="fl">
									<li class="title font13 margin-b0 font-weight">家居用品</li>
									<li class="title-text font11 f-color1">单间,全屋,定制</li>
								</ul>
							</router-link>
						</div>
						<div class="grid-list clearfix bg-color1 padding ">
							<router-link :to="{path:'HouseOwner',query:{name:'Home'}}">
								<img src="../assets/Home/yz@2x.png" width="48" class="fr">
								<ul class="fl">
									<li class="title font13 margin-b0 font-weight">业主委托</li>
									<li class="title-text font11 f-color1">专业客服为您服务</li>
								</ul>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="swipe-box translate">
				<div class="swipe-title padding">
					<h3 class="font15">精彩活动</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
				<!--<div style="height:200px;" :auto="0">
					</div>-->
			</div>
			<Swiper></Swiper>
			<div class="container margin-t1">
				<div class="swipe-box">
					<div class="swipe-title title-box padd-tb">
						<h3 class="font15">家居设计</h3>
						<div class="clearfix">
							<span class="fl f-color1">各种玩法一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>
					<mt-swipe style="height:200px;" :auto="0">
						<mt-swipe-item>
							<router-link :to="{path:'Quality',query:{name:'Home'}}">
								<img src="../assets/Home/jjsj1@2x.png" />
							</router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<router-link :to="{path:'Quality',query:{name:'Home'}}">
								<img src="../assets/Home/jjsj1@2x.png" />
							</router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<router-link :to="{path:'Quality',query:{name:'Home'}}">
								<img src="../assets/Home/jjsj1@2x.png" />
							</router-link>
						</mt-swipe-item>

					</mt-swipe>
				</div>
				<div class="hous-content">
					<div class="swipe-title title-box padd-tb">
						<h3 class="font15">精选房产</h3>
						<div class="clearfix">
							<span class="fl f-color1">各种玩法一网打尽</span>
							<a class="fr f-color1">READ MORE >></a>
						</div>
					</div>
					<ul class="house-list">
						<li>
							<router-link :to="{path:'NewHouse',query:{name:'Home'}}">
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
							<router-link :to="{path:'NewHouse',query:{name:'Home'}}">
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
							<router-link :to="{path:'NewHouse',query:{name:'Home'}}">
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
			<div class="container margin-t1">
				<div class="swipe-title title-box padd-tb">
					<h3 class="font15">家居用品</h3>
					<div class="clearfix">
						<span class="fl f-color1">各种玩法一网打尽</span>
						<a class="fr f-color1">READ MORE >></a>
					</div>
				</div>
			</div>
			<mt-swipe style="height:200px;" :auto="0" class="banner">
				<mt-swipe-item>
					<img src="../assets/Home/banner2@2x.png" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/Home/banner2@2x.png" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/Home/banner2@2x.png" />
				</mt-swipe-item>

			</mt-swipe>
			<div class="container margin-t1 margin-tab">
				<ul class="housdesign-list active-list">
					<li class="flex">
						<div class="posit-re ">
						<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">
							<img src="../assets/Home/jjyp1@2x.png" />
							<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
							<div class="text bg-color1 padding">
								<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
								<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
							</div>
						</router-link>
						</div>
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">
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
							<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">
							<img src="../assets/Home/jjyp3@2x.png" />
							<p class="posit-ab pro-title ">8H美式简约独立弹布艺沙发</p>
							<div class="text bg-color1 padding">
								<h3 class="margin-b1 font14">独立袋装弹详布艺沙发</h3>
								<span><span class="price">&#165 1299</span>起</span><span class="activety margin-l1">活动</span>
							</div>
							</router-link>
						</div>
						<div class="posit-re ">
							<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">
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
		</div>
		<Taps :selected="selected" :tabs="tabs"></Taps>

		<!--</div>-->
	</div>
</template>
<script>
	import Header from './Header';
	import Taps from './Taps';
	import Swiper from './Swiper';

	export default {
		name: 'Home',
		data() {
			return {
				h: '260',
				srcollMark: false,
				a: 1,
				selected: "Home",
				tabs: [
					require("../assets/Home/首页选中@2x.png"),
					require("../assets/Home/活动@2x.png"),
					require("../assets/Home/房产@2x.png"),
					require("../assets/Home/家居@2x.png"),
					require("../assets/Home/我的@2x.png"),
				],
				bg: [require('../assets/Home/banner1@2x.png')],
				qw: '2333',
			}
		},
		components: {
			Header,
			Taps,
			Swiper,
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

				//				console.log(scrollTop)
				if(scrollTop > 210) {
					this.srcollMark = true;
					//					console.log(this.srcollMark)
				} else {
					this.srcollMark = false;
				}
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
<style type="text/css">
	.home .hous-content .house-list .mint-cell-value {
		display: block !important;
	}
	
	.home .hous-content .house-list .house-address {
		line-height: 1.6rem;
	}
	
	.home .hous-content .house-list img {
		width: 14rem;
	}
	
	.home .page-content {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	
	.home .page-content-wrapper {
		position: relative;
		padding-bottom: 1rem;
		margin-bottom: 5.6rem;
		background-color: transparent;
		overflow: auto;
		height: 60rem;
	}
	
	.home .mint-cell-wrapper {
		padding: 1rem 0;
	}
	
	.home .housdesign-list li>div {
		flex: 1;
		width: 50%;
	}
	
	.home .housdesign-list.design li {
		margin-bottom: 1rem;
	}
	
	.home .housdesign-list.design li>div:nth-child(2n) {
		margin-left: 1rem;
	}
	
	.home .housdesign-list.active-list li>div {
		border: 1px solid #f1f1f1;
		margin-top: .4rem;
	}
	
	.home .housdesign-list.active-list li>div:nth-child(2n) {
		margin-left: .4rem;
	}
	
	.home .housdesign-list li div img {
		display: block;
		width: 100%;
	}
	
	.home .housdesign-list .pro-title {
		bottom: 32%;
		font-size: 1.1rem;
		flood-color: #666666;
		left: 7%;
	}
	
	.home .housdesign-list .text .price {
		font-size: 1.4rem;
		color: #b70709;
	}
	
	.home .housdesign-list .text .activety {
		background-color: #b70709;
		color: #FFFFFF;
		padding: 0.2rem 1rem;
	}
	
	.home .banner .mint-swipe-item img {
		width: 100%;
		display: block;
	}
	
	.home .desImg {
		display: block;
	}
	
	.home .height {
		height: 100%;
	}
	
	.home .residence {
		background-color: #d2cea0;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.home .check {
		background-color: #a0c8d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.home .villa {
		background-color: #a8a0d2;
		color: #FFFFFF;
		padding: 0.1rem 0.4rem;
	}
	
	.home .margin-tab {
		margin-bottom: 6rem;
	}
</style>