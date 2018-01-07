<template>
	<div class="search_box">
		<div class="bg_mark"></div>
		<form 
			action="#" 
			@submit.prevent="onSubmit"
			method="get" 
			accept-charset="utf-8"
		>
			<div class="search_container">
					<input 
						type="text" 
						autocomplete="off" 
						autocorrect="off" 
						placeholder="搜索歌曲、歌单、专辑" 
						:class="isInputActive?'active':''"
						v-model="searchCont"
						@focus="setInputStatus(true)" />
					<button 
						class="close_btn"
						v-if="isInputActive" 
						@click="setInputStatus(false)"
					>取消</button>
			</div>
		</form>
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
				searchCont: null,
				listData: [],
				isInputActive: false,
			}
		},
		created(){
			this._getData();
			// this._getHistorySearchData()
		},
		methods: {
			_getData(){
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
				const data = Object.assign({}, commonParams, {
				  platform: 'h5',
				  uin: 0,
				  needNewCode: 1
				})
				jsonp(url, data, options)
				.then((res) => {
					console.log(res);
				})
			},
			setInputStatus(status){
				this.isInputActive = status;
			},
			onSubmit(){
				// https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=458113578&uin=1203029873&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=AA&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1515295231363


				const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
				const data = Object.assign({}, commonParams, {
				  w: this.searchCont,
				  p: 1,
				  n: 20,
				  catZhida: 1,
				  zhidaqu: 1,
				  t: 0,
				  flag: 1,
				  ie: 'utf-8',
				  sem: 1,
				  aggr: 0,
				  remoteplace: 'txt.mqq.all',
				  uin: 0,
				  needNewCode: 1,
				  platform: 'h5'
				})
				jsonp(url, data, options)
				.then((res) => {
					console.log(res);
				})
				return false;
			}
		}
	}
</script>
<style scoped lang="less">
	@import './style.less';
</style>