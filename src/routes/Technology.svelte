<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("technology.title")}</h1>
<ul>
	{#each $_("technology.text") as paragraph}
		<li>{paragraph}</li>
	{/each}
</ul>

<div class="grid-container">
	<div class="grid-element">
		<img src="images/itero.jpg" alt="iTero Scanner">
		<figcaption>iTero 3D Scanner</figcaption>
	</div>
	<div class="grid-element">
		<img src="images/lab-bake.jpg" alt="In-house Labratory">
		<figcaption>In-house Labratory</figcaption>
	</div>
	<div class="grid-element">
		<img src="images/vatech.jpg" alt="CT Scanner">
		<figcaption>CT Scanner</figcaption>
	</div>
	<div class="grid-element">
		<img src="images/emax.jpg" alt="e.max crown">
		<figcaption>e.max</figcaption>
	</div>
	<div class="grid-element">
		<img src="images/Trophy1.jpg" alt="mastering Itero award">
		<figcaption>Itero Awars</figcaption>
	</div>
</div>

<style>
	li{
		font-size: 1.5rem;
	}
	img{
		width:100%;
		height: 250px;
		object-fit: cover;
	}
	figcaption{
		margin-bottom: 1rem;
	}
	.grid-container{
		display: grid;
		grid-template-columns: [row1-start] 50% [row1-end row2-start] 50% [row2-end];
		justify-content: center;
	}
	.grid-element{
		margin: 1rem;
	}
	@media screen and (max-width: 720px){
		.grid-container{
			display: block;
		}
	}
</style>