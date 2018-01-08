<template>
	<div class="search_list_box">
		<ul>
			<li v-if="datas.list.length" v-for="(item, index) in datas.list">
				<!-- {{item.songmid}} -->
				<div class="icon_container">
					<i class="icon"></i>
				</div>
				<div class="cont_container">
					<p class="songname">{{item.songname}}</p>
					<p class="singersname">{{item.singer[0]['name']}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:{
			datas: {
				type: Object,
				default: {}
			}
		}
	}
</script>
<style scoped lang="less">
	@import './style.less';
</style>