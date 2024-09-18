<script lang="ts">
    import type { Snippet } from "svelte";
    import { getAppContext } from "$lib/app.svelte";
    import { getPagesContext } from "$lib/pages.svelte";
    import ProgressBar from "$lib/Components/UI/ProgressBar.svelte";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
  
    let { children, data }: { children: Snippet, data: {id: string} } = $props();
  
    const id = data.id
    const app = getAppContext();
    const pages = getPagesContext();
  
    function redirect() {
      if (app.authRedirect === `${base}/${id}/`) app.authRedirect = `${base}/`;
      goto(app.authRedirect);
    }
  
    $effect(() => {
      if (!pages[id]) {
        redirect();
      }
    });
  </script>
  
  {#if !pages[id]}
    <ProgressBar />
  {:else}
      {@render children() }
  {/if}