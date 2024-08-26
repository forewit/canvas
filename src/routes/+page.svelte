<script lang="ts">
  import { pagesState, type Page } from "$lib/State/pagesState.svelte";
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { userState } from "$lib/State/userState.svelte";
  import { pathState } from "$lib/State/pathState.svelte";
  import { setDirectoryContext } from "$lib/State/directory.svelte";
  import { getAppContext } from "$lib/Firebase/app.svelte";
  import { getPagesContext } from "$lib/Firebase/pages.svelte";

  const directory = setDirectoryContext();
  const app = getAppContext();
  const pages = getPagesContext();

  let currentPages = $derived.by(() => {
    let currentPages: Record<string, Page> = {};
    pathState.currentDirectory.pageIDs.forEach((id) => {
      if (id in pages) {
        currentPages[id] = pagesState.get()[id];
      }
    });
    return currentPages;
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
      pathState.currentDirectory.pageIDs.push(id);
    }}>+📄</button
  >

  <button
    class="new-path-button"
    onclick={() => {
      pathState.addDirectory("New");
    }}>+📂</button
  >
</header>

<main>
  <div class="current-path">
    <button
      class="back-button"
      disabled={pathState.currentPath.length === 0}
      onclick={() => {
        pathState.currentPath.pop();
      }}>Back</button
    >

    <button
      class="home-button"
      onclick={() => {
        pathState.currentPath = [];
      }}>{pathState.root.name}</button
    >
    {#each pathState.currentPath as id, i}
      {#if i === pathState.currentPath.length - 1}
        <p>
          / <input type="text" bind:value={pathState.currentDirectory.name} />
        </p>
      {:else}
        <p>/</p>
        <button
          onclick={() => {
            pathState.currentPath = pathState.currentPath.slice(0, i + 1);
          }}
          >{pathState.getDirectory(pathState.currentPath.slice(0, i + 1))
            .name}</button
        >
      {/if}
    {/each}
  </div>
  <section id="items">
    {#each Object.entries(pathState.currentDirectory.subDirectories) as [id, dir], i}
      <div class="path">
        <p>📂</p>
        <input type="text" bind:value={dir.name} />
        <button
          class="open-subpath-button"
          onclick={() => {
            pathState.currentPath.push(id);
          }}>Go</button
        >
        <button
          class="delete-subpath-button"
          onclick={() => {
            pathState.deleteDirectory(id);
          }}>❌</button
        >
      </div>
    {/each}

  </section>

  <p>All pages:</p>
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
