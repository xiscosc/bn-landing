<script lang="ts">
interface Props {
	hideCommit?: boolean;
}

let { hideCommit = false }: Props = $props();

const year = new Date().getFullYear();
const commitHash = __COMMIT_HASH__;
</script>

<footer class="w-full text-center py-6 mt-auto">
	<p class="text-xs text-gray-500">BN MCA COMMUNICATION SLU. {year}.</p>
	{#if !hideCommit}
		<p class="text-[10px] text-gray-600">{commitHash}</p>
	{/if}
</footer>
