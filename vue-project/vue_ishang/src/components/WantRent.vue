<template>
	<div class="wr-page">
		<header>
			<mt-header title="我要出租" fixed>
				<router-link :to="{path:'HouseOwner',query:{name:'Home'}}" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</header>
		<div class="container">
			<ul class="house-list">
				<li class="clearfix cell-box">
					<span class="fl">所在区域</span> <span class="fr">请选择所在区域 ></span>
				</li>
				<li class="clearfix cell-box">
					<span class="fl">您的小区</span> <input type="text" placeholder="请输入小区名" class="fr" />
				</li>
				<li class="clearfix cell-box">
					<span class="fl">小区地址</span> <input type="text" placeholder="请输入小区地址" class="fr" />
				</li>
			</ul>
		</div>
		<div class="container margin-tb ">
			<ul class="house-list">
				<li class="clearfix cell-box">
					<span class="fl">您的楼层</span> <span class="fr">请选择楼层 ></span>
				</li>
				<li class="clearfix cell-box">
					<span class="fl">租金</span> <span class="fr">/月</span> <input type="text" placeholder="请输入租金" class="fr" />
				</li>
				<li class="flex cell-box">
					<span  style="flex:2;">配套设施</span> <span style="flex:8;"><span class="goods active">床</span><span class="goods">电视</span><span class="goods">空调</span><span class="goods active">洗衣机</span><span class="goods">沙发</span><span class="goods active">热水器</span><span class="goods ">冰箱</span></span>
				</li>
			</ul>
		</div>
		<div class="container margin-tb ">
			<ul class="house-list">
				<li class="clearfix cell-box">
					<span class="fl">您的称呼</span> <input type="text" placeholder="请输入您的称呼" class="fr" />
				</li>
				<li class="clearfix cell-box">
					<span class="fl">手机号码</span> <input type="text" placeholder="请输入手机号" class="fr" />
				</li>
				<li class="clearfix cell-box msg">
					<span class="fl">短信验证码</span>
					<mt-button type="default" class="fr" size="small">获取验证码</mt-button><input type="text" placeholder="请输入短信验证码" class="fr" />
				</li>
			</ul>
		</div>
		<div class="submit-box padd-rl">

			<p class="margin-b1">爱尚美家评估标准</p>
			<mt-button type="primary" size="large">立即提交</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WantRent',
		data() {
			return {}
		},
		components: {},
		methods: {

		},
		mounted() {},
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
	
	.house-list .cell-box {
		padding: 1rem 0;
		border-bottom: 1px solid #d9d9d9;
	}
	
	.house-list .cell-box:last-child {
		border-bottom: none
	}
	
	.house-list .cell-box span,
	input {
		font-size: 1.4rem;
		border: none;
	}
	
	.house-list .cell-box input::-webkit-input-placeholder {
		text-align: right;
	}
	
	.house-list .msg input::-webkit-input-placeholder {
		text-align: center !important;
	}
	
	.house-list .cell-box .goods {
		background: #f6f6f6;
		text-align: center;
		line-height:2rem;
		height: 2rem;
		width: 6.5rem;
		display: inline-block;
		margin-right:.4rem;
		margin-bottom:.4rem;
	}
	.house-list .cell-box .active{
		background:#09C66C !important;
		color:#FFFFFF !important;
	}
</style>
<style type="text/css">
	.wr-page .mint-cell-wrapper {
		padding: 1rem 0 !important;
	}
	
	.wr-page .mint-header-title {
		font-size: 1.8rem !important;
	}
	
	.wr-page .page {
		background-color: #f6f6f6;
	}
	
	.wr-page .container {
		padding: 0 1rem;
		background-color: #FFFFFF;
	}
	
	.wr-page .container .house-list .mint-cell .mint-cell-title {
		display: block;
	}
	
	.wr-page .mint-cell-allow-right::after {
		right: 16px;
	}
	
	.wr-page .submit-box .mint-button--primary {
		background-color: #09C66C;
	}
</style>