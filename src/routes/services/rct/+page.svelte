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
	<h1 class="title">{$_("rct.title")}</h1>
	<div class="flex-container">
		<img src="../images/rct-before.jpg" alt="Root Canal Before Treatment">
		<img src="../images/rct-after.jpg" alt="Root Canal After Treatment">
	</div>
	{#each $_("rct.content") as content, index}
		<h3 class="topic">{content.topic}</h3>
		<p class="text" class:expanded={expandedSections.includes(index)}>{@html content.text}</p>
		<button on:click={() => toggleSection(index)} class="read-more">
			{expandedSections.includes(index) ? $_("read less") : $_("read more")}
		</button>
	{/each}
	{#each $_("rct.FAQ") as content}
		<Faq question = {content.question} answer = {content.answer}/>
	{/each}
</div>

<style>
	img{
		height: 400px;
		margin: 2rem;
		object-fit: cover;
	}
</style>
