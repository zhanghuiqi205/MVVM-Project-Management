<template>
	<div class="OrderMadeList">
		<mt-header fixed title="全屋定制列表">
			<router-link :to="{path:back,query:{backs:backs}}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content bg-color">
			<div class="cell cell-bottom padding flex">
             <Selsect v-bind:list="list1"></Selsect>
             <Selsect v-bind:list="list2"></Selsect>
             <Selsect v-bind:list="list1"></Selsect>
             <Selsect v-bind:list="list2"></Selsect>
			</div>
			<div class="cell cell-bottom">
				<div class="img-box">
					<img src="../assets/Designs/图层50@2x.png" />
					<div class=" padding">
						<div class="title left ">
							<p class="font15 font-weight margin-b0">韵律，混搭浓情小美</p>
							<p class="font12 f-color2 margin-b0">两房一厅， 88㎡ 混搭 深圳</p>
							<p class="font11 f-color1"><span>关注 9666</span> <span>成交 562</span></p>
						</div>
						<div class="title center-text right">
							<img src="../assets/Designs/图层400000@2x.png" class="designer" />
							<p class="font12 f-color2 margin-b0"><span class="name">丽萨</span> <span>6年</span></p>
							<p class="font11 f-color1">首席设计师</p>
						</div>
					</div>
				</div>
			</div>
			<div class="cell cell-bottom">
				<div class="img-box">
					<img src="../assets/Designs/图层50@2x.png" />
					<div class=" padding">
						<div class="title left ">
							<p class="font15 font-weight margin-b0">韵律，混搭浓情小美</p>
							<p class="font12 f-color2 margin-b0">两房一厅， 88㎡ 混搭 深圳</p>
							<p class="font11 f-color1"><span>关注 9666</span> <span>成交 562</span></p>
						</div>
						<div class="title center-text right">
							<img src="../assets/Designs/图层400000@2x.png" class="designer" />
							<p class="font12 f-color2 margin-b0"><span class="name">丽萨</span> <span>6年</span></p>
							<p class="font11 f-color1">首席设计师</p>
						</div>
					</div>
				</div>
			</div>
			<div class="cell cell-bottom">
				<div class="img-box">
					<img src="../assets/Designs/图层50@2x.png" />
					<div class=" padding">
						<div class="title left ">
							<p class="font15 font-weight margin-b0">韵律，混搭浓情小美</p>
							<p class="font12 f-color2 margin-b0">两房一厅， 88㎡ 混搭 深圳</p>
							<p class="font11 f-color1"><span>关注 9666</span> <span>成交 562</span></p>
						</div>
						<div class="title center-text right">
							<img src="../assets/Designs/图层400000@2x.png" class="designer" />
							<p class="font12 f-color2 margin-b0"><span class="name">丽萨</span> <span>6年</span></p>
							<p class="font11 f-color1">首席设计师</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'
	import Selsect from './Selsect'

	export default {
		name: "OrderMadeList",
		data() {
			return {
				back: '',
				backs: '',
				list1:["上海","北京","杭州"],
            	list2:["17-2-21","17-3-12","17-4-16"]

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
		components: {
			Selsect
		},
		mounted() {
			this.lunbo(),
			this.backData()
		}
	}
</script>

<style scoped>
	.content {
		margin-top: 5rem;
	}
	
	.content select {
		border: none;
		outline: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		flex: 1;
		margin-right: 1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.content .cell {
		background: #FFFFFF;
		margin-bottom: 1rem;
	}
	
	.content .cell .img-box {
		position: relative;
	}
	
	.content .cell .img-box>img {
		width: 100%;
		height: 20rem;
		display: block;
	}
	
	.content .cell .img-box .designer {
		width: 5.5rem;
		display: block;
		margin-bottom: .5rem;
	}
	
	.content .cell .img-box .title {
		display: inline-block;
	}
	
	.content .cell .img-box .title.right {
		position: absolute;
		bottom: 4%;
		display: inline-block;
		text-align: center;
		right: 1rem;
	}
	
	.select-box {
		width: 80px;
		height: 40px;
		font-size: 13px;
	}
	
	.select-box .show {
		line-height: 30px;
	}
	
	.select-box .show-area {
		color: white;
		vertical-align: middle;
	}
	
	.select-box .show-select {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		width: 80px;
		height: 28px;
		border: 1px solid #999;
		background-color: white;
		text-indent: 2px;
		cursor: pointer;
		color: #333333;
	}
	
	.select-box .show-selectAdd {
		color: #999;
	}
	
	.select-box .show .triangle {
		position: absolute;
		height: 0;
		width: 0;
		top: 0;
		right: 0;
		margin-top: 12px;
		margin-right: 5px;
		border: 5px solid transparent;
		border-top-color: black;
	}
	
	.select-box .show-selectAdd .triangle {
		border: 5px solid transparent;
		border-bottom-color: black;
		margin-top: 8px;
	}
	
	.select-box .list {
		border: 1px solid #dfdfdf;
		border-top: none;
		display: none;
		position: relative;
		z-index: 999;
		background: #FFFFFF;
	}
	
	.select-box .list-in {
		height: 30px;
		line-height: 30px;
		text-indent: 2px;
		cursor: pointer;
		color: #999999;
	}
	
	.select-box .list-in:hover {
		background: #e6e6e6;
		color: #333;
	}
	 .active_header_option{
    width: 100%;
    height: 0.75rem;
    /*overflow: hidden;*/
  }
  .active_header_option table,
  .active_header_option tr{
    width: 100%;
    height: 0.75rem;
  }
  .active_header_option td{
    width: 25%;
    height: 0.75rem;
    font-size: 0.28rem;
    text-align: center;
    position: relative;
  }
  .set_check_op{
    display: block;
    width: 100%;
    height: 0.75rem !important;
    text-align: center;
    line-height: 0.75rem;
    position: absolute;
    top: 0;
    left: 0px;
    color: #999999;
  }
  .line_2{
    float: right;
  }
  .active_header_option_con{
    width: 100%;
    min-height: 1.5rem;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
  }
  .active_header_option_con li{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #007aff;
    color: #ffffff;


  }


  .set_check_css{
    color: #09c66c!important;
  }
</style>