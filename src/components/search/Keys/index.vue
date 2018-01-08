<template>
	<div class="hot_keys_box">
		<p class="title">热门搜索</p>
		<div class="tags_container">
				<a href="javascript:;" class="tag" v-if="index<=10" v-for="(item, index) in datas">
					<!-- {{item.n}} -->
					{{item.k}}
				</a>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			datas: {
				type: Array,
				default: []
			}
		}
	}
</script>
<style scoped lang="less">
	@import './style.less';
</style>