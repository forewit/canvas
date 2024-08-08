<script lang="ts">
  import type { Snippet } from "svelte";
  import { firebaseState } from "$lib/firebase/firebaseState.svelte";
  import { appState } from "$lib/state/appState.svelte";
  import { logout } from "$lib/components/Auth/authUtils";
  import { goto } from "$app/navigation";
  import ThemeWrapper from "$lib/components/UI/ThemeWrapper.svelte";
  import ProgressBar from "$lib/components/UI/Elements/ProgressBar.svelte";

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
