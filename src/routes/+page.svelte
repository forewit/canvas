<script lang="ts">
  import { pagesState } from "$lib/State/pagesState.svelte";
  import { goto } from "$app/navigation";


</script>

<button class="new-page-button" onclick={()=>{pagesState.newPage()}}>New Page</button>

<div class="pages">
  {#each Object.entries(pagesState.pages) as [id, page]}
  <div class="page">
    <button class="goto-page-button" onclick={() => goto("/" + id)}>
      <p>{page.title}</p>
    </button>
    <button class="close-page-button" onclick={() => delete pagesState.pages[id]}>❌</button>
  </div>
  
  {/each}
</div>



<style>
  button {
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
  }
  button:active {
    background-color: var(--main);
    color: var(--bg);
  }


  .pages {
    border: 3px solid darkred;
    width: min-content;
    display: grid;
    grid-auto-flow: row;
  }

  .new-page-button {
    border: 3px solid darkgreen;
  }

  .page {
    display: flex;
  }

  .close-page-button {
    border: 3px solid darkgoldenrod;
  }

  .goto-page-button {
    border: 3px solid darkblue;
  }
</style>
