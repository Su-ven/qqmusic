<template>
	<div class="list_box">
		<dl>
			<dt>
				<p class="title">
					{{title}}
				</p>
			</dt>
			<dd v-for="item in datas">
				<div class="item_container">
					<div class="img_container">
						<img :src="item.picUrl" />
						<div :class="item.accessnum?`msg`:``">
							<i></i>
							<em v-if="item.accessnum">{{item.accessnum|formatNum}}</em>
						</div>
						<div class="play_icon">
							<i></i>
						</div>
					</div>
					<p class="desc_container">{{item.songListDesc || item.Ftitle}}</p>
					<p class="author_container">{{item.songListAuthor}}</p>
					<!-- {{item.id}} -->
				</div>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			datas: {
				type: Array,
				default: null
			}
		}
	}
</script>

<style scoped lang="less">
	@import "./style.less";
</style>