<template>
	<div class="selsect">
		<section class="warp">
			<div class="searchIpt clearFix">
				<div class="clearFix">
					<input type="text" class="keyword" v-bind:value="val" @click="selectShow=!selectShow" />
					<!--//此处value值需动态绑定-->
					<span></span>
				</div>
				<div v-show="selectShow" :list="list" >
					<ul class="list posit-re">
						<li v-for="item of list" @click="changeValueHandle(item)">{{item}}</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name:"Selsect",
		data() {
			return {
				selectShow: false,
				val: "",
			}
		},
		props: {
			list: Array
			
		},
		methods: {
			  changeValueHandle:function(value){
                 this.val=value;
             }
		}
	}
</script>

<style scoped>
	body {
		margin: 0;
		font-family: "微软雅黑";
	}
	
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	input {
		outline: none;
		cursor: pointer;
	}
	
	.clearFix:after {
		display: block;
		content: '';
		clear: both;
	}
	
	
	.searchIpt {
		position: relative;
	}
	
	.searchIpt input {
		line-height: 34px;
		border-radius: 18px;
	}
	
	.searchIpt input:nth-of-type(1) {
		flex: 1;
		border: 1px solid #c9c9d5;
		background: #d9d9e2;
	}
	.searchIpt span {
		position: absolute;
		top: 12px;
		left: 15px;
		width: 23px;
		height: 23px;
		background: url(../assets/Designs/更多分类拷贝3@2x.png) no-repeat;
	}
	
	.searchIpt input:nth-of-type(1):focus {
		background: #fff;
		border-color: #fd635e;
	}
	
	.list {
		margin-top: 9px;
	}
	
	.list li {
		margin: 3px 0;
		color: #333;
		line-height: 30px;
		padding-left: 16px;
		width: 100px;
		box-sizing: border-box;
		border-radius: 14px;
	}
	
	.list li.active,
	.list li:hover {
		color: #fff;
		background: #fd635e;
		cursor: pointer;
	}
</style>