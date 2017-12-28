<template>
	<div class="recom_box">
		<Swiper v-if="bannerDatas.length" :datas="bannerDatas"></Swiper>
		<div class="list_box">
			<List v-if="radioList.length" title="电台" :datas="radioList"></List>
			<List v-if="songList.length" title="热门歌单" :datas="songList"></List>
		</div>
		<div class="footer">
			<p class="list_more"><a href="javascript:;">去客户端发现更多好音乐  &gt;</a></p>
			<a class="go_pc" href="javascript:;">查看电脑版网页</a>
			<p class="footer_logo"></p>
			<p class="copyright">
				Copyright © 1998 - <span id="js_cpright_year">2017</span> Tencent. All Rights Reserved. <br />
				联系电话：0755-86013388 QQ群：55209235
			</p>
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
				radioList: [],
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
						this.radioList =  res.data.radioList;
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
<style scoped lang="less">
	@import "./style.less";
</style>