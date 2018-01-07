<template>
	<div class="footer" v-if="!isPageSearch">
		<p class="list_more"><a href="javascript:;">去客户端发现更多好音乐  &gt;</a></p>
		<a class="go_pc" href="javascript:;">查看电脑版网页</a>
		<p class="footer_logo"></p>
		<p class="copyright">
			Copyright © 1998 - <span id="js_cpright_year">2017</span> Tencent. All Rights Reserved. <br />
			联系电话：0755-86013388 QQ群：55209235
		</p>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isPageSearch: false
			}
		},
		watch: {
			$route: function() {
				if (this.$route.name == 'Search') {
					this.isPageSearch = true;
				}else{
					this.isPageSearch = false;
				}
			}
		},
	}
</script>
<style scoped>
	.footer{
		padding: 20px;
		text-align: center;
		font-size: 14px;
	}

	.list_more, .go_pc, .copyright{
		width: 100%;
		display: inline-block;
		padding: 10px 0;
	}


	.go_pc{
		margin-bottom: 10px;
	}

	.footer_logo{
		display: block;
		width: 82px;
		height: 24px;
		margin: 0 auto;
		background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png?max_age=19830212&d=20151105145423);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.copyright{
		font-size: 10px;
	    color: rgba(0,0,0,.5);
	}
</style>