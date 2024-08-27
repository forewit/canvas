<script>
  import { appState } from "$lib/State/appState.svelte";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import AuthForm from "$lib/Components/UI/AuthForm.svelte";

  function redirect() {
    if (appState.authRedirect === base+"/login/") appState.authRedirect = base+"/";
    goto(appState.authRedirect);
  }
</script>


<div class="form-container">
  <AuthForm onSuccessfulLogin={redirect} />
</div>

<style>
  .form-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>