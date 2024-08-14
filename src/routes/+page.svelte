<script lang="ts">
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { userState } from "$lib/State/userState.svelte";
  import { pagesState } from "$lib/State/pagesState.svelte";
  import { firebaseState } from "$lib/Firebase/firebaseState.svelte";

  function addPage() {
    pagesState.newPage();
  }

  function changeSettings() {
    userState.spellcheck = !userState.spellcheck
  }

  function clickPage(id: string) {
      pagesState.pages[id].title = "Title" + Math.random().toString().slice(2, 4);
  }

  function rightClickPage(e:MouseEvent, id: string) {
    e.preventDefault();
    delete pagesState.pages[id];
  }
</script>

<div class="container">
  <button class="ui-card" onclick={addPage}>Add Page</button>
  <button class="ui-card" onclick={changeSettings}>Change Settings</button>
  <button class="ui-card" onclick={logout}>Logout</button>

  {#each Object.entries(pagesState.pages) as [id, page] (page)}
    <button oncontextmenu={(e) => rightClickPage(e, id)} onclick={() => clickPage(id)} class="ui-card">📄{id.slice(0, 4)}: {page.title}</button>
  {/each}

  <p>Theme: {userState.themeName}</p>
  <p>Spellcheck: {userState.spellcheck ? "On" : "Off"}</p>
</div>

<style>
  .container {
    height: 100%;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
</style>
