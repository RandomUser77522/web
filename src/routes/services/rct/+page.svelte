<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
</script>

<div class="block" id="welcome">
	<h1>{$_("rct.title")}</h1>
	<div class="flex-container">
		<img src="../images/rct-before.jpg" alt="Root Canal Before Treatment">
		<img src="../images/rct-after.jpg" alt="Root Canal After Treatment">
	</div>
	{#each $_("rct.text") as paragraph}
			<p>{paragraph}</p>
	{/each}
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
	}
	img{
		height: 400px;
		margin: 2rem;
		object-fit: cover;
	}
	.flex-container{
		display: flex;
	}
	@media screen and (max-width: 720px){
		.flex-container{
			display: block;
		}
		img{
			height: auto;
			width: 95%;
		}
	}
	#services{
		background-color: #FFDDDD;
	}
	#technology{
		background-color: #FFDDDD;
	}
</style>
