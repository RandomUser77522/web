<script>
	import { _ } from "svelte-i18n";
	import { locale, isLoading } from "svelte-i18n";
	import Contact from "./Contact.svelte";

	let open = false;
	let sidebar = false;
	let lang;
	// locale.set(lang);
</script>

<html>
{#if $isLoading}
{:else}
	<body>
		<nav>
			<div id="menu-bar">
				<div id="sidebar-button">
					<button id="sidebar-button-svg" class:open on:click={() => open = !open}>
					  <!-- svg with 3 lines -->
					  <svg width=32 height=24>
					   <line id="top" x1=0 y1=2 x2=32 y2=2/>
					   <line id="middle" x1=0 y1=12 x2=32 y2=12/>
					   <line id="bottom" x1=0 y1=22 x2=32 y2=22/>
					  </svg>
					</button>
				</div>
				<div>
					<select class="nav-bar-element" id="language-selector" bind:value={lang} on:change={locale.set(lang)}>
						<option value="en">🇬🇧 English</option>
						<option value="th">🇹🇭 ภาษาไทย</option>
						<option value="cn">🇨🇳 中文</option>
					</select>
					<img class="logo-pic" src="favicon.png" alt="Logo" height="22">
				</div>
			</div>
			<ul class="nav-bar">
				<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
				{#each $_("navbar") as item}
					<li class="nav-bar-element"><a href="/#{item.href}">{item.name}</a></li>
				{/each}
				<div>
					<select class="nav-bar-element" id="language-selector" bind:value={lang} on:change={locale.set(lang)}>
						<option value="en">🇬🇧 English</option>
						<option value="th">🇹🇭 ภาษาไทย</option>
						<option value="cn">🇨🇳 中文</option>
					</select>
					<img class="logo-pic" src="favicon.png" alt="Logo" height="30">
				</div>
			</ul>
		</nav>
		<aside class:open id="sidebar-box">
			<nav id="sidebar">
				{#each $_("navbar") as item}
					<li class="side-bar-element"><a href="/#{item.href}" on:click={() => open = !open}>{item.name}</a></li>
				{/each}
			</nav>
		</aside>

		<slot/>
		<div class="block" id="contact">
			<Contact/>
		</div>
	</body>
{/if}
</html>

<style>
	html{
		font-family: Poppins;
	}
	body{
		margin: 0;
	}
	a{
		text-decoration: none;
		color: #EE2244;
	}
	button{
		font-family: Poppins;
	}
	ul{
		padding: 0;
	}
	nav{
		background-color: rgba(255,255,255,0.8);
		position: fixed;
		top:0;
		width:100%;
	}
	.nav-bar{
		margin: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.menu-button{
		margin-left: 8rem;
		margin-top: 2rem;
		text-decoration: none;
		color: #EE2244;
		display: none;
	}
	.nav-bar-element{
		list-style-type: none;
		color: #EE2244;
		font-size: 1.2em;
		margin: 0rem 1rem;
	}
	.side-bar-element{
		list-style-type: none;
		color: #EE2244;
		font-size: 1.2em;
		margin: 1rem 4rem;
	}
	.nav-bar-element:hover{
		font-weight: bolder;
	}
	#language-selector{
		background-color: white;
		border: none;
	}
	#sidebar-button{
		display: none;
	}
	#menu-bar{
		display: none;
	}
	#sidebar{
		background-color: white;
		margin-top: 3.75rem;
		padding-bottom: 100%;
		display: none;
	}
	@media screen and (max-width: 1080px){
		.nav-bar{
			display: none;
		}
		.menu-button{
			display: flex;
		}
		#sidebar-button{
			display: flex;
			z-index: 200;
		}
		#menu-bar{
			display: flex;
			justify-content: space-between;
			margin: 1rem 4rem;
		}
		#sidebar{
			display: block;
		}
	}

	@media screen and (max-width: 720px){
		#menu-bar{
			margin: 1rem 2rem;
		}
	}

	nav a{
		font-size: 1.25rem;
	}
	
	aside {
	    /* offscreen by default */
	    left: -100%;
	    top: 20%;
	    transition: left 0.3s ease-in-out;
	    position: absolute;
	    text-align: right;
	}

	.open{
	    /* slide on screen */
	    left: calc(250px - 100vw);
	}

	#sidebar-button-svg{
		z-index: 20;
		background-color: rgba(255,255,255,0.0);
		border-style: none;
		border-color: none;
	}
	.logo-pic{
		margin: 0;
	}
	svg {
	  min-height: 24px;
	  transition: transform 0.3s ease-in-out;
	}

	svg line {
	  /* `currentColor` means inherit color from the text color */
	  stroke: currentColor;
	  stroke-width: 3;
	  transition: transform 0.3s ease-in-out
	}

	line{
		color: #EE2244;
	}

	.open svg {
	  transform: scale(0.7)
	}

	/* rotate the top line */
	.open #top {
	  transform: translate(6px, 0px) rotate(45deg)
	}

	/* hide the middle */
	.open #middle {
	  opacity: 0;
	}

	/* rotate the bottom line */
	.open #bottom {
	  transform: translate(-12px, 9px) rotate(-45deg)
	}
</style>