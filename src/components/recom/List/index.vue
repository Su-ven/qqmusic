<template>
	<div class="list_box">
		<dl>
			<dt>
				<p class="title">
					{{title}}
				</p>
			</dt>
			<dd v-for="item in datas">
				<div class="img_container">
					<img :src="item.picUrl" />
					<div class="msg">
						<i></i>
						{{item.accessnum|formatNum}}
					</div>
				</div>
				{{item.id}}
				{{item.songListDesc}}
				{{item.songListAuthor}}
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