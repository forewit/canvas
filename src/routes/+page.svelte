<script lang="ts">
  import { pagesState } from "$lib/State/pagesState.svelte";
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { userState } from "$lib/State/userState.svelte";
  import { appState } from "$lib/State/appState.svelte";
  import type { Page } from "$lib/State/pagesState.svelte";
  import { pathState } from "$lib/State/pathState.svelte";

  let currentPages = $derived.by(() => {
    let pages: Record<string, Page> = {};
    appState.path.pageIDs.forEach((id) => {
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
      }
      pagesState.get()[id] = page;
      appState.path.pageIDs.push(id);
    }}>+📄</button
  >

  <button class="new-path-button" onclick={() => {}}>+📂</button>

  <button
    class="test-button"
    onclick={() => {
      pathState.test = !pathState.test;
    }}>Test</button
  >
</header>

<main>
  <div class="current-path">
    <button
      class="back-button"
      disabled={!appState.path.parent}
      onclick={() => {
        if (appState.path.parent) {
          appState.path = appState.path.parent;
        }
      }}>Back</button
    >

    {#each appState.directory as path, i}
      {#if i === appState.directory.length - 1}
        <p>/ <input type="text" bind:value={appState.path.name} /></p>
      {:else}
        <p>
          / <button
            onclick={() => {
              appState.path = path;
            }}>{path.name}</button
          >
        </p>
      {/if}
    {/each}
  </div>
  <section id="items">
    {#each appState.path.subpaths as subpath}
      <div class="path">
        <p>📂</p>
        <input type="text" bind:value={subpath.name} />
        <button
          class="open-subpath-button"
          onclick={() => (appState.path = subpath)}>Go</button
        >
        <button
          class="delete-subpath-button"
          onclick={() => {
            appState.path.subpaths.splice(
              appState.path.subpaths.indexOf(subpath),
              1
            );
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
