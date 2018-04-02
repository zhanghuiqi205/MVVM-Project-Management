<template>
	<div class="Setting">
		<div class="head-box">
			<mt-header title="设置">
				<router-link :to="{path:back}" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="content  padd-rl font13 margin-t1">
			<ul class="set-list font13 margin-b1">
				<li>
					<a href="#">
						<mt-cell title="头像" class="clearfix user">
							<!--<span style="color: green">这里是元素</span>-->
							<img slot="icon" src="../assets/User/图层16@2x.png" class="user-img fr">
						</mt-cell>
					</a>
				</li>
				<li>
					<a href="#">
						<mt-cell title="昵称" is-link value="我的昵称">
							<!--<span style="color: green">这里是元素</span>-->
						</mt-cell>
					</a>
				</li>
				<li>
					<a href="#">
						<mt-cell title="性别" is-link value="男">
							<!--<span style="color: green">这里是元素</span>-->

						</mt-cell>
					</a>
				</li>

				<li>
					<!--<router-link :to="{path:'AboutUs',query:{name:'User'}}">-->
					<mt-cell title="签名" is-link value="请设置签名">
						<!--<span style="color: green">这里是元素</span>-->

					</mt-cell>
					<!--</router-link>-->
				</li>
				<li>
					<!--<router-link :to="{path:'AboutUs',query:{name:'User'}}">-->
					<mt-cell title="电话" is-link value="13632565654">
						<!--<span style="color: green">这里是元素</span>-->

					</mt-cell>
					<!--</router-link>-->
				</li>
			</ul>
		</div>
			<mt-cell title="退出登录" class="exit">
				<!--<span style="color: green">这里是元素</span>-->

			</mt-cell>
	</div>
</template>

<script>
	export default {
		name: 'AboutUs',
		data() {
			return {
				h: '260',
				srcollMark: false,
				a: 1,
				back: '',
				backs: '',
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
				if(!that.$route.query.backs) {
					that.back = that.$route.query.name;
				} else {
					that.back = that.$route.query.backs;
				};
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			this.lunbo()
			this.backData()
		},
	}
</script>

<style scoped>
	.user-img {
		width: 4.5rem;
		margin: 1rem 0;
	}
</style>
<style type="text/css">
	html{
		height: 100% !important;
	
	}
	body{
		height: 100% !important;
	
	}
	.Setting{
		height: 100% !important;
		background-color:#F0F0F0;
	}
	.Setting .mint-cell-text {
		font-size: 1.3rem !important;
	}
	
	.Setting .user .mint-cell-text {
		margin-top: 3rem;
		display: inline-block;
	}
	.Setting .exit .mint-cell-title{
		text-align:center;
	}
	.Setting .mint-cell-value.is-link span{
		font-size:1.3rem;
	}
	.Setting .content{
		background-color:#FFFFFF;
	}
</style>