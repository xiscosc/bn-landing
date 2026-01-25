<script lang="ts">
import "../app.css";

let { children } = $props();
</script>

<svelte:head>
	<title>BN MCA Radio</title>
</svelte:head>

{@render children()}
