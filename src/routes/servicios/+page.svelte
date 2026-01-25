<script lang="ts">
import Service from "$lib/components/servicios/Service.svelte";

let audios = $state<HTMLAudioElement[]>([]);

function handlePlay(currentAudio: HTMLAudioElement) {
	audios.forEach((audio) => {
		if (audio !== currentAudio) {
			audio.pause();
			audio.currentTime = 0;
		}
	});
}
</script>

{#snippet imagePublicidad()}
	<enhanced:img
		src="$lib/assets/servicios/publicidad_en_radio.png"
		alt="BN MALLORCA"
		class="rounded-t-sm"
	/>
{/snippet}

{#snippet imageEventos()}
	<enhanced:img src="$lib/assets/servicios/eventos.png" alt="BN MALLORCA" class="rounded-t-sm" />
{/snippet}

{#snippet imageProgramacionMusical()}
	<enhanced:img src="$lib/assets/servicios/dj.png" alt="BN MALLORCA" class="rounded-t-sm" />
{/snippet}

{#snippet imageAmbientacionMusical()}
	<enhanced:img
		src="$lib/assets/servicios/ambientacion.png"
		alt="BN MALLORCA"
		class="rounded-t-sm"
	/>
{/snippet}

{#snippet section(title: string, description: string)}
	<div class="flex flex-col gap-1">
		<span class="font-bold">• {title}</span>
		<span>{description}</span>
	</div>
{/snippet}

{#snippet audio(src: string, index: number)}
	<audio
		controls
		class="w-full"
		bind:this={audios[index]}
		onplay={() => handlePlay(audios[index])}
	>
		<source {src} type="audio/mpeg" />
	</audio>
{/snippet}

<main class="bg-white">
	<div class="flex flex-col gap-7 pb-4 pt-8">
		<Service title="PUBLICIDAD EN RADIO" enhancedImage={imagePublicidad}>
			<span>
				BN MCA ofrece diferentes opciones publicitarias para conectar tu marca con una audiencia
				diversa, consolidada y fiel. Nuestros servicios incluyen:
			</span>
			<div class="flex flex-col gap-2">
				{@render section(
					"CUÑAS DE RADIO PERSONALIZADAS",
					"Diseñadas para evitar la saturación del oyente, emitiéndose en bloques publicitarios cortos para maximizar el impacto.",
				)}
				{@render audio("/servicios/cuna-radio-1.mp3", 0)}
				{@render audio("/servicios/cuna-radio-2.mp3", 1)}
			</div>
			<div class="flex flex-col gap-2">
				{@render section(
					"CANCIONES PATROCINADAS",
					"Asocia tu marca con un tema musical. Durante la canción, incluimos un mensaje publicitario que conecta con el oyente de forma natural y directa.",
				)}
				{@render audio("/servicios/cancion-patrocinada-1.mp3", 2)}
			</div>
			<div class="flex flex-col gap-2">
				{@render section(
					"SESIONES MUSICALES PATROCINADAS",
					"Programas personalizados de 60 / 30 minutos o más, exclusivamente dedicados a tu marca, garantizando la máxima visibilidad en radio y también en nuestras redes sociales.",
				)}
				{@render audio("/servicios/sesion-musical-patrocinada.mp3", 3)}
			</div>
			<div class="flex flex-col gap-2">
				{@render section(
					"PUBLIREPORTAJE MICROESPACIO",
					"Emite un mensaje publicitario de mayor duración y descripción más extensa del producto/servicio que incluye un montaje musical sobre la narración.",
				)}
				{@render audio("/servicios/Publireportaje-2.mp3", 4)}
			</div>
		</Service>

		<Service title="ORGANIZACIÓN Y PRODUCCIÓN DE EVENTOS" enhancedImage={imageEventos}>
			<span>
				Con años de experiencia en la escena musical, BN MCA se especializa en la organización de
				conciertos y eventos de gran impacto. Nos encargamos de la producción completa, desde la
				contratación de artistas locales e internacionales hasta la programación musical. También
				ofrecemos la sonorización en todo tipo de eventos y celebraciones: Bodas, aniversarios,
				presentaciones, etc. <strong
					>Disponemos de booking de DJ's y catálogo de grupos musicales</strong
				>
			</span>
			{@render section(
				"CONCIERTOS Y FESTIVALES",
				'Hemos organizado eventos con artistas reconocidos como Nada Surf, Sidonie, La Habitación Roja, entre otros, y trabajamos con DJ\'s nacionales e internacionales. Destacamos nuestras actuaciones de pequeño formato "Acords Íntims" patrocinado por Jägermusic, y vermuts musiqueros con todo tipo de artistas.',
			)}
			{@render section(
				"COLABORACIONES Y PARTICIPACIÓN EN FESTIVALES",
				"Mallorca Live Festival, Cranc Illa de Menorca, Es Gremi, Tramuntana Festival, entre otros.",
			)}
			{@render section(
				"BOOKING DE DJ'S",
				"Contamos con una amplia cartera de DJ's de diferentes estilos para amenizar tu evento o celebración.",
			)}
		</Service>

		<Service title="GESTIÓN DE PROGRAMACIÓN MUSICAL" enhancedImage={imageProgramacionMusical}>
			<span>
				BN MCA no solo selecciona música para radio; también gestionamos la programación musical de
				varios espacios de referencia en la isla. Nos encargamos de la ambientación musical semanal
				y la programación de nuestros DJ's en hoteles, restaurantes, beach clubs, entre otros.
			</span>
		</Service>

		<Service title="AMBIENTACIÓN MUSICAL PERSONALIZADA" enhancedImage={imageAmbientacionMusical}>
			<span>
				Somos expertos en crear la atmósfera musical perfecta para cualquier espacio. A través de
				listas de reproducción adaptadas a franjas horarias y géneros específicos, brindamos una
				ambientación adecuada para hoteles, restaurantes, beach clubs y todo tipo de comercios.
				Actualizamos las listas cada seis meses para asegurar una experiencia fresca y relevante.
				Una muestra de los géneros que ofrecemos incluye:
			</span>
			<div class="flex flex-col gap-1">
				<div>• Downtempo, lounge music, soulful.</div>
				<div>• Pop, nu folk, dream pop, indie y rock suave.</div>
				<div>• Soul, funky, jazzfunk, bossa nova, nu jazz y nu disco.</div>
				<div>• Éxitos y clásicos de los 60's, 70's, 80's, 90's y temas actuales.</div>
			</div>
		</Service>
	</div>
</main>
