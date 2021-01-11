<template>
	<view>{{soup.data}}{{soup.date}}</view>
</template>

<script>
	export default {
		data() {
			return {
			soup:{}
			}
		},
		onLoad() {
			uni.request({
			        url: '/api'
			    })
			    .then(res=>{
					this.soup= res[1].data
				})
		}
	}
</script>

<style>
</style>
