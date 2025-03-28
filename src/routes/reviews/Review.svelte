<script>
	import { _ } from "svelte-i18n";
    export let img = "";
    export let name = "";
    export let review = "";

</script>

<html lang="eng">
    <div id="reviewer_profile">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src = {img} alt=" Reviewer Profile Picture" id="reviewer_image">
        <p id="reviewer_name">{name}</p>
    </div>
    <p id="review">{review}</p>
</html>

<style>
    html{
		background-color: #FFDDDD;
		margin: none;
        margin-top:2rem;
		padding: 2rem 15%;
        padding-left: 2rem;
        display: flex;
	}
    #reviewer_profile{
        margin-left: 1rem;
    }
    #reviewer_image{
        width:5rem;
    }
    #reviewer_name{
        width:7rem;
    }
    #review{
        margin-left: 2rem;
    }
</style>