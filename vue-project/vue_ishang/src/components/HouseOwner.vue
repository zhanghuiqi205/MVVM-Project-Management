<template>
	<div class="house-owner">
		<header>
			<mt-header title="我是业主" fixed>
				<router-link :to="{path:back}" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</header>
		<div class="page-content ">

			<div class="mid-banner bg-img ">
				<div class="center-text p-center">
					<p class="font18">添加我的房屋信息</p>
					<p class="font12 f-color1 margin-tb">配置专属管家,随时去注房屋资产变化</p>
					<mt-button type="primary">立即添加</mt-button>
				</div>
			</div>
			<div class="user-attent">
				<ul class="bg-color flex padd-tb">
					<li>
						<router-link :to="{path:SellHouse}">						
						<img src="../assets/HouseOwner/出售@2x.png" />
						<p>我要出售</p>
						</router-link>
					</li>
					<li>
						<router-link to="/WantRent">
						<img src="../assets/HouseOwner/租房@2x.png" />
						<p>我要出租</p>
						</router-link>
					</li>
					<li>
						<router-link to="/Assessment">
						<img src="../assets/HouseOwner/估价@2x.png" />
						<p>我要估价</p>
						</router-link>
					</li>
					<li>
						<img src="../assets/HouseOwner/管理员@2x.png" />
						<p>房产管理</p>
					</li>
				</ul>
			</div>
			
		<div class="container margin-t1">
			<ul class="house-list padd-rl">
				<li>
					<a href="#">
						<mt-cell>
							<h5>房产详情</h5>
							<p>各种行情一目了然</p>
						</mt-cell>
					</a>
				</li>
				<li>
					<a href="#">
						<mt-cell>
							<div class="flex">
								<div>
									<div class="font13 margin-b1"><span>昨日新房成交</span><img src="../assets/HouseOwner/注意(1)@2x.png" width="14" /></div>
									<div class="font11"><span class="font24 f-color6">68</span><span>套</span><span class="f-color6">1.32 ↑</span></div>			
								</div>
								<div>
									<div class="font13 margin-b1"><span>昨日新房成交均价</span><img src="../assets/HouseOwner/注意(1)@2x.png" width="14" /></div>
									<div class="font11"><span class="font24 f-color4">68888</span><span>/平米</span><span class=" f-color4">1.68 ↓</span></div>		
								</div>
							</div>
							<p class="font11 margin-t1">目前本月成交8389套比上月上涨9.28%0比去年同期上涨14.84%</p>
						</mt-cell>
					</a>
				</li>
				<li>
					<a href="#">
						<mt-cell>
							<div class="flex">
								<div>
									<div class="font13 margin-b1"><span>昨日新房成交</span><img src="../assets/HouseOwner/注意(1)@2x.png" width="14" /></div>
									<div class="font11"><span class="font24 f-color6">68</span><span>套</span><span class="f-color6">1.32 ↑</span></div>			
								</div>
								<div>
									<div class="font13 margin-b1"><span>昨日新房成交均价</span><img src="../assets/HouseOwner/注意(1)@2x.png" width="14" /></div>
									<div class="font11"><span class="font24 f-color4">68888</span><span>/平米</span><span class=" f-color4">1.68 ↓</span></div>		
								</div>
							</div>
							<p class="font11 margin-t1">目前本月成交8389套比上月上涨9.28%0比去年同期上涨14.84%</p>
						</mt-cell>
					</a>
				</li>
			</ul>
		</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HouseOwner',
		data() {
			return {
				back:'',
				SellHouse:"SellHouse",
			}
		},

		methods: {
            backData(){
				  let that = this;
				that.back=that.$route.query.name;
				console.log(that.back);
			},
		},
		mounted(){
			this.backData()
		},
	}
</script>

<style scoped>
	header {
		height: 40px;
	}
	
	.mint-header {
		background-color: #f6f6f6;
		color: #333333;
	}
	
	.page-content {
		background: #f0f0f0;
		/*margin-top:40px;*/
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
	
	.user-attent .flex li img {
		width: 4rem;
	}
	
	.mid-banner {
		height: 15rem;
		background: url(../assets/User/房屋信息@2x.png);
		background-size: cover;
		background-position: center center;
		margin-bottom: 1rem;
	}
	
	.p-center {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.mid-banner .mint-button--primary {
		background-color: #09C66C;
	}
	
	.m-bottom {
		margin-bottom: 60px;
	}
</style>
<style type="text/css">
	.house-owner .mint-cell-wrapper {
		padding: 1rem 0 !important;
	}
	
	.house-owner .mint-header-title {
		font-size: 1.8rem !important;
	}
	
	.house-owner .container .house-list {
		background-color:#FFFFFF;
	}
	
	.house-owner .container .house-list .mint-cell .mint-cell-value {
		display: block;
	}
	
	.house-owner .container .house-list .mint-cell .mint-cell-value h5 {
		margin-bottom: .6rem;
	}
	
	.house-owner .container .house-list .mint-cell .mint-cell-title {
		display: none;
	}
	.house-owner .container .house-list .mint-cell .flex>div{
		flex:1;
	}
	.house-owner .title-box .mint-cell-title {
		margin-left: 1rem;
	}
</style>