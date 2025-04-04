<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
    import { loadGetInitialProps } from "next/dist/shared/lib/utils";
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("invisalign.title")}</h1>
	{#each $_("invisalign.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>

