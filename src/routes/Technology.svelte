<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("technology.title")}</h1>
<ul>
	{#each $_("technology.text") as paragraph}
		<li>{paragraph}</li>
	{/each}
</ul>
<style>
	li{
		font-size: 1.5rem;
	}
</style>