<script lang="ts">
  import { onDestroy, type Snippet } from "svelte";
  import { appState } from "$lib/State/appState.svelte";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/UI/ThemeWrapper.svelte";
  import ProgressBar from "$lib/UI/ProgressBar.svelte";
  import PublishingStatus from "$lib/Firebase/PublishingStatus.svelte";
  import { base } from "$app/paths";
  import { setFirebaseContext } from "$lib/Firebase/firebase.svelte";
  import { setAppContext } from "$lib/Firebase/app.svelte";
  import { setPagesContext } from "$lib/Firebase/pages.svelte";

  let { children }: { children: Snippet } = $props(); 
  
  const firebase = setFirebaseContext();
  const app = setAppContext();
  const pages = setPagesContext();

  $effect(() => {
    appState.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebase.user && !firebase.isLoading) {
      goto(base + "/login/");
    }
  });

  onDestroy(() => {
    firebase.destroy();
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
