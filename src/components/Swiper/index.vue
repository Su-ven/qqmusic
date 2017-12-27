<template>
	<swiper class="swiper-container" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
		<swiper-slide v-for="(item, key, index) in datas" :key="index">
			<a :href="item.linkUrl">
			  <img :src="item.picUrl">
			</a>
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
		<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		name: 'carrousel',
		props: {
			datas: {
				type: Array,
				default: []
			}
		},
		data() {
		  return {
		    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		    notNextTick: true,
		    swiperOption: {
			// swiper options 所有的配置同swiper官方api配置
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			// direction: 'horizontal',
			// grabCursor: true,
			// setWrapperSize: true,
			// autoHeight: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
            	prevEl: '.swiper-button-prev'
			},
			paginationClickable: true,
			scrollbar: '.swiper-scrollbar',
			// mousewheelControl: true,
			// observeParents: true,
			// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
			debugger: true,
			// swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
		      onTransitionStart (swiper) {
		      }
		    }
		  }
		},
		computed: {
		  swiper() {
		    return this.$refs.mySwiper.swiper
		  }
		},
		mounted() {
		  // you can use current swiper instance object to do something(swiper methods)
		  // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
		  // this.swiper.slideTo(3, 1000, false)
		},
	}
</script>

<style scoped lang="less">
	.swiper-container{
		img{
			width: 100%;
		}
	}
</style>