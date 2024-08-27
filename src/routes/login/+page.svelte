<script>
  import { getAppContext } from "$lib/app.svelte";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import AuthForm from "$lib/Components/UI/AuthForm.svelte";

  const app = getAppContext();
  function redirect() {
    if (app.authRedirect === base+"/login/") app.authRedirect = base+"/";
    goto(app.authRedirect);
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