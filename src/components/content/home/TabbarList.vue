<template>
	<div>
		<TabBar>
			<TabBarItem path="/home">
				<img slot="img" src="../../../assets/img/tabbar/home.png" />
				<img slot="imged" src="../../../assets/img/tabbar/cared.png" />
				<div slot="text">首页</div>
			</TabBarItem>
			<TabBarItem path="/category">
				<img slot="img" src="../../../assets/img/tabbar/category.png" />
				<img slot="imged" src="../../../assets/img/tabbar/categoryed.png" />
				<div slot="text">分类</div>
			</TabBarItem>
			<TabBarItem path="/car">
				<img slot="img" src="../../../assets/img/tabbar/car.png" />
				<img slot="imged" src="../../../assets/img/tabbar/cared.png" />
				<div slot="text">购物车</div>
			</TabBarItem>
			<TabBarItem path="/mine">
				<img slot="img" src="../../../assets/img/tabbar/mine.png" />
				<img slot="imged" src="../../../assets/img/tabbar/mineed.png" />
				<div slot="text">我的</div>
			</TabBarItem>
		</TabBar>
	</div>
</template>

<script>
	import TabBarItem from "../../common/tabbar/TabBarItem.vue"
	import TabBar from "../../common/tabbar/TabBar.vue"
	export default {
		name:"TabbarList",
		components:{
			TabBarItem,
			TabBar
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
</style>
