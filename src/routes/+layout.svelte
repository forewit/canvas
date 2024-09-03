<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/Components/ThemeWrapper/ThemeWrapper.svelte";
  import ProgressBar from "$lib/Components/ProgressBar.svelte";
  import PublishingStatus from "$lib/Components/PublishingStatus.svelte";
  import { base } from "$app/paths";
  import { setFirebaseContext } from "$lib/firebase.svelte";
  import { setAppContext } from "$lib/app.svelte";
  import { setPagesContext } from "$lib/pages.svelte";
  import { setDirectoryContext } from "$lib/directories.svelte";

  let { children }: { children: Snippet } = $props(); 
  
  const firebase = setFirebaseContext();
  const pages = setPagesContext();
  const directories = setDirectoryContext();
  const app = setAppContext();

  $effect(() => {
    app.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebase.user && !firebase.isLoading) {
      goto(base + "/login/");
    }
  });

  onMount(() => {
    window.addEventListener("beforeunload", (e) => {
      if (firebase.isPublishing) e.preventDefault();
    });

    return () => {
      firebase.destroy();
    }
  })
</script>

<ThemeWrapper>
  {#if firebase.isLoading}
    <ProgressBar />
  {:else}
    <div class="publishing-status">
      <PublishingStatus />
    </div>
    {@render children() }
  {/if}
</ThemeWrapper>

<style>
  .publishing-status {
    pointer-events: none;
    position: absolute;
    bottom: var(--m);
    right: calc(var(--m) + var(--safe-area-right));
    z-index: 1;
  }
</style>
