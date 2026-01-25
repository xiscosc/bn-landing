<script lang="ts">
import Privacy from "$lib/components/Privacy.svelte";
</script>

<main>
	<div class="flex flex-col w-full items-center justify-center p-6 gap-10">
		<div class="w-auto md:w-1/4">
			<a href="/" aria-label="Ir a inicio">
				<enhanced:img src="$lib/assets/logo.webp" alt="BN Mallorca Radio Logo" />
			</a>
		</div>
		<Privacy />
	</div>
</main>
