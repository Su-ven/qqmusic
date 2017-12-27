<template>
	<div class="nav">
		<ul>
			<router-link tag="li" to='/recom'>
				<span>推荐</span>
			</router-link>
			<router-link tag="li" to='/toplist'>
				<span>排行榜</span>
			</router-link>
			<router-link tag="li" to='/search'>
				<span>搜索</span>
			</router-link>
		</ul>
	</div>
</template>

<style lang="less" scoped>
	.nav ul{
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		margin: 5px 0;
		
		li{
			flex: 1;
			cursor: pointer;
			text-align: center;
			border-bottom: 2px solid #fff;
			padding: 10px;
			&.router-link-active{
				border-bottom: 2px solid #31c27c;
			}
		}
	}

</style>