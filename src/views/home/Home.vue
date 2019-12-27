<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
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
