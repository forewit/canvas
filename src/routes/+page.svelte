<script lang="ts">
  // import swapy from npm
  import { base } from "$app/paths";
  import { getAppContext } from "$lib/app.svelte";
  import { getPagesContext } from "$lib/pages.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { getDirectoryContext } from "$lib/directories.svelte";
  import Button from "$lib/Components/Button.svelte";
  import Tree from "$lib/Components/D&D Theme/TreePanel.svelte";

  const app = getAppContext();
  const pages = getPagesContext();
  const firebase = getFirebaseContext();
  const directory = getDirectoryContext();
</script>

<div class="page-container">
  <header>
    <Tree
      tree={directory.tree}
      newPage={(parent) => {
        const id = crypto.randomUUID().slice(0, 8);
        pages[id] = {
          lastUpdated: Date.now(),
          title: "Untitled",
          content: "",
        }
        directory.addPageID(parent, id);
      }}
      newFolder={(parent) => {
        directory.addSubfolder(parent);
      }}
      removeChild={(parent, child) => {
        directory.removeChild(parent, child);
      }}
    />
  </header>

  <footer>
    <a href="{base}/profile">
      <Button iconURL="{base}/images/icons/gear.svg"></Button>
    </a>
    <section id="orphaned-folders">
      <p>Orphaned folders:</p>
      {#each directory.orphanedFolders as id}
        <p>
          💀📁 {directory.tree[id].name}<button
            class="close-page-button"
            onclick={() => {
              delete directory.tree[id];
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
