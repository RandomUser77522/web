<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("anxiety-phobia.title")}</h1>
	{#each $_("anxiety-phobia.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>
