<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { getAppContext } from "$lib/app.svelte";
  import { getPagesContext } from "$lib/pages.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { getDirectoriesContext } from "$lib/directories.svelte";

  const app = getAppContext();
  const pages = getPagesContext();
  const firebase = getFirebaseContext();
  const directory = getDirectoriesContext();

  let directoryString = $derived(JSON.stringify(directory.root));
</script>

<header>
  <button
    class="logout-button"
    onclick={() => {
      firebase.logout();
    }}>Logout</button
  >

  <button
    class="spellcheck-button"
    onclick={() => {
      app.spellcheck = !app.spellcheck;
    }}>Spellcheck: {app.spellcheck}</button
  >

  <button
    class="new-page-button"
    onclick={() => {
      const id = crypto.randomUUID().slice(0, 8);
      const page = {
        title: "New Page",
        content: "",
        lastUpdated: Date.now(),
      };
      pages[id] = page;
    }}>+📄</button
  >

  <button
  class="new-folder-button"
  onclick={() => {
    directory.newFolder();
  }}>+📁</button
>

</header>

<main>
  

<section id="pages">
  {#each Object.entries(pages) as [id, page]}
    <div class="page">
      <p>📄</p>
      <input type="text" bind:value={page.title} />
      <button
        class="goto-page-button"
        onclick={() => goto(base + "/" + id + "/")}
      >
        Go
      </button>
      <button
        class="close-page-button"
        onclick={() => delete pages[id]}>❌</button
      >
    </div>
  {/each}
</section>

<p>📁 {directoryString}</p>
</main>

<style>
  header {
    display: flex;
    gap: var(--s);
    border: 3px solid darkcyan;
  }
  .page {
    display: flex;
    align-items: center;
    gap: var(--s);
  }

  button {
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
  }
  button:not(:disabled):active {
    background-color: var(--main);
    color: var(--bg);
  }
  button:disabled {
    opacity: 0.5;
  }
</style>
