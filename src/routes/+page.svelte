<script lang="ts">
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

<header>
  <div class="path">
    <Button
      variant="alt"
      onclick={() => {
        if (directory.currentPath.length > 1) {
          directory.currentPath.pop();
        }
      }}
      disabled={directory.currentPath.length <= 1}>🔙</Button
    >

    {#each directory.currentPath as id, i}
      <p>/</p>
      {#if i === directory.currentPath.length - 1}
        <TextInput
          bind:value={directory.folders[id].name}
          placeholder="Untitled"
        />
      {:else}
        <Button
          variant="alt"
          onclick={() =>
            (directory.currentPath = directory.currentPath.slice(0, i + 1))}
          >{directory.folders[id].name}</Button
        >
      {/if}
    {/each}
    {#if directory.currentPath.length > 1}
      <Button
        variant="error"
        iconURL="{base}/images/icons/xmark-small.svg"
        onclick={() => {
          const id = directory.currentPath.pop();
          if (id) directory.removeSubfolder(id);
        }}
      />
    {/if}
  </div>

  <a class="profile" href="{base}/profile"
    ><Button variant="alt" iconURL="{base}/images/icons/gear.svg"></Button></a
  >
</header>

<main>
  <section id="folders">
    {#if directory.currentFolder.subfolders}
      {#each directory.currentFolder.subfolders as id}
        <Folder
          folder={directory.folders[id]}
          onclick={() => directory.currentPath.push(id)}
        />
      {/each}
    {/if}
    <div id="add-folder">
      <Button
        iconURL="{base}/images/icons/plus.svg"
        onclick={() => directory.addSubfolder()}
      ></Button>
    </div>
  </section>
  <section id="pages">
    {#each currentFolderPages as id}
      <Page page={pages[id]} onclick={() => goto(base + "/" + id + "/")} />
    {/each}
    <div id="add-page">
      <Button
        iconURL="{base}/images/icons/plus.svg"
        onclick={() => {
          const id = createPage();
          directory.addPageID(id);
        }}
      />
    </div>
  </section>
</main>

<footer>
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

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 999;
    padding-block: var(--m);
    padding-inline: calc(var(--safe-area-inline) + var(--m));
    background-color: var(--bg-alt);
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .path {
    display: flex;
    align-items: center;
    gap: var(--m);
  }

  main {
    max-width: 600px;
    display: flex;
    flex-direction: column;
  
    align-items: left;
    gap: var(--l);
    padding: var(--xl);
  }

  section#folders {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 55px);
    grid-template-rows: 55px;
    gap: var(--l);
  }
  #add-folder {
    aspect-ratio: 1;
    display: grid;
    place-items: center;
  }

  section#pages {
    display: grid;

    gap: var(--l);
  }

  #add-page {
  }

  footer {
    position: fixed;
    bottom: 0;
  }
</style>
