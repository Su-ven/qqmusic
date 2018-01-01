<template>
	<div class="toplist_box">
		<ul>
			<li v-for="item in dataList">
				<!-- {{item.id}} -->
				<!-- {{item.listenCount}} -->
				<img :src="item.picUrl" alt="">

				<dl v-if="item.songList.length" class="cont_container">
					<dt class="title">{{item.topTitle}}</dt>
					<dd v-for="(songs, index) in item.songList">
						<p class="cont">
							{{index+1}}
							<span>{{songs.songname}}</span>
							-{{songs.singername}}
						</p>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
<script>
	import jsonp from 'api/baseJsonp'
	import {commonParams, options} from 'api/config'
	export default {
		data(){
			return{
				dataList: []
			}
		},
		created() {
			this._getToplistData();
		},
		methods: {
			_getToplistData: function(){
				const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
				const data = Object.assign({},commonParams, {
					format: 'jsonp',
					platform: 'h5',
					needNewCode: 1,
				})
				jsonp(url, data, options)
				.then((res) => {
					if (res.code === 0) {
						console.log(res);
						this.dataList = res.data.topList;
					}
				})
			}
		}
	}
</script>
<style scoped lang="less">
	@import './style.less';
</style>