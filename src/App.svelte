<script lang="ts">
  import HomeLinks from "./components/HomeLinks.svelte";
  import Privacy from "./components/Privacy.svelte";
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page");
</script>

<main>
  <div class="flex flex-col w-full items-center justify-center p-6 gap-10">
    <div class="w-auto md:w-1/4">
      <img src="/logo.webp" alt="BN Mallorca Radio Logo" />
    </div>
    {#if page === "privacy"}
      <Privacy />
    {:else}
      <HomeLinks />
    {/if}
  </div>
</main>
