<template>
	<div class="recom_box">
		<Swiper v-if="bannerDatas.length" :datas="bannerDatas"></Swiper>
		<div class="list_box">
			<List v-if="songList.length" title="热门歌单" :datas="songList"></List>
		</div>
	</div>
</template>
<script>
	import jsonp from 'api/baseJsonp'
	import {commonParams, options} from 'api/config'
	import Swiper from 'comps/Swiper'
	import List from 'comps/recom/List'
	export default {
		data(){
			return {
				bannerDatas: [],
				songList: [],
			}
		},
		created() {
			this._getRecomData();
		},
		methods: {
			_getRecomData: function(){
				const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
				const data = Object.assign({}, commonParams, {
				  platform: 'h5',
				  uin: 0,
				  needNewCode: 1
				})
				jsonp(url, data, options)
				.then((res) => {
					if (res.code === 0) {
						this.bannerDatas =  res.data.slider;
						this.songList =  res.data.songList;
					}
				})
			}
		},
		components: {
			Swiper,
			List
		}
	}
</script>