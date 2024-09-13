<script lang="ts">
  import { getPagesContext } from "$lib/pages.svelte.js";
  import { getDirectoryContext } from "$lib/directories.svelte";
  import { base } from "$app/paths";
  import Button from "$lib/Components/Button.svelte";
  import TextInput from "$lib/Components/TextInput.svelte";

  const { data }: { data: { id: string } } = $props();

  const pages = getPagesContext();
  const directory = getDirectoryContext();

  const id = data.id;
  const page = pages[id];
</script>

<header>
  <Button variant="alt" onclick={() => history.back()}>🔙</Button>
  <TextInput bind:value={page.title} placeholder="Untitled" />
  <Button
    variant="error"
    iconURL="{base}/images/icons/xmark-small.svg"
    onclick={() => {
      directory.removePageID(id);
      delete pages[id];
    }}
  />
</header>


<main>
  <!-- Layout builder -->
</main>

<style>
  header {
    display: flex;
    align-items: center;
    gap: var(--m);
    padding: var(--m);
    background-color: var(--bg-alt);
  }
</style>
