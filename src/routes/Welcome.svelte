<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("welcome.title")}</h1>
{#each $_("welcome.text") as paragraph}
	<p>{paragraph}</p>
{/each}

<div class="flex-container">
	<img src="images/pano1.jpg" alt="Clinic Picture 1"/>
	<img src="images/pano2.jpg" alt="Clinic Picture 2"/>
</div>

<style>
	img{
		width: 400px;
	}
	.flex-container{
		display: flex;
		justify-content: space-around;
	}
	@media screen and (max-width: 900px){
		.flex-container{
			display: block;
		}
		img{
			width: 100%;
		}
	}
</style>