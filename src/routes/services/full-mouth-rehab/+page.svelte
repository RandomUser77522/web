<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
</script>

<div class="text-block" id="welcome">
	<h1 clas="title">{$_("full-mouth-rehab.title")}</h1>
	<h2 class="subtitle">{$_("full-mouth-rehab.subtitle")}</h2>
	{#each $_("full-mouth-rehab.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>
