<template>
	<div class="taps">
		<mt-tab-container>
			<mt-tabbar :fixed="true" v-model="message" >
				<!--v-model=""-->
				<mt-tab-item id="Home">
					<img  slot="icon" :src="this.atabs[0]"  > 首页
				</mt-tab-item>
				<mt-tab-item id="Active">
					<img slot="icon" :src="this.atabs[1]" > 活动
				</mt-tab-item>
				<mt-tab-item id="House">
					<img slot="icon" :src="this.atabs[2]" > 房产
				</mt-tab-item>
				<mt-tab-item id="HomeDesign">
					<img slot="icon" :src="this.atabs[3]" > 家居
				</mt-tab-item>
				<mt-tab-item id="User">
					<img slot="icon" :src="this.atabs[4]" > 我的
				</mt-tab-item>
			</mt-tabbar>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
		name: 'Taps',
		data() {
			return {
			message:this.selected,
			atabs:this.tabs,
			}
		},
		props: {
			selected: String,
			tabs: Array,
			bg: String,
			srcollMark: Boolean,
		},
		watch:{
			message:function(val,oldVal){
				switch(val) {
						case 'Home':
							this.$router.push('/Home');
							break;
			        	case 'House':
							this.$router.push('/House');
							break;
			        	case 'Active':
							this.$router.push('/Active');
							break;
			        	case 'HomeDesign':
							this.$router.push('/HomeDesign');
							break;
			        	case 'User':
							this.$router.push('/User');
							break;

				};
//				　　this.$router.go(0); //刷新页面 
			}
		},
		created() {
		}
	}
</script>

<style >
.mint-tabbar > .mint-tab-item.is-selected{
	background:none;
	color:#09C66C;
}
</style>