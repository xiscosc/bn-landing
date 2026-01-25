<script lang="ts">
import type { Snippet } from "svelte";

interface Props {
	title: string;
	enhancedImage: Snippet;
	children?: Snippet;
}

let { title, enhancedImage, children = undefined }: Props = $props();
</script>

<div class="flex flex-col items-center justify-center gap-4 px-6">
	<span class="w-full text-center text-2xl font-bold text-red-500 md:text-3xl">{title}</span>
	<div class="flex max-w-96 flex-col gap-4 rounded-sm bg-[#212121] text-[#BDBDBD]">
		<div class="h-auto">
			{@render enhancedImage()}
		</div>
		<div class="flex flex-col gap-4 px-8 pb-5 pt-2 text-center text-sm">
			{@render children?.()}
		</div>
	</div>
</div>
