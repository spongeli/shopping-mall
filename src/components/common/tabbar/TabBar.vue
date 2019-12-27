<template>
	<div id="tabber-nav">
		<slot />
	</div>
</template>

<script>
	export default{
		name:"TabBar"
	}
</script>

<style>
	#tabber-nav {
		display: flex;
		justify-content: space-around;
		height: 49px;
		
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		
		background-color: #F7F7FA;
		box-shadow: 0 -1px 1px rgba(247, 247, 250, 0.72);
	}

</style>
