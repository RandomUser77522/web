<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
</script>

<div class="block" id="welcome">
	<h1>{$_("full-mouth-rehab.title")}</h1>
	<h3>{$_("full-mouth-rehab.subtitle")}</h3>
	{#each $_("full-mouth-rehab.text") as paragraph}
			<p>{paragraph}</p>
	{/each}
</div>

<style>
	h1{
		font-size: 3rem;
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
	#services{
		background-color: #FFDDDD;
	}
	#technology{
		background-color: #FFDDDD;
	}
</style>
