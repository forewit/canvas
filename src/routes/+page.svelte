<script lang="ts">
  import { logout } from "$lib/Firebase/Auth/authUtils";
  import { UserState } from "$lib/State/userState.svelte";
  import { getUserState } from "$lib/State/userState.svelte";
  import { getPagesState } from "$lib/State/pagesState.svelte";

  const userState = getUserState();
  const pagesState = getPagesState();

  function addPage() {
    pagesState.createPage();
  }

  function changeSettings() {
    userState.spellcheck = !userState.spellcheck;
    console.log(userState.spellcheck);
  }
</script>

<div class="container">
  <button class="ui-card" onclick={addPage}>Add Page</button>
  <button class="ui-card" onclick={changeSettings}>Change Settings</button>
  <button class="ui-card" onclick={logout}>Logout</button>

  <ul>
    {#each Object.entries(pagesState.pages) as [key, value]}
      <li>{key}: {value}</li>
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
