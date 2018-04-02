<template>
	<div class="hello">
		<header class="mint-header" v-bind:style="{backgroundImage:'url('+ this.bg[0] +')'}">
		</header>
		<mt-search v-model="serchValue" placeholder="请输入关键字搜索"></mt-search>
	</div>
</template>

<script>
	export default {
		props: {
			selected: String,
			tabs: Array,
			bg: Array,
			srcollMark: Boolean,
		},
		name: 'Header',
		data() {
			return {
				serchValue: '',
//				bgImg:this.bg[0],

			}

		},
		methods: {
			changBcolor() {
			window.timeRefelsh=setInterval(() => {
				if(this.srcollMark==true&&document.getElementsByClassName("mint-searchbar")[0]) {
					document.getElementsByClassName("mint-searchbar")[0].style.backgroundColor = "rgba(18,218,123,0.8)"
				}else{
					document.getElementsByClassName("mint-searchbar")[0].style.backgroundColor = "rgba(18,218,123,0)"
				}
				   },300);
			},

		},
		mounted() {
			
				this.changBcolor();
		  
					
		},
		destroyed() {
			clearInterval(timeRefelsh)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--v-if="bg"  v-bind:style="{backgroundImage:'url('+ bg +')'}"-->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.mint-header {
		height: 250px;
		padding-top: 71.43%;
		/*图片宽高比用来响应适配不同移动端背景大小*/
		background-size: cover;
		background-position: center;
		background-image:no-repeat ;
		background-color:rgba(255,255,255,0);
	}
</style>
<style type="text/css">
	.mint-search {
		height: 60px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}
	
	.mint-searchbar {
		background-color: transparent;
		/*padding:0 10px;*/
	}
	
	.mint-searchbar-cancel {
		display: none;
	}
	
	.changBcolor {
		background-color: rgba(18, 218, 123, 0.5);
	}
	
</style>