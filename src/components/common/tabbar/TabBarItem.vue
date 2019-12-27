<template>
	<div>
		<div class="tabber-nav-item" @click="goView">
			<div v-if=" !isActive ">
				<slot name="img"></slot>
			</div>
			<div v-else>
				<slot name="imged"></slot>
			</div>
			<div :style="ZHactiveColor">
				<slot name="text"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: "#49C5B6"
			}
		},
		data() {
			return {
				// isActive: true
			}
		},
		computed: {
			isActive() {
				// this.$route.path 当前活跃的path
				// this.path 当前页面的path
				return this.$route.path.indexOf(this.path) >= 0
			},
			ZHactiveColor() {
				return this.isActive ? {
					color: this.activeColor
				} : "";
			}
		},
		methods: {
			goView() {
				// 升级到4.0以上 路由自己的页面报错
				this.$router.replace(this.path).catch(err => {})
			}
		},
	}
</script>

<style>
	.tabber-nav-item {
		flex: 1;
		text-align: center;
		font-size: 12px;
		vertical-align: middle;
		/* margin: auto 0; */
	}

	.tabber-nav-item img {
		width: 23px;
		height: 23px;
		margin-top: 5px;
	}
</style>
