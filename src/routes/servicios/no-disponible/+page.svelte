<script lang="ts">
import Service from "$lib/components/servicios/Service.svelte";
</script>

{#snippet image()}
	<enhanced:img
		src="$lib/assets/servicios/podcast-no-disponible.png"
		alt="Podcast no disponible"
		class="rounded-t-sm"
	/>
{/snippet}

<main class="bg-white">
	<div class="flex flex-col gap-7 pb-4 pt-8">
		<Service title="PODCAST NO DISPONIBLE" enhancedImage={image}>
			<span>
				El programa no está disponible en formato podcast. Puedes escucharlo en su horario habitual
				en directo desde nuestra app
			</span>
		</Service>
	</div>
</main>
