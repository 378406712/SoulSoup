<template>
	<div class="soul-container">

		<div class="pattern-center">
			<div class="pattern-attachment-img">
				<img v-if="loadOk" src="../../assets/demo.png" class="thumbnail" :class="loadOkBlur?'':'lazyload'" alt="">
				<img @load="lazyload" src="https://2heng.xin/wp-content/uploads//2017/08/pixiv54839592.png" data-src="https://2heng.xin/wp-content/uploads//2017/08/pixiv54839592.png"
				 class="lazyload" style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
			</div>
			<header class="pattern-header ">
				<div id="h1" class="entry-title">毒鸡汤</div>
			</header>
		</div>
		<div id="content" class="site-content">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<article id="post-52" class="post-52 page type-page status-publish has-post-thumbnail">
						<div class="entry-content">
							<div class="poem-wrap">
								<div class="poem-border poem-left"></div>
								<div class="poem-border poem-right"></div>
								<div id="h1">念两句</div>
								<div v-if="soup">
									<p id="poem">{{soup.data}}</p>
									<p id="info">{{soup.date}}</p>
								</div>
								<div id="info" v-else>
									加载中...
								</div>
							</div>
						</div>
					</article>
				</main>
			</div>
		</div>

		<div class="updateSoup" @click="updateSoup">
			<div class="input">切 换</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				soup: null,
				loadOk: true,
				loadOkBlur: true
			}
		},
		methods: {
			lazyload() {
				this.loadOkBlur = false
				this.loadOk = false
			},
			updateSoup() {
				this.getSoup()
			},
			getSoup() {
				this.soup = null
				uni.request({
						url: '/api'
					})
					.then(res => {
						this.soup = res[1].data
					})
			}
		},
		onLoad() {
			this.getSoup()
		}
	}
</script>

<style scoped>
	.soul-container {
		background-color: #fff;
		height: 100%
	}

	.pattern-center {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
	}

	.pattern-center:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.pattern-attachment-img {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-origin: border-box;
		width: 100%;
		height: 400px;
	}


	.pattern-center header.pattern-header {
		position: absolute;
		top: 45%;
		left: 0;
		right: 0;
		text-align: center;
		color: #fff;
		text-shadow: 2px 2px 10px #000;
		z-index: 1;
	}

	.pattern-center:after {
		content: '';
		width: 150%;
		height: 4.375rem;
		background: #fff;
		left: -25%;
		bottom: -2.875rem;
		border-radius: 100%;
		position: absolute;
	}


	.toc {
		position: sticky;
		top: 100px;
	}

	.entry-content {
		position: relative;
		overflow: hidden;
	}

	.entry-content::before {
		content: "";
		display: table;
		table-layout: fixed;
	}

	.poem-wrap {
		position: relative;
		width: 730px;
		max-width: 80%;
		border: 2px solid #797979;
		text-align: center;
		margin: 50px auto;
	}

	.poem-wrap #h1 {
		margin: 20px 6px;
		font-size: 2em !important;
		position: relative;
		display: inline-block;
		letter-spacing: 4px;
		color: #797979;
	}

	.poem-wrap p#poem {
		font-size: 25px;
	}

	.poem-wrap p {
		width: 70%;
		margin: auto;
		line-height: 30px;
		color: #797979;
	}

	.poem-wrap p#info {
		font-size: 15px;
		margin: 15px auto;
	}

	.poem-wrap p {
		margin: auto;
		line-height: 30px;
		color: #797979;
	}

	.entry-content::after {
		clear: both
	}

	/* 缩略图 */
	.thumbnail {
		width: 100%;
		height: 100%;
		object-fit: cover;
		pointer-events: none;
		filter: blur(50px);
		/* this is needed so Safari keeps sharp edges */
		transform: scale(1);
		transition: 2.5s filter linear, 2.5s -webkit-filter linear;
	}

	.lazyload {
		filter: blur(0px);
	}

	.updateSoup {
		margin: 0 auto;
		max-width: 80%;
		padding-bottom: 50px
	}

	.input {
		color: #000;
		border: 1px solid #000;
		background: 0 0 !important;
		margin: 0;
		padding: 15px 25px;
		text-transform: none;
		transition: all .1s ease-out;
		box-shadow: none;
		text-shadow: none;
		text-align: center;
		border-radius: 3px;
	}

	.updateSoup:hover .input {
		border-color: #FE9600;
		color: #FE9600
	}
</style>
