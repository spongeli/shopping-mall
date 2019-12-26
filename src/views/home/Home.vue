<template>
	<div>
		首页
	</div>
</template>

<script>
	import {getHomeMultidata} from "network/home.js"
	export default {
		data(){
			return {
				
			}
		},
		created() {
			getHomeMultidata().then(res => {
				console.log(res);
			});
		}
	}
</script>

<style>
</style>
