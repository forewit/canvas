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

  let currentFolderPages = $derived.by(() => {
    return Object.keys(pages).filter(
      (id) =>
        directory.currentFolder.pages &&
        directory.currentFolder.pages.includes(id)
    );
  });
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
      disabled={directory.currentPath.length <= 1}
      onclick={() => {
        if (directory.currentPath.length > 1) {
          directory.currentPath.pop();
        }
      }}>🔙</button
    >
    {#each directory.currentPath as id, i}
      <p>/</p>
      <button
        onclick={() =>
          (directory.currentPath = directory.currentPath.slice(0, i + 1))}
        >{directory.folders[id].name}</button
      >
    {/each}
  </section>

  <section id="folders">
    {#if directory.currentFolder.subfolders}
      {#each directory.currentFolder.subfolders as id}
        <div class="folder">
          <p>📁</p>
          <input type="text" bind:value={directory.folders[id].name} />
          <button
            class="goto-folder-button"
            onclick={() => {
              directory.currentPath.push(id);
            }}
          >
            Go
          </button>
          <button
            class="close-folder-button"
            onclick={() => directory.removeSubfolder(id)}>❌</button
          >
        </div>
      {/each}
    {/if}
  </section>

  <section id="pages">
    {#each currentFolderPages as id}
      <div class="page">
        <p>📄</p>
        <input type="text" bind:value={pages[id].title} />
        <button
          class="goto-page-button"
          onclick={() => goto(base + "/" + id + "/")}
        >
          Go
        </button>
        <button
          class="close-page-button"
          onclick={() => {
            directory.removePageID(id);
            delete pages[id];
          }}>❌</button
        >
      </div>
    {/each}
  </section>
</main>

<footer>
  <section id="orphaned-folders">
    <p>Orphaned folders:</p>
    {#each directory.orphanedFolders as id}
      <div class="page">
        <p>💀📁 {directory.folders[id].name}</p>
        <button
          class="close-page-button"
          onclick={() => {
            delete directory.folders[id];
          }}>❌</button
        >
      </div>
    {/each}
  </section>
  <section id="orphaned-pages">
    <p>Orphaned pages:</p>
    {#each directory.orphanedPages as id}
      <div class="page">
        <p>💀📄 {pages[id].title}</p>
        <button
          class="close-page-button"
          onclick={() => {
            delete pages[id];
          }}>❌</button
        >
      </div>
    {/each}
  </section>
</footer>

<style>
  header {
    display: flex;
    gap: var(--s);
    margin-bottom: var(--m);
  }

  footer {
    position: fixed;
    bottom: 0;
  }

  #path {
    display: flex;
    align-items: center;
    gap: var(--s);
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
