<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("promo.title")}</h1>
{#each $_("promo.text") as paragraph}
	<p>{paragraph}</p>
{/each}