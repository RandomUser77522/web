<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
</script>

<div class="text-block" id="welcome">
	<h1>{$_("esthetics.title")}</h1>
	<h2 class="subtitle">{$_("esthetics.subtitle")}</h2>
	<h2 class="subtitle">{$_("esthetics.motto")}</h2>
	{#each $_("esthetics.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>