<script lang="ts">
  import type { Snippet } from "svelte";
  import { setFirebaseState } from "$lib/Firebase/firebaseState.svelte";
  import { setAppState } from "$lib/State/appState.svelte";
  import { setUserState } from "$lib/State/userState.svelte";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/UI/ThemeWrapper.svelte";
  import ProgressBar from "$lib/UI/ProgressBar.svelte";
  import { syncUserSettingsFromFirestore } from "$lib/Firebase/Firestore/syncUserSettingsFromFirestore.svelte";

  let { children }: { children: Snippet } = $props();

  const firebaseState = setFirebaseState();
  const appState = setAppState();
  const userState = setUserState();

  syncUserSettingsFromFirestore();

  $effect(() => {
    appState.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebaseState.user && !firebaseState.isLoading) {
      goto("/login/");
    }
  });
</script>

<ThemeWrapper>
  {#if firebaseState.isLoading}
    <ProgressBar />
  {:else}
    {@render children()}
  {/if}
</ThemeWrapper>
