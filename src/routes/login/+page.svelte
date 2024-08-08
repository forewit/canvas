<script>
  import { appState } from "$lib/state/appState.svelte";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import Auth from "$lib/components/Auth/Auth.svelte";

  function redirect() {
    if (appState.authRedirect === `${base}/login/`) appState.authRedirect = "/";
    goto(appState.authRedirect);
  }
</script>

<Auth onSuccessfulLogin={redirect} />

