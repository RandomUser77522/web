<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("rct.title")}</h1>
	<div class="flex-container">
		<img src="../images/rct-before.jpg" alt="Root Canal Before Treatment">
		<img src="../images/rct-after.jpg" alt="Root Canal After Treatment">
	</div>
	{#each $_("rct.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>

<style>
	img{
		height: 400px;
		margin: 2rem;
		object-fit: cover;
	}
</style>
