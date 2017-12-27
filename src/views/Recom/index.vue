<template>
	<div>
		<Swiper v-if="bannerDatas.length" :datas="bannerDatas"></Swiper>
	</div>
</template>
<script>
	import jsonp from 'api/baseJsonp'
	import {commonParams, options} from 'api/config'
	import Swiper from 'comps/Swiper'
	export default {
		data(){
			return {
				bannerDatas: []
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
					}
				})
			}
		},
		components: {
			Swiper,
		}
	}
</script>