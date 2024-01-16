<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("welcome.title")}</h1>
{#each $_("welcome.text") as paragraph}
	<p>{paragraph}</p>
{/each}