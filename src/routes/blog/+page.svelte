<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
</script>

<div class="block" id="welcome">
	<h1>Coming soon...</h1>
	
</div>

<style>
	h1{
		font-size: 2.5rem;
	}
	h3{
		color: blue;
		font-size: 2rem;
	}
	p{
		font-size: 1.5rem;
	}
	.block{
		padding: 5rem 15%;
	}
	@media (max-width: 1000px){
		.block{
			padding: 2rem 2rem;
		}
		img{
			width: 100%;
		}
	}
	img{
		width: 600px;
	}
	#services{
		background-color: #FFDDDD;
	}
	#technology{
		background-color: #FFDDDD;
	}
</style>
