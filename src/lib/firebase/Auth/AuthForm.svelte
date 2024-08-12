<script lang="ts">
  import { login } from "./authUtils";
  import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
  import ProgressBar from "$lib/UI/ProgressBar.svelte";
  
  let { onSuccessfulLogin }: { onSuccessfulLogin: () => void } = $props();
  
  let email = $state("");
  let password = $state("");
  let failedLogin = $state(false);

  async function handleSubmit() {
    try {
      failedLogin = false;
      await login(email, password);
      onSuccessfulLogin();
    } catch (err) {
      console.log("Login failed!");
      failedLogin = true;
    }
  }

  $effect(() => {
    if (firebaseState.user) {
      onSuccessfulLogin();
    }
  });
</script>

{#if firebaseState.user}
  <ProgressBar />
{:else}
  <form class="form" onsubmit={handleSubmit}>
    <input
      class="email"
      bind:value={email}
      type="email"
      placeholder="Email"
      required
    />
    <input
      class="password"
      bind:value={password}
      type="password"
      placeholder="Password"
      required
    />
    {#if failedLogin}
      <b class="error">Wrong password!</b>
    {/if}
    <input type="submit" value="Login" class="btn" />
  </form>
{/if}


<style>

  .form {
    font-family: var(--ui-font);
    font-size: var(--ui-font-size);

    width: 305px;
    background-color: var(--bg-alt);
    padding: 20px 24px;
    border-radius: 8px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 40px 40px 40px;
    row-gap: 10px;
    grid-template-areas:
      "email email"
      "pass pass"
      "error btn";
  }

  .email {
    grid-area: email;
  }
  .password {
    grid-area: pass;
  }
  .error {
    grid-area: error;
    color: var(--error);
    font-size: 12px;
    align-self: center;
    justify-self: left;
    border-radius: 4px;
    padding: 5px 6px;
  }

  .password,
  .email {
    width: 100%;
    padding: 10px;
    background-color: var(--bg);
    border: 2px solid var(--bg-alt);
    color: var(--text);
    border-radius: 6px;
    outline: none;
  }

  .password:focus,
  .email:focus {
    border-color: var(--main);
    padding: 9px;
  }

  .password::placeholder,
  .email::placeholder {
    color: var(--text);
  }

  .btn {
    outline-color: var(--main);
    margin: 2px 0;
    padding: 0 18px;
    background-color: var(--bg); 
    color: var(--text);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    justify-self: right;
    grid-area: btn;
  }

  .btn:hover {
    background-color: var(--text);
    color: var(--bg);
  }
  .btn:active {
    background-color: var(--sub);
    color: var(--bg);
  }
</style>
