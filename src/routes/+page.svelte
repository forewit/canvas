<script lang="ts">
  // import swapy from npm
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { getAppContext } from "$lib/app.svelte";
  import { getPagesContext } from "$lib/pages.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { getDirectoryContext } from "$lib/directories.svelte";
  import Button from "$lib/Components/Button.svelte";
  import TextInput from "$lib/Components/TextInput.svelte";
  import Folder from "$lib/Components/Folder.svelte";
  import Page from "$lib/Components/Page.svelte";
  import Icon from "$lib/Components/Icon.svelte";
  import ColorPicker from "$lib/Components/ColorPicker.svelte";

  const app = getAppContext();
  const pages = getPagesContext();
  const firebase = getFirebaseContext();
  const directory = getDirectoryContext();

  let currentFolderPages = $derived.by(() => {
    return Object.keys(pages).filter(
      (id) =>
        directory.currentFolder.pages &&
        directory.currentFolder.pages.includes(id)
    );
  });

  function createPage() {
    const id = crypto.randomUUID().slice(0, 8);
    const page = {
      title: "Untitled",
      content: "",
      lastUpdated: Date.now(),
    };
    pages[id] = page;
    return id;
  }
</script>

<div
  class="page-container"
  style="background-color: {directory.currentFolder.color};"
>
  <header>
    {#if directory.currentPath.length > 1}
      <button
        class="back-button"
        onclick={() => {
          if (directory.currentPath.length > 1) {
            directory.currentPath.pop();
          }
        }}
      >
        <Icon url="{base}/images/icons/back.svg" color="var(--bg)" size="24px" />
      </button>
    {/if}

    <div class="title">{directory.currentFolder.name}</div>
    <ColorPicker bind:color={directory.currentFolder.color} />
  </header>

  <main>
    <div class="grid">
      {#if directory.currentFolder.subfolders}
        {#each directory.currentFolder.subfolders as id}
          <div class="item">
            <Folder
              folder={directory.folders[id]}
              onclick={() => directory.currentPath.push(id)}
            />
          </div>
        {/each}
      {/if}

      <div
        class:item={directory.currentFolder.subfolders}
        class:full-width-item={!directory.currentFolder.subfolders}
      >
        <button class="add-folder" onclick={() => directory.addSubfolder()}>
          <Icon url="{base}/images/icons/plus.svg" color="var(--bg)" />
        </button>
      </div>

      {#each currentFolderPages as id}
        <div class="full-width-item">
          <Page page={pages[id]} onclick={() => goto(base + "/" + id + "/")} />
        </div>
      {/each}
      <div class="full-width-item">
        <button
          class="add-page"
          onclick={() => {
            const id = createPage();
            directory.addPageID(id);
          }}
        >
          <Icon url="{base}/images/icons/plus.svg" color="var(--bg-alt)" />
        </button>
      </div>
    </div>
  </main>

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
  header {
    position: sticky;
    top: 0;
    z-index: 999;
    padding-block: 20px;
    padding-inline: calc(var(--safe-area-inline) + var(--m));

    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .title {
    text-wrap: nowrap;
    font-size: 20px;
    font-weight: 400;
    color: var(--bg);
  }
  main {
    padding-block: 30px;
    padding-inline: 20px;
    max-width: 560px;
    min-width: 320px;
    margin: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 80px);
    justify-content: center;
    gap: 20px;
  }
  .item {
    height: 70px;
    display: grid;
    place-items: center;
  }

  .add-folder {
    place-self: center;
    width: 30px;
    aspect-ratio: 1;
    position: relative;
  }
  .add-folder::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    opacity: 0.4;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .full-width-item {
    grid-column: 1/-1;
    width: 100%;
    height: 36px;
    display: grid;
  }

  .add-page {
    place-self: center;
    width: 200px;
    height: 24px;
    position: relative;
  }
  .add-page::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    opacity: 0.4;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
  }
</style>
