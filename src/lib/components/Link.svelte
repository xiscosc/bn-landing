<script lang="ts">
import type { SimpleIcon } from "simple-icons";
import type { Snippet } from "svelte";

interface Props {
	link: string;
	text: string;
	icon: SimpleIcon;
	children?: Snippet;
}

let { link, text, icon, children = undefined }: Props = $props();
</script>

<a href={link} target="_blank" rel="noopener noreferrer">
	<div class="flex flex-row rounded-lg border border-red-700 p-4 items-center gap-5">
		<svg
			role="img"
			viewBox="0 0 24 24"
			class="fill-white w-1/12"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
		>
			<title>{icon.title}</title>
			<path d={icon.path} />
		</svg>
		<span class="text-white text-lg font-semibold">
			{text}
		</span>
	</div>
</a>
