<script>
	import { _ } from "svelte-i18n";
</script>

<h1>{$_("promo.title")}</h1>
{#each $_("promo.text") as paragraph}
	<p>{paragraph}</p>
{/each}
<div class="flex-container">
	<img src="images/zoom.jpg" alt="ZOOM Whitening Promotion"/>
	<img src="images/social-security.jpg" alt="Social Security Promotion"/>
</div>

<style>
	img{
		width: 400px;
	}
	.flex-container{
		display: flex;
		justify-content: space-around;
	}
	@media screen and (max-width: 900px){
		.flex-container{
			display: block;
		}
		img{
			width: 100%;
		}
	}
</style>