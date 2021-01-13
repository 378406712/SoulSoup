<template>
	<div class="soul-container">

		<div class="pattern-center ">
			<div class="pattern-attachment-img"> <img src="https://2heng.xin/wp-content/uploads//2017/08/pixiv54839592.png"
				 data-src="https://2heng.xin/wp-content/uploads//2017/08/pixiv54839592.png" class="lazyload" onerror="imgError(this,3)"
				 style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"></div>
			<header class="pattern-header ">
				<h1 class="entry-title">毒鸡汤</h1>
			</header>
		</div>
		<div id="content" class="site-content">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<article id="post-52" class="post-52 page type-page status-publish has-post-thumbnail hentry">
						<div class="entry-content">
							<div class="poem-wrap">
								<div class="poem-border poem-left"></div>
								<div class="poem-border poem-right"></div>
								<h1>念两句</h1>
								<p id="poem">{{soup.data}}</p>
								<p id="info">{{soup.date}}</p>
							</div>
						</div>
					</article>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				soup: {}
			}
		},
		onLoad() {
			uni.request({
					url: '/api'
				})
				.then(res => {
					this.soup = res[1].data
				})
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

	@media (max-width: 860px) .pattern-attachment-img {
		height: 280px;
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

	@media (max-width: 860px) .pattern-center h1.cat-title,
	.pattern-center h1.entry-title,
	.single-center .single-header h1.entry-title {
		font-size: 26px;
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

	@media (max-width: 860px) .site-main {
		padding: 15px 0 0;
	}

	.hentry {
		margin: 0 0 1.5em;
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

	@media (max-width: 500px) .poem-wrap {
		margin-top: 60px;
		margin-bottom: 20px;
		border-top: 2px solid #797979;
	}

	.poem-wrap {
		position: relative;
		width: 730px;
		max-width: 80%;
		border: 2px solid #797979;
		text-align: center;
		margin: 80px auto;
	}

	.poem-wrap h1 {
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
</style>
