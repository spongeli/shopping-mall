<template>
	<div id="app">
		<router-view></router-view>


	</div>
</template>
<script>
	import tabbarList from "components/content/home/tabbar-list.vue"
	export default {
		components: {
			tabbarList
		}
	}
</script>
<style>
	@import 'assets/css/base.css';
</style>
