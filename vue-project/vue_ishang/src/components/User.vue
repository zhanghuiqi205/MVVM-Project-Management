<template>
	<div class="user-page">
		<mt-header class="posit-re">
		</mt-header>
		<div class="posit-ab personIcon">
			<img src="../assets/User/图层16@2x.png" />
			<div class="f-color margin-l1">
				<p class="font18">世界只因有你</p>
				<p class="font12">注册手机号不会透露给任何人</p>
			</div>
			<img class="setBtn posit-ab" src="../assets/User/设置@2x.png">
		</div>
		<div class="page-content padd-tb">
			<div class="user-attent">
				<mt-cell title="我关注的" class="title-box"></mt-cell>
				<ul class="bg-color flex padd-tb">
					<li>
						<router-link :to="{path:'ActiveFocus',query:{name:'User'}}">
							<img src="../assets/User/活动@2x.png" />
							<p>活动<span>(12)</span></p>
						</router-link>
					</li>
					<li>
						<router-link :to="{path:'HomeFocus',query:{name:'User'}}">
							<img src="../assets/User/房产@2x.png" />
							<p>房产<span>(14)</span></p>
						</router-link>
					</li>
					<li>
						<router-link :to="{path:'HomeDesignFocus',query:{name:'User'}}">
							<img src="../assets/User/家居@2x.png" />
							<p>家居<span>(15)</span></p>
						</router-link>
					</li>
					<li>
						<img src="../assets/User/委托@2x.png" />
						<p>委托<span>(18)</span></p>
					</li>
				</ul>
			</div>
			<!--<div class="mid-banner bg-img ">
				<div class="center-text p-center">
					<p class="font18">添加我的房屋信息</p>
					<p class="font12 f-color1 margin-tb">配置专属管家,随时去注房屋资产变化</p>
					<mt-button type="primary">立即添加</mt-button>
				</div>
			</div>-->
		</div>
		<div class="container m-bottom">
			<ul class="house-list">
				<!--<li>
					<a href="#">
						<mt-cell title="我的点评" is-link>
							<img slot="icon" src="../assets/User/我的点评@2x.png" width="24" height="24">
						</mt-cell>
					</a>
				</li>-->
				<li>
					<router-link :to="{path:'AboutUs',query:{name:'User'}}">
						<mt-cell title="关于我们" is-link>
							<!--<span style="color: green">这里是元素</span>-->
							<img slot="icon" src="../assets/User/关于我们@2x.png" width="24" height="24">
						</mt-cell>
					</router-link>
				</li>
				<li>
					<a href="#">
						<mt-cell title="客服咨询" is-link value="400-800-8888">
							<!--<span style="color: green">这里是元素</span>-->
							<img slot="icon" src="../assets/User/客服咨询@2x.png" width="24" height="24">
						</mt-cell>
					</a>
				</li>
				<!--<li>
					<a href="#">
						<mt-cell title="用户反馈" is-link>
							<img slot="icon" src="../assets/User/用户反馈@2x.png" width="24" height="24">
						</mt-cell>
					</a>
				</li>-->


				<li>
					<router-link :to="{path:'Setting',query:{name:'User'}}">
						<mt-cell title="个人设置" is-link>
							<!--<span style="color: green">这里是元素</span>-->
							<img slot="icon" src="../assets/User/个人设置@2x.png" width="24" height="24">
						</mt-cell>
					</router-link>
				</li>

			</ul>
		</div>
		<Taps :selected="selected" :tabs="tabs"></Taps>
	</div>
</template>

<script>
	import Taps from './Taps';

	export default {
		name: 'User',
		data() {
			return {
				selected: "User",
				tabs: [
					require("../assets/Home/首页@2x.png"),
					require("../assets/Home/活动@2x.png"),
					require("../assets/Home/房产@2x.png"),
					require("../assets/Home/家居@2x.png"),
					require("../assets/Home/我的选中@2x.png"),
				],
			}
		},
		components: {
			Taps,
		},
		methods: {

		},
		mounted() {},
	}
</script>

<style scoped>
	.user-page .mint-header {
		height: 17.5rem !important;
		background-size: cover !important;
		background-position: center !important;
		background: url(../assets/User/矩形7拷贝3@2x.png);
		/*background-image:no-repeat;
		padding-top: 71.43%;*/
	}
	
	.personIcon {
		top: 10%;
		left: 6%;
		display: flex;
	}
	
	.personIcon img {
		height: 7rem;
	}
	
	.personIcon .font18 {
		margin-top: 1.6rem;
		margin-bottom: .8rem;
	}
	
	.personIcon .setBtn {
		right: -30%;
		top: -40%;
		height: 2rem;
	}
	
	.page-content {
		background: #f0f0f0;
	}
	
	.bg-color {
		background: #FFFFFF;
	}
	
	/*.user-attent .flex {
		margin-top: 1px;
	}*/
	
	.user-attent .flex li {
		flex: 1;
		text-align: center;
	}
	
	.user-page .mid-banner {
		height: 15rem;
		background: url(../assets/User/房屋信息@2x.png);
		background-size: cover;
		background-position: center center;
		margin-top: 1rem;
	}
	
	.user-page .p-center {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.user-page .mid-banner .mint-button--primary {
		background-color: #09C66C;
	}
	
	.user-page .m-bottom {
		margin-bottom: 60px;
	}
</style>
<style type="text/css">
	.user-page .mint-cell-wrapper {
		padding: 1rem 0 !important;
	}
	
	.user-page .container {
		padding: 0 1rem;
	}
	
	.user-page .title-box .mint-cell-title {
		margin-left: 1rem;
	}
</style>