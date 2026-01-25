<script lang="ts">
import { siAndroid, siApple, siFacebook, siInstagram, siMaildotru, siUnraid } from "simple-icons";
import Link from "./Link.svelte";
</script>

<div class="w-auto md:w-1/4 flex flex-col gap-4">
	<Link
		icon={siApple}
		text="Descargar app para iPhone"
		link="http://apps.apple.com/es/app/bn-mallorca-radio-oficial/id1483750463"
	>
	</Link>

	<Link
		icon={siAndroid}
		text="Descargar app para Android"
		link="https://play.google.com/store/apps/details?id=com.apploading.bnmallorca"
	>
	</Link>

	<Link
		icon={siUnraid}
		text="Radio Online"
		link="/radioplayer"
	>
	</Link>

	<Link
		icon={siInstagram}
		text="Instagram"
		link="https://www.instagram.com/bnmallorcaradio"
	>
	</Link>

	<Link icon={siFacebook} text="Facebook" link="https://www.facebook.com/@BNMallorcaRadio/">
	</Link>

	<Link icon={siMaildotru} text="Contacto" link="mailto:info@bnmallorca.com">
	</Link>
</div>
