<template>
	<div>
		<tab-bar>
		<!-- 	<tab-bar-item path="/home">
				<img slot="img" src="../../../assets/img/tabbar/home.png" />
				<img slot="imged" src="../../../assets/img/tabbar/cared.png" />
				<div slot="text">首页</div>
			</tab-bar-item> -->
<!-- 			<tab-bar-item path="/category">
				<img slot="img" src="../assets/img/tabber/category.png" />
				<img slot="imged" src="@/assets/img/tabber/categoryed.png" />
				<div slot="text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/car">
				<img slot="img" src="@/assets/img/tabber/car.png" />
				<img slot="imged" src="@/assets/img/tabber/cared.png" />
				<div slot="text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/mine">
				<img slot="img" src="@/assets/img/tabber/mine.png" />
				<img slot="imged" src="@/assets/img/tabber/mineed.png" />
				<div slot="text">我的</div>
			</tab-bar-item> -->
		</tab-bar>
	</div>
</template>

<script>
	// import tabBarItem from "../../common/tabbar/tab-bar-item.vue"
	import tabBarItem from "../../common/tabbar/tab-bar-item.vue"
	// import tabBar from "common/tabbar/tab-bar.vue"
	export default {
		components:{
			tabBarItem,
			tabBar
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
</style>
