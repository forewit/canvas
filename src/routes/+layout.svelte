<script lang="ts">
  import { onDestroy, type Snippet } from "svelte";
  import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
  import { setAppState } from "$lib/State/appState.svelte";
  import { setPagesState } from "$lib/State/pagesState.svelte";
  import { setUserState } from "$lib/State/userState.svelte";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/UI/ThemeWrapper.svelte";
  import ProgressBar from "$lib/UI/ProgressBar.svelte";
  import {
    syncUserStateWithFirestore,
    syncPagesStatePagesWithFirestore,
  } from "$lib/Firebase/Firestore/syncStateWithFirestore.svelte";

  let { children }: { children: Snippet } = $props();

  const appState = setAppState();
  const pagesState = setPagesState();
  const userState = setUserState();

  syncUserStateWithFirestore();
  syncPagesStatePagesWithFirestore();

  $effect(() => {
    appState.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebaseState.user && !firebaseState.isLoading) {
      goto("/login/");
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
    {@render children() }
  {/if}
</ThemeWrapper>
