<template>
	<div id="app">
		<router-view></router-view>

		<tabbar-list />
	</div>
</template>
<script>
	import TabbarList from "./components/content/home/TabbarList.vue"
	export default {
		name: "app",
		components: {
			TabbarList
		}
	}
</script>
<style>
	@import 'assets/css/base.css';
</style>
