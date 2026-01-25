<script lang="ts">
import "../../app.css";
import Footer from "$lib/components/Footer.svelte";

let { children } = $props();
</script>

<svelte:head>
	<title>BN MCA - Servicios</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white">
	{@render children()}
	<Footer />
</div>
