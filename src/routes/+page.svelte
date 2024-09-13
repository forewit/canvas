<script lang="ts">
  // import swapy from npm
  import { base } from "$app/paths";
  import { getAppContext } from "$lib/app.svelte";
  import { getPagesContext } from "$lib/pages.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { getDirectoryContext } from "$lib/directories.svelte";
  import Button from "$lib/Components/Button.svelte";
  import Tree from "$lib/Components/D&D Theme/Tree.svelte";

  const app = getAppContext();
  const pages = getPagesContext();
  const firebase = getFirebaseContext();
  const directory = getDirectoryContext();
</script>

<div class="page-container">
  <header>
    <Tree
      tree={directory.folders}
      newPage={() => {
        const id = crypto.randomUUID().slice(0, 8);
        pages[id] = {
          lastUpdated: Date.now(),
          title: "Untitled",
          content: "",
        }
        directory.addPageID(id);
      }}
    />
  </header>

  <footer>
    <a href="{base}/profile">
      <Button iconURL="{base}/images/icons/gear.svg"></Button>
    </a>
    <Button
      variant="error"
      iconURL="{base}/images/icons/xmark-small.svg"
      disabled={directory.currentPath.length <= 1}
      onclick={() => {
        if (directory.currentPath.length > 1) {
          const id = directory.currentPath.pop();
          if (id) directory.removeSubfolder(id);
        }
      }}>Delete Folder</Button
    >

    <section id="orphaned-folders">
      <p>Orphaned folders:</p>
      {#each directory.orphanedFolders as id}
        <p>
          💀📁 {directory.folders[id].name}<button
            class="close-page-button"
            onclick={() => {
              delete directory.folders[id];
            }}>❌</button
          >
        </p>
      {/each}
    </section>
    <section id="orphaned-pages">
      <p>Orphaned pages:</p>
      {#each directory.orphanedPages as id}
        <p>
          💀📄 {pages[id].title}<button
            class="close-page-button"
            onclick={() => {
              delete pages[id];
            }}>❌</button
          >
        </p>
      {/each}
    </section>
  </footer>
</div>

<style>
  .page-container {
    height: 100%;
  }

  footer {
    position: fixed;
    bottom: 0;
  }
</style>
