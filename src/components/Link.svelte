<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    link: string;
    text: string;
    children?: Snippet;
  }

  let { link, text, children = undefined }: Props = $props();
</script>

<a href={link} target="_blank">
  <div
    class="flex flex-row rounded-lg border border-red-700 p-4 items-center gap-5"
  >
    {@render children?.()}
    <span class="text-white text-lg font-semibold">
      {text}
    </span>
  </div>
</a>
