<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("services.title")}</h1>

<div class="grid-container">
	{#each $_("services.text") as paragraph}
		<div class="grid-element">
			<a href="/services/{paragraph.href}">{paragraph.title}</a>
		</div>
	{/each}
</div>

<style>
	a{
		text-decoration: underline;
		text-align: center;
		color: black;
	}
	.grid-container{
		display: grid;
		grid-template-columns: [row1-start] 34% [row1-end row2-start] 
								34% [row2-end row3-start] 34% [row3-end];
	}
	.grid-element{
		text-align: center;
		font-size: 20px;
		margin: 1rem;
	}
	@media screen and (max-width: 992px){
		.grid-container{
			grid-template-columns: [row1-start] 50% [row1-end row2-start] 
								50% [row2-end];
		}
	}
	@media screen and (max-width: 720px){
		.grid-container{
			display: block;
		}
	}

</style>