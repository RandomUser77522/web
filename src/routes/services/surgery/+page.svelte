<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("surgery.title")}</h1>
	<h2 class="subtitle">{@html $_("surgery.subtitle")}</h2>
	<img src="../images/implant.jpg" alt="Implant" class="service-img">
	{#each $_("surgery.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>

<style>
	img{
		width: 600px
	}
</style>