<script>
  import { appState } from "$lib/State/appState.svelte";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import Auth from "$lib/Auth/Auth.svelte";

  function redirect() {
    if (appState.authRedirect === `${base}/login/`) appState.authRedirect = "/";
    goto(appState.authRedirect);
  }
</script>

<Auth onSuccessfulLogin={redirect} />
