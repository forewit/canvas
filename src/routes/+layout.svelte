<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { appStore } from "$lib/state/appStore";
  import { firebaseUser } from "$lib/state/firebaseStore";



  onMount(() => {
    firebaseUser.subscribe((user) => {
      if (user === null) {
        $appStore.authRedirect = window.location.pathname.slice(base.length);
        goto(`${base}/login`);
      }
    });
  });
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
  />
  <meta name="theme-color" content="var(--bg)" />
</svelte:head>
