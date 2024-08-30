<script lang="ts">
  import { getAppContext } from "$lib/app.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { base } from "$app/paths";
  import Button from "$lib/Components/Button.svelte";

  const firebase = getFirebaseContext();
  const app = getAppContext();
</script>

<h1>Profile</h1>

<a href="{base}/"><Button>🏠Home</Button></a>

<Button
  onclick={() => {
    firebase.logout();
  }}>Logout</Button
>

<Button
  onclick={() => {
    app.spellcheck = !app.spellcheck;
  }}>Spellcheck: {app.spellcheck}</Button
>
