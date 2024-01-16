<script>
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import Welcome from "./Welcome.svelte";
	import Services from "./Services.svelte";
	import Team from "./Team.svelte";
	import Technology from "./Technology.svelte";
	import Promo from "./Promo.svelte";
</script>

<div class="block" id="welcome">
	<Welcome/>
</div>

<div class="block" id="services">
	<Services/>
</div>

<div class="block" id="team">
	<Team/>
</div>

<div class="block" id="technology">
	<Technology/>
</div>

<div class="block" id="promo">
	<Promo/>
</div>

<style>
	.block{
		padding: 5rem 15%;
	}
	@media (max-width: 1000px){
		.block{
			padding: 2rem 4rem;
		}
	}
	#services{
		background-color: #FFDDDD;
	}
	#technology{
		background-color: #FFDDDD;
	}
</style>
