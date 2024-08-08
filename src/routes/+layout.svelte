<script lang="ts">
  import type { Snippet } from "svelte";
  import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
  import { appState } from "$lib/State/appState.svelte";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/UI/ThemeWrapper.svelte";

  let { children }: { children: Snippet } = $props();

  $effect(() => {
    appState.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebaseState.user) {
      goto("/login/");
    }
  });
</script>

<ThemeWrapper>
    {@render children()}
</ThemeWrapper>
