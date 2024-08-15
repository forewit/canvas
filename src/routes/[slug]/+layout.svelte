<script lang="ts">
  import type { Snippet } from "svelte";
  import { pagesState } from "$lib/State/pagesState.svelte";
  import { appState } from "$lib/State/appState.svelte";
  import ProgressBar from "$lib/UI/ProgressBar.svelte";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  let { children, data }: { children: Snippet, data: {id: string} } = $props();

  const id = data.id

  function redirect() {
    if (appState.authRedirect === `${base}/${id}/`) appState.authRedirect = `${base}/`;
    goto(appState.authRedirect);
  }

  $effect(() => {
    if (!pagesState.pages[id]) {
      redirect();
    }
  });
</script>

{#if !pagesState.pages[id]}
  <ProgressBar />
{:else}
    {@render children() }
{/if}