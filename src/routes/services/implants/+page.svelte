<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
	let expandedSections = [];
	function toggleSection(index) {
		expandedSections = expandedSections.includes(index) 
			? expandedSections.filter(i => i !== index)
			: [...expandedSections, index];
	}
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("implants.title")}</h1>
	<h2 class="subtitle">{$_("implants.subtitle")}</h2>
	<img src="../images/implant.jpg" alt="Implant">
	{#each $_("implants.content") as content, index}
		<h3 class="topic">{content.topic}</h3>
		<p class="text" class:expanded={expandedSections.includes(index)}>{@html content.text}</p>
		<button on:click={() => toggleSection(index)} class="read-more">
			{expandedSections.includes(index) ? $_("read less") : $_("read more")}
		</button>
	{/each}
</div>

<style>
	img{
		width: 600px;
	}
	@media (max-width: 1000px){
		img{
			width: 100%;
		}
	}
</style>
