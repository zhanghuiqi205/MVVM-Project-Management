<template>
	<div class="asses-page">
		<header>
			<mt-header title="我要估价" fixed>
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
					<span class="fl">您的户型</span> <span class="fr">请选择户型 ></span>
				</li>
				<li class="clearfix cell-box">
					<span class="fl">建筑面积</span> <span class="fr">㎡</span> <input type="text" placeholder="请输入面积" class="fr" />
				</li>
				<li class="clearfix cell-box">
					<span class="fl">房屋朝向</span> <span class="fr">请选择朝向 ></span>
				</li>
				<li class="clearfix cell-box">
					<span class="fl">房屋楼层</span> <span class="fr">请选楼层></span>
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
		name: 'Assessment',
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
</style>
<style type="text/css">
	.asses-page .mint-cell-wrapper {
		padding: 1rem 0 !important;
	}
	
	.asses-page .mint-header-title {
		font-size: 1.8rem !important;
	}
	
	.asses-page .page {
		background-color: #f6f6f6;
	}
	
	.asses-page .container {
		padding: 0 1rem;
		background-color: #FFFFFF;
	}
	
	.asses-page .container .house-list .mint-cell .mint-cell-title {
		display: block;
	}
	
	.asses-page .mint-cell-allow-right::after {
		right: 16px;
	}
	
	.asses-page .submit-box .mint-button--primary {
		background-color: #09C66C;
	}
</style>