<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import '../styles.css'
</script>

<div class="text-block" id="welcome">
	<h1 class="title">{$_("implants.title")}</h1>
	<h2 class="subtitle">{$_("implants.subtitle")}</h2>
	<img src="../images/implant.jpg" alt="Implant">
	{#each $_("implants.content") as content}
		<h3 class="topic">{content.topic}</h3>
		<p class="text">{@html content.text}</p>
	{/each}
</div>

<style>
	img{
		width: 600px;
	}
	@media (max-width: 1000px){
		img{
			width: 100%;
		}
	}
</style>
