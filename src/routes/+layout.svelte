<script lang="ts">
import "../app.css";
import { page } from "$app/state";
import Footer from "$lib/components/Footer.svelte";

let { children } = $props();

const isHome = $derived(page.url.pathname === "/");
const isServicios = $derived(page.url.pathname.startsWith("/servicios"));
</script>

<svelte:head>
	<title>BN MCA Radio</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	{@render children()}
	{#if !isServicios}
		<Footer hideCommit={isHome} />
	{/if}
</div>
