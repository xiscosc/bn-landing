<script lang="ts">
let { children } = $props();
</script>

<svelte:head>
	<title>BN MCA - Servicios</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{@render children()}

<style>
	:global(body) {
		background-color: white;
	}
</style>
