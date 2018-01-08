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
					<a
						class="close_btn"
						v-if="isInputActive"
						href="javascript:;"
						@click="setInputStatus(false)"
					>取消</a>
			</div>
		</form>
		<Keys
			v-if="keysData.length&&!isInputActive"
			:datas="keysData"
		/>
		<Historylist v-if="!listData.list&&isInputActive" />
		<List
			v-if="listData.list&&isInputActive"
			:datas="listData"
		/>

	</div>
</template>
<script>
	import jsonp from 'api/baseJsonp'
	import {commonParams, options} from 'api/config'
	import Keys from 'comps/search/Keys'
	import List from 'comps/search/List'
	import Historylist from 'comps/search/Historylist'

	export default {
		name: 'search',
		data(){
			return {
				searchCont: null,
				keysData: [],
				listData: {},
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
						this.keysData = res.data.hotkey;
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
				if (!this.searchCont || this.searchCont == '') {return}
				const timeer = Date.parse(new Date()).toString().substr(0, Date.parse(new Date()).toString().length-3);
				const obj = JSON.parse(window.localStorage.getItem('searchCont') || '{}');
				Object.entries(obj).map((item, index) => {
					if (item[1] == this.searchCont) {
						delete(obj[item[0]]);
					}
				})
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
					if (res.code === 0) {
						this.listData = res.data.song
						obj[timeer] = this.searchCont;
						window.localStorage.setItem('searchCont', JSON.stringify(obj));
					}
				})
				return false;
			}
		},
		components: {
			Keys,
			List,
			Historylist,
		}
	}
</script>
<style scoped lang="less">
	@import './style.less';
</style>