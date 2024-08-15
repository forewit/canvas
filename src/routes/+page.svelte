<script lang="ts">
  import { pagesState } from "$lib/State/pagesState.svelte";
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { userState } from "$lib/State/userState.svelte";
  import { appState } from "$lib/State/appState.svelte";
</script>

<header>
  <button
    class="new-page-button"
    onclick={() => {
      pagesState.newPage();
    }}>New Page</button
  >

  <button
    class="logout-button"
    onclick={() => {
      logout();
    }}>Logout</button
  >

  <button
    class="spellcheck-button"
    onclick={() => {
      userState.spellcheck = !userState.spellcheck;
    }}>Change Spellcheck</button
  >

  <button
    class="set-current-path-button"
    onclick={() =>
      (appState.currentPath = appState.currentPath === "/" ? "/folder/" : "/")}
    >Current path: {appState.currentPath}</button
  >
</header>

<main>
  {#each Object.entries(pagesState.pages) as [id, page]}
    <div class="page">
      <p>{userState.paths[id]}</p>
      <input type="text" bind:value={page.title} />
      <button
        class="goto-page-button"
        onclick={() => goto(base + "/" + id + "/")}
      >
        Go
      </button>
      <button
        class="close-page-button"
        onclick={() => delete pagesState.pages[id]}>❌</button
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
  main {
    border: 3px solid darkred;
    width: min-content;
    display: grid;
    grid-auto-flow: row;
  }

  button {
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
  }
  button:active {
    background-color: var(--main);
    color: var(--bg);
  }

  .page {
    display: flex;
    align-items: center;
    gap: var(--s);
    border: 3px solid darksalmon;
  }
</style>
