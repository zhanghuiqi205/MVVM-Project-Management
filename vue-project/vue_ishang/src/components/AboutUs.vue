<template>
	<div class="AboutUs">
		<div class="head-box">
			<mt-header title="关于我们">
				<router-link :to="{path:back}" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="content padding">
			<div class="versions center-text margin-tb">
				<img src="../assets/Home/logo2.png" class="logo" />
				<p class="font13">版本：1.0.0</p>
			</div>
			<p class="text font13">尚品宅配成立于2004年,是广州尚品宅配家居用品有限公百 旗下品牌,我们是一家强调依托高科技创新性迅速发展的家具 企业。 尚品宅配成功签约一线影星周迅作为形象代言人,这一举措标 志着尚品宅配全新的品牌战略正式启动,除了强势打造品牌新 形象,更是旨在引领家居时尚文化品牌。此次与周迅携手,是 尚品宅配迈向更高水平的一个新的起点。 尚品宅配公司在行业12年的成长,每次一转身,每一次营销变 革,都在行业消费者层掀起旋风,引领家居消费新观念,而成 就尚品宅配从行业品牌向时尚大众品牌的坚实一步。尚品宅配 李嘉聪总经理称:”携手周迅,正是因为周迅的充满灵气,个 性时尚,百变的造型、成为环保大使的责任感,这些都与尚品 宅配品牌特完美契合。3”
			</p>
			<div class="website center-text margin-t1">
				<p class="font12">www.ishangmeijia.com</p>
				<p class="font12">Copyright©2018爱尚美家</p>
			</div>
		</div>
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
 .logo{
 	width:9rem;
 }
 .text{
 	line-height:1.6;
 }
</style>