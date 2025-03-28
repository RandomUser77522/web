<script>
	import { _ } from "svelte-i18n";
    import Review from "./Review.svelte";
</script>

<html lang="en">
    <h1>Google Reviews</h1>
	{#each $_("reviews") as review}
    	<Review img= {review.img} name = {review.name} review = {review.review}/>
	{/each}
</html>

<style>
    html{
		margin: none;
		padding: 4rem 15%;
		padding-bottom: 6rem;
	}
</style>
