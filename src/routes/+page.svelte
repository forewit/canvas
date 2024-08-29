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

  directory.currentFolder.subfolders;

  let currentFolderPages = $derived.by(() => {
    if (!directory.currentFolder.ids) return [];
    return directory.currentFolder.ids.map((id) => ({ id, page: pages[id] }));
  });

  let remainingPages = $derived.by(() => {
    let orphanedPages = [];

    for (let id in pages) {
      // if in currentFolderPages
      if (currentFolderPages.some((page) => page.id === id)) continue;
      orphanedPages.push({ id, page: pages[id] });
    }

    return orphanedPages;
  })

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
      directory.addPageID(id);
    }}>+📄</button
  >

  <button
    class="new-folder-button"
    onclick={() => {
      directory.addSubfolder();
    }}>+📁</button
  >
</header>

<main>
  <section id="path">
    <button
      class="directory-back-button"
      onclick={() => {
        directory.goto(directory.currentPath.slice(0, -1));
      }}>🔙</button
    >
    Root/{directory.currentPath.join("/")}
  </section>

  <section id="folders">
    {#if directory.currentFolder.subfolders}
      {#each directory.currentFolder.subfolders as subfolder}
        <div class="folder">
          <p>📁</p>
          <input type="text" bind:value={subfolder.title} />
          <button
            class="goto-folder-button"
            onclick={() => {
              directory.currentPath.push(subfolder.title);
            }}
          >
            Go
          </button>
          <button
            class="close-folder-button"
            onclick={() => directory.removeSubfolder(subfolder.title)}
            >❌</button
          >
        </div>
      {/each}
    {/if}
  </section>

  <section id="pages">
    {#each currentFolderPages as {id, page}}
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
          onclick={() => {
            directory.removeDocID(id);
            delete pages[id];
          }}>❌</button
        >
      </div>
    {/each}
  </section>

  <section id="remaining-pages">
    <p>Remaining pages:</p>
    {#each remainingPages as {id, page}}
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
          onclick={() => {
            directory.removeDocID(id);
            delete pages[id];
          }}>❌</button
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
  .page {
    display: flex;
    align-items: center;
    gap: var(--s);
  }

  .folder {
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
