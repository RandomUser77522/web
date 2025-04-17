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
	<h1>{$_("esthetics.title")}</h1>
	<h2 class="subtitle">{$_("esthetics.subtitle")}</h2>
	<h2 class="subtitle">{$_("esthetics.motto")}</h2>
	{#each $_("esthetics.content") as content, index}
		<h3 class="topic">{content.topic}</h3>
		<p class="text" class:expanded={expandedSections.includes(index)}>{@html content.text}</p>
		<button on:click={() => toggleSection(index)} class="read-more">
			{expandedSections.includes(index) ? $_("read less") : $_("read more")}
		</button>
	{/each}
	{#each $_("esthetics.FAQ") as content}
		<Faq question = {content.question} answer = {content.answer}/>
	{/each}
</div>