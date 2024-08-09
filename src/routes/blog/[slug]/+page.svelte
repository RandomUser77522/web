<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="block" id="welcome">
	<h1>{data.params}</h1>
	<h1>{data.post.title}</h1>
	<div>{@html data.post.content}</div>
</div>

<style>
	h1{
		font-size: 2.5rem;
	}
	h3{
		color: blue;
		font-size: 2rem;
	}
	p{
		font-size: 1.5rem;
	}
	.block{
		padding: 5rem 15%;
	}
	@media (max-width: 1000px){
		.block{
			padding: 2rem 2rem;
		}
		img{
			width: 100%;
		}
	}
	img{
		width: 600px;
	}
	#services{
		background-color: #FFDDDD;
	}
	#technology{
		background-color: #FFDDDD;
	}
</style>
