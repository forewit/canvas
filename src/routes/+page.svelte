<script lang="ts">
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { userState } from "$lib/State/userState.svelte";
  import { pagesState } from "$lib/State/pagesState.svelte";


  function addPage() {
    pagesState.createPage();
  }

  function changeSettings() {
    userState.spellcheck = !userState.spellcheck;
    userState.triggerUpdate();
  }
</script>

<div class="container">
  <button class="ui-card" onclick={addPage}>Add Page</button>
  <button class="ui-card" onclick={changeSettings}>Change Settings</button>
  <button class="ui-card" onclick={logout}>Logout</button>

  <ul>
    {#each Object.entries(pagesState.pages) as [key, value]}
      <li>🪪{key}📄{value.title}</li>
    {/each}
  </ul>
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
