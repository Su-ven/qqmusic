<template>
  <div class="header">
			<img class="music_logo" src="../assets/imgs/logo.png" alt="">
			<span>QQ音乐</span>
			<a href="javascript:;" class="btn_download">下载APP</a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>
	.header{
		background-color: #31c27c;
		padding: 10px;
		color: #fff;
	}

	.music_logo{
		height: 25px;
		vertical-align: middle;
	}

	.btn_download{
		float: right;
    display: inline-block;
    height: 28px;
    padding: 0 12px;
    line-height: 28px;
    border-radius: 99px;
    font-size: 14px;
    background: #149c5a;
    color: #fff;
	}
</style>