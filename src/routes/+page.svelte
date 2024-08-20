<script lang="ts">
  import { pagesState } from "$lib/State/pagesState.svelte";
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { userState } from "$lib/State/userState.svelte";
  import { appState } from "$lib/State/appState.svelte";
  import type { Page } from "$lib/State/pagesState.svelte";

  let currentPages = $derived.by(() => {
    let pages: Record<string, Page> = {};
    appState.directory.pageIDs.forEach((id) => {
      pages[id] = pagesState.get()[id];
    });
    return pages;
  });
</script>

<header>
  <button
    class="logout-button"
    onclick={() => {
      logout();
    }}>Logout</button
  >

  <button
    class="spellcheck-button"
    onclick={() => {
      userState.get().spellcheck = !userState.get().spellcheck;
    }}>Spellcheck: {userState.get().spellcheck}</button
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
      pagesState.get()[id] = page;
      appState.directory.pageIDs.push(id);
    }}>+📄</button
  >

  <button
    class="new-path-button"
    onclick={() => {
      appState.directory.subDirectories.push({
        name: "New Path",
        parent: appState.directory,
        pageIDs: [],
        subDirectories: [],
      });
    }}>+📂</button
  >
</header>

<main>
  <div class="current-path">
    <button
      class="back-button"
      disabled={!appState.directory.parent}
      onclick={() => {
        if (appState.path.length > 0) {
          appState.path.pop();
        }
      }}>Back</button
    >
    {#each appState.path as directory, i}
      {#if i === appState.path.length - 1}
        <p>/ <input type="text" bind:value={directory.name} /></p>
      {:else}
        <p>/ {directory.name}</p>
      {/if}
    {/each}
  </div>
  <section id="items">
    {#each appState.directory.subDirectories as subDirectory, i}
      <div class="path">
        <p>📂</p>
        <input type="text" bind:value={subDirectory.name} />
        <button
          class="open-subpath-button"
          onclick={() => appState.directory = subDirectory}>Go</button
        >
        <button
          class="delete-subpath-button"
          onclick={() => {
            appState.directory.subDirectories.slice(i, 1);
          }}>❌</button
        >
      </div>
    {/each}

    {#each Object.entries(pagesState.get()) as [id, page]}
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
          onclick={() => delete pagesState.get()[id]}>❌</button
        >
      </div>
    {/each}
  </section>
</main>

<style>
  header {
    display: flex;
    gap: var(--s);
    border: 3px solid darkcyan;
  }
  #items {
    border: 3px solid darkblue;
    display: grid;
    gap: var(--s);
    grid-auto-flow: row;
  }
  .path {
    display: flex;
    align-items: center;
    gap: var(--s);
  }
  .page {
    display: flex;
    align-items: center;
    gap: var(--s);
  }

  .current-path {
    display: flex;
    align-items: center;
    gap: var(--s);
    border: 3px solid darkorange;
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
