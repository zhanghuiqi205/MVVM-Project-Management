<template>
	<div class="DesignerDtails">
		<mt-header fixed title="设计师详情">
			<router-link :to="{path:back,query:{backs:backs}}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="cell cell-bottom">

			<div class="bg-img">
			</div>
			<div class="designer center-text ">
				<img src="../assets/Designs/图层3@2x.png" />
				<p><span class="name font14 font-weight margin-r2">依米</span><span class="card font11 f-color2">深圳/资深设计师</span></p>
				<p class="font11 margin-tb">
					<span class="margin-r2">八年经验</span>
					<span class="margin-r2">擅长日式混搭</span>
					<span class="margin-r2">中小户型</span>
				</p>
			</div>
			<div class="mask">
				<ul class="flex">
					<li>
						<p class="num font15 f-color2">23369</p>
						<p class="f-color1 margin-t0">关注</p>
					</li>
					<li class="mid-border">
						<p class="num font15 f-color2">23369</p>
						<p class="f-color1 margin-t0">关注</p>
					</li>
					<li>
						<p class="num font15 f-color2">23369</p>
						<p class="f-color1 margin-t0">关注</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<div class="container margin-t1 margin-tab">
				<ul class="housdesign-list active-list">
					<li class="flex">
						<div class="posit-re ">
							<!--<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">-->
							<img src="../assets/Designs/图层724@2x.png" />

							<div class="text  padding">
								<p class="margin-b0 font14">韵律，混搭浓情小美</p>
								<p>两房一厅， 88㎡ 混搭</p>
							</div>
							<!--</router-link>-->
						</div>
						<div class="posit-re ">
							<!--<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">-->
							<img src="../assets/Designs/图层725@2x.png" />

							<div class="text  padding">
								<p class="margin-b0 font14">韵律，混搭浓情小美</p>
								<p>两房一厅， 88㎡ 混搭</p>
							</div>
							<!--</router-link>-->
						</div>

					</li>
					<li class="flex">
						<div class="posit-re ">
							<!--<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">-->
							<img src="../assets/Designs/图层726@2x.png" />

							<div class="text  padding">
								<p class="margin-b0 font14">韵律，混搭浓情小美</p>
								<p>两房一厅， 88㎡ 混搭</p>
							</div>
							<!--</router-link>-->
						</div>
						<div class="posit-re ">
							<!--<router-link :to="{path:'HomeDesignDetails',query:{name:'Home'}}">-->
							<img src="../assets/Designs/图层727@2x.png" />

							<div class="text  padding">
								<p class="margin-b0 font14">韵律，混搭浓情小美</p>
								<p>两房一厅， 88㎡ 混搭</p>
							</div>
							<!--</router-link>-->
						</div>

					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'

	export default {
		name: "DesignerDtails",
		data() {
			return {
				selected: '1',
				n: 1,
				back: '',
				backs: '',
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
				that.back = that.$route.query.name;
				that.backs = that.$route.query.backs; //方便父级路由返回
				//              console.log(that.backs);
			},

		},
		mounted() {
			this.lunbo(),
				this.backData()

		}
	}
</script>

<style scoped>
	.content {
		padding: 0 1rem;
	}
	
	.bg-img {
		height: 22.5rem;
		background: url(../assets/Designs/图层2@2x.png) no-repeat;
		background-size: cover;
		background-position: center center;
		margin-top: 48px;
	}
	
	.mask {
		padding-bottom: 3rem;
	}
	
	.mask .flex li {
		flex: 1;
		text-align: center;
	}
	
	.designer {
		margin-top: -6rem;
	}
	
	.designer>img {
		width: 9rem;
	}
	
	.housdesign-list li div img {
		display: block;
		width: 100%;
	}
	
	.mid-border {
		border: 1px solid #999999;
		border-bottom: none;
		border-top: none;
	}
	
	.housdesign-list.active-list li>div {
		border: 1px solid #f1f1f1;
		margin-top: .4rem;
	}
	
	.housdesign-list.active-list li>div:nth-child(2n) {
		margin-left: .4rem;
	}
	
	.housdesign-list li>div {
		flex: 1;
		width: 50%;
	}
</style>