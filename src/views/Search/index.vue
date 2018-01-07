<template>
	<div class="search_box">
		<div class="bg_mark"></div>
		<div class="search_container">
				<input type="text" autocomplete="off" autocorrect="off" placeholder="搜索歌曲、歌单、专辑" />
		</div>
		<div class="hot_keys_box">
			<p class="title">热门搜索</p>
			<div class="tags_container">
					<a href="javascript:;" class="tag" v-if="listData.length&&index<=10" v-for="(item, index) in listData">
						<!-- {{item.n}} -->
						{{item.k}}
					</a>
			</div>
		</div>
	</div>
</template>
<script>
	import jsonp from 'api/baseJsonp'
	import {commonParams, options} from 'api/config'

	export default {
		name: 'search',
		data(){
			return {
				listData: [],
			}
		},
		created(){
			this._getData();
			this._getHistorySearchData()
		},
		methods: {
			_getData(){
				// https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=60525651&uin=1203029873&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1515133967547
				const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
				const data = Object.assign({}, commonParams, {
				  platform: 'h5',
				  uin: 0,
				  needNewCode: 1
				})
				jsonp(url, data, options)
				.then((res) => {
					if (res.code === 0) {
						const firstObj = {
							k: res.data.special_key,
							n: res.data.special_url,
						}
						res.data.hotkey.unshift(firstObj);
						this.listData = res.data.hotkey;
					}
				})
			},
			_getHistorySearchData(){
				const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
				//     format: "json",
		    //     w: e.decodeHTML(),
		    //     zhidaqu: 1,
		    //     catZhida: 1,
		    //     t: 0,
		    //     flag: 1,
		    //     ie: "utf-8",
		    //     sem: 1,
		    //     aggr: 0,
		    //     perpage: L.perpage,
		    //     n: L.perpage,
		    //     p: L.pagenum,
		    //     remoteplace: "txt.mqq.all"
				const data = Object.assign({}, commonParams, {
				  platform: 'h5',
				  uin: 0,
				  needNewCode: 1
				})
				jsonp(url, data, options)
				.then((res) => {
					console.log(res);
					// if (res.code === 0) {
					// 	const firstObj = {
					// 		k: res.data.special_key,
					// 		n: res.data.special_url,
					// 	}
					// 	res.data.hotkey.unshift(firstObj);
					// 	this.listData = res.data.hotkey;
					// }
				})
			}
		}
	}
</script>
<style scoped lang="less">
	@import './style.less';
</style>