<script lang="ts">
  import { onDestroy, type Snippet } from "svelte";
  import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
  import { appState } from "$lib/State/appState.svelte";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/UI/ThemeWrapper.svelte";
  import ProgressBar from "$lib/UI/ProgressBar.svelte";
  import PublishingStatus from "$lib/Firebase/PublishingStatus.svelte";
  import { base } from "$app/paths";

  let { children }: { children: Snippet } = $props();


  $effect(() => {
    appState.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebaseState.user && !firebaseState.isLoading) {
      goto(base + "/login/");
    }
  });

  onDestroy(() => {
    firebaseState.destroy();
  });
</script>

<ThemeWrapper>
  {#if firebaseState.isLoading}
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
