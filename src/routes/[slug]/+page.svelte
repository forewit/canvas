<script lang="ts">
  import { getPagesContext } from "$lib/pages.svelte.js";

  const { data }: { data: { id: string } } = $props();

  const id = data.id;
  const pages = getPagesContext();
  const page = pages[id];
</script>

  <header>
    <button class="back-button" onclick={() => history.back()}>Back</button>
    <input bind:value={page.title} />
  </header>

<style>
  header {
    display: flex;
    align-items: center;
    gap: var(--m);
    padding: var(--m);
    background-color: var(--main);
  }
  button {
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
  }
  button:active {
    background-color: var(--main);
    color: var(--bg);
  }
</style>
