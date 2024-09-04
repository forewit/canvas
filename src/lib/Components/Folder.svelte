<script lang="ts">
  import { type Folder } from "$lib/directories.svelte";
  import { getAppContext } from "$lib/app.svelte";

  type props = {
    folder: Folder;
    onclick?: () => void;
  };

  let { folder, onclick }: props = $props();

  const app = getAppContext();

  let centerTitle = $derived(
    folder.name !== "" &&
      ((!folder.subfolders && !folder.pages) || !app.showFolderPreview)
  );
</script>

<button
  disabled={!onclick}
  class="folder-button"
  class:centerTitle
  {onclick}
  style="background-color: {folder.color}; border-color: {folder.color};"
>
  {#if folder.name !== "" && app.showFolderName}
    <p>{folder.name}</p>
  {/if}

  {#if app.showFolderPreview}
    {#if folder.subfolders}
      <div class="squares">
        {#each folder.subfolders as subfolder}
          <div class="square"></div>
        {/each}
      </div>
    {/if}
    {#if folder.pages}
      {#each folder.pages as page}
        <div class="line"></div>
      {/each}
    {/if}
  {/if}
</button>

<style>
  .folder-button {
    /* Scale font size to change size */
    font-size: 14px;

    width: 5em;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5em;
    padding-bottom: none;
    border-bottom: 0.5em solid;
    border-radius: 0.8em;
    overflow: hidden;
  }
  .folder-button.centerTitle {
    justify-content: center;
  }
  .folder-button:focus-visible {
    outline: var(--bg) dashed var(--xs);
    outline-offset: calc(-1 * var(--xs));
  }

  .folder-button:disabled {
    cursor: auto;
  }

  p {
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 600;
    text-align: center;
    width: 100%;
    color: var(--bg);
  }
  .squares {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }
  .square {
    width: 1em;
    aspect-ratio: 1;
    background-color: var(--bg);
    border-radius: 0.2em;
  }
  .line {
    min-height: 0.4em;
    width: 100%;
    border-radius: 0.1em;
    background-color: var(--bg);
  }
</style>
