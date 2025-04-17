<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
	import Faq from "../FAQ.svelte";
	let expandedSections = [];
	function toggleSection(index) {
		expandedSections = expandedSections.includes(index) 
			? expandedSections.filter(i => i !== index)
			: [...expandedSections, index];
	}
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("surgery.title")}</h1>
	<h2 class="subtitle">{@html $_("surgery.subtitle")}</h2>
	<img src="../images/implant.jpg" alt="Implant" class="service-img">
	{#each $_("surgery.content") as content, index}
		<h3 class="topic">{content.topic}</h3>
		<p class="text" class:expanded={expandedSections.includes(index)}>{@html content.text}</p>
		<button on:click={() => toggleSection(index)} class="read-more">
			{expandedSections.includes(index) ? $_("read less") : $_("read more")}
		</button>
	{/each}
	{#each $_("surgery.FAQ") as content}
		<Faq question = {content.question} answer = {content.answer}/>
	{/each}
</div>

<style>
	img{
		width: 600px
	}
</style>