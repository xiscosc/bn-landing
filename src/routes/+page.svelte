<script lang="ts">
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { page } from "$app/state";
import HomeLinks from "$lib/components/HomeLinks.svelte";

if (browser && page.url.searchParams.get("page") === "privacy") {
	goto("/privacy", { replaceState: true });
}
</script>

<main>
	<div class="flex flex-col w-full items-center justify-center p-6 gap-10">
		<div class="w-auto md:w-1/4">
			<enhanced:img src="$lib/assets/logo.webp" alt="BN Mallorca Radio Logo" />
		</div>
		<HomeLinks />
	</div>
</main>
