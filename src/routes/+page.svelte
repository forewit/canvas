<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { getAppContext } from "$lib/app.svelte";
  import { getPagesContext } from "$lib/pages.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { getDirectoriesContext } from "$lib/directories.svelte";
  import Button from "$lib/Components/Button.svelte";
  import TextInput from "$lib/Components/TextInput.svelte";

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

  function createPage() {
    const id = crypto.randomUUID().slice(0, 8);
    const page = {
      title: "New Page",
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
      <Button
        variant="alt"
        onclick={() =>
          (directory.currentPath = directory.currentPath.slice(0, i + 1))}
        >{directory.folders[id].name}</Button
      >
    {/each}
  </div>
  <a class="profile" href="{base}/profile"
    ><Button variant="alt" iconURL="{base}/images/icons/gear.svg"></Button></a
  >
</header>

<main>
  <section class="items">
    {#if directory.currentFolder.subfolders}
      {#each directory.currentFolder.subfolders as id}
        <div class="item">
          <Button variant="alt" onclick={() => directory.currentPath.push(id)}
            >📂</Button
          >
          <TextInput variant="alt" bind:value={directory.folders[id].name} />

          <Button
            variant="alt"
            iconURL="{base}/images/icons/xmark-small.svg"
            onclick={() => directory.removeSubfolder(id)}
          />
        </div>
      {/each}
    {/if}
    {#each currentFolderPages as id}
      <div class="item">
        <Button variant="alt" onclick={() => goto(base + "/" + id + "/")}
          >📄</Button
        >
        <TextInput variant="alt" bind:value={pages[id].title} />

        <Button
          variant="alt"
          iconURL="{base}/images/icons/xmark-small.svg"
          onclick={() => {
            directory.removePageID(id);
            delete pages[id];
          }}
        />
      </div>
    {/each}
  </section>
  <section class="buttons">
    <Button onclick={() => directory.addSubfolder()}>+📂</Button>
    <Button
      onclick={() => {
        const id = createPage();
        directory.addPageID(id);
      }}>+📄</Button
    >
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
    position: sticky;
    top: 0;
    z-index: 999;
    margin-bottom: var(--m);
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
    max-width: 800px;
    padding-inline: var(--l);
    margin-inline: auto;
  }

  section.items {
    display: flex;
    flex-direction: column;
    gap: var(--m);
  }
  .item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    background-color: var(--bg-alt);
    padding: var(--s);
    border-radius: 8px;
    gap: var(--s);
  }

  section.buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--m);
    margin-top: var(--l);
  }

  footer {
    position: fixed;
    bottom: 0;
  }
</style>
