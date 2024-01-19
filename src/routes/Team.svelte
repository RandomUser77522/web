<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("team.title")}</h1>

<div class="grid-container">
	{#each $_("team.text") as paragraph}
		<div class="grid-element">
			<h3>{paragraph.name}</h3>
			{#each paragraph.desc as line}
				<p>{line}</p>
			{/each}
		</div>
	{/each}
</div>

<div class="flex-container">
	<img src="images/assistants.jpg" alt="Assistants">
	<img src="images/sunee.jpg" alt="Dr. Sunee">
</div>

<style>
	p{
		margin: 0;
	}
	.grid-container{
		display: grid;
		grid-template-columns: [row1-start] 50% [row1-end row2-start] 50% [row2-end];
	}
	.grid-element{
		margin: 1rem;
	}
	@media screen and (max-width: 720px){
		.grid-container{
			display: block;
		}
	}
	.flex-container{
		display: flex;
	}
	img{
		object-fit: cover;
		margin: 0 1rem;
	}
	@media screen and (max-width: 900px){
		.flex-container{
			display: block;
		}
		img{
			width: 95%;
		}
	}
	@media screen and (min-width: 900px){
		img{
			height: 250px;
		}
	}
</style>